import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'
import type { SiteConfig } from 'vitepress'

const REDIRECT_STATUS_CODE = 308

export interface RedirectRule {
  source: string
  destination: string
  sourceFile: string
  statusCode: number
}

interface RedirectManifest {
  rules: RedirectRule[]
  expandedRules: RedirectRule[]
}

interface RedirectRequest {
  url?: string
}

interface RedirectResponse {
  statusCode: number
  setHeader(name: string, value: string): void
  end(content?: string): void
}

interface RedirectMiddlewareServer {
  middlewares: {
    use(handler: RedirectMiddleware): void
  }
}

interface RedirectWatchServer extends RedirectMiddlewareServer {
  watcher: {
    on(event: 'all', listener: (event: string, filePath: string) => void): void
  }
}

type RedirectNext = (error?: Error) => void
type RedirectMiddleware = (req: RedirectRequest, res: RedirectResponse, next: RedirectNext) => void

interface RedirectPlugin {
  name: string
  configureServer(server: RedirectWatchServer): void
  configurePreviewServer(server: RedirectMiddlewareServer): void
}

export function collectRedirectManifestSync(srcDir: string): RedirectManifest {
  const markdownFiles = walkMarkdownFiles(srcDir)
  const actualRoutes = new Map<string, string>()
  const rulesBySource = new Map<string, RedirectRule>()

  for (const filePath of markdownFiles) {
    const relativePath = path.relative(srcDir, filePath).replaceAll(path.sep, '/')
    actualRoutes.set(routeFromRelativePath(relativePath), relativePath)
  }

  for (const filePath of markdownFiles) {
    const relativePath = path.relative(srcDir, filePath).replaceAll(path.sep, '/')
    const destination = routeFromRelativePath(relativePath)
    const { data } = matter(readFileSync(filePath, 'utf-8'))
    const redirectFrom = data['redirect-from']

    if (redirectFrom === undefined) continue
    if (!Array.isArray(redirectFrom) || redirectFrom.some((item) => typeof item !== 'string')) {
      throw new Error(`${relativePath} 的 redirect-from 必须是 string[]`)
    }

    for (const rawSource of redirectFrom) {
      const source = normalizeRedirectSource(rawSource, relativePath)

      if (source === destination) {
        throw new Error(`${relativePath} 的 redirect-from 不能指向自身：${source}`)
      }

      const actualOwner = actualRoutes.get(source)
      if (actualOwner) {
        throw new Error(`${relativePath} 的 redirect-from ${source} 与真实页面 ${actualOwner} 冲突`)
      }

      const existingRule = rulesBySource.get(source)
      if (existingRule) {
        throw new Error(`${relativePath} 的 redirect-from ${source} 与 ${existingRule.sourceFile} 重复声明`)
      }

      rulesBySource.set(source, {
        source,
        destination,
        sourceFile: relativePath,
        statusCode: REDIRECT_STATUS_CODE,
      })
    }
  }

  const rules = Array.from(rulesBySource.values()).sort((left, right) => left.source.localeCompare(right.source))
  const expandedRules = expandHtmlVariants(rules)

  return { rules, expandedRules }
}

export function createRedirectPlugin(srcDir: string): RedirectPlugin {
  let cachedManifest: RedirectManifest | undefined

  const loadManifest = () => {
    cachedManifest ??= collectRedirectManifestSync(srcDir)
    return cachedManifest
  }

  const invalidateManifest = () => {
    cachedManifest = undefined
  }

  const middleware: RedirectMiddleware = (req, res, next) => {
    try {
      const requestUrl = new URL(req.url ?? '/', 'http://127.0.0.1')
      const rule = loadManifest().expandedRules.find((item) => item.source === requestUrl.pathname)

      if (!rule) {
        next()
        return
      }

      const location = requestUrl.search ? `${rule.destination}${requestUrl.search}` : rule.destination
      res.statusCode = rule.statusCode
      res.setHeader('Location', location)
      res.setHeader('Cache-Control', 'no-store')
      res.end(`Redirecting to ${location}`)
    } catch (error) {
      next(error instanceof Error ? error : new Error(String(error)))
    }
  }

  return {
    name: 'bithesis-redirects',
    configureServer(server) {
      server.watcher.on('all', (_event, filePath) => {
        if (filePath.endsWith('.md')) {
          invalidateManifest()
        }
      })

      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export function writePlatformRedirects(site: SiteConfig) {
  const manifest = collectRedirectManifestSync(site.srcDir)
  const redirectsFile = path.join(site.outDir, '_redirects')

  const content = manifest.expandedRules
    .map((rule) => `${rule.source} ${rule.destination} ${rule.statusCode}`)
    .join('\n')

  writeFileSync(redirectsFile, content.length > 0 ? `${content}\n` : '')
}

export function collectVercelRedirects(srcDir: string) {
  const manifest = collectRedirectManifestSync(srcDir)
  return manifest.expandedRules.map((rule) => ({
    source: rule.source,
    destination: rule.destination,
    statusCode: rule.statusCode,
  }))
}

function walkMarkdownFiles(rootDir: string): string[] {
  const result: string[] = []

  const visit = (currentDir: string) => {
    for (const entry of readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.')) continue
        visit(fullPath)
        continue
      }

      if (entry.isFile() && entry.name.endsWith('.md')) {
        result.push(fullPath)
      }
    }
  }

  visit(rootDir)
  return result.sort()
}

function routeFromRelativePath(relativePath: string): string {
  const withoutIndex = relativePath.replace(/(^|\/)index\.md$/, '$1')
  const withoutExtension = withoutIndex.replace(/\.md$/, '')
  const withLeadingSlash = `/${withoutExtension}`.replaceAll('//', '/')

  return withLeadingSlash === '/' ? withLeadingSlash : withLeadingSlash.replace(/\/$/, '')
}

function normalizeRedirectSource(source: string, relativePath: string): string {
  if (!source.startsWith('/')) {
    throw new Error(`${relativePath} 的 redirect-from 必须以 / 开头：${source}`)
  }
  if (source.includes('#') || source.includes('?')) {
    throw new Error(`${relativePath} 的 redirect-from 不能包含查询参数或 hash：${source}`)
  }
  if (source.endsWith('.md')) {
    throw new Error(`${relativePath} 的 redirect-from 不能使用 .md 路径：${source}`)
  }
  if (source.includes('//')) {
    throw new Error(`${relativePath} 的 redirect-from 不能包含连续斜杠：${source}`)
  }

  if (source.length > 1 && source.endsWith('/')) {
    return source.replace(/\/$/, '')
  }

  return source
}

function expandHtmlVariants(rules: RedirectRule[]): RedirectRule[] {
  const expandedRules = new Map<string, RedirectRule>()

  for (const rule of rules) {
    for (const source of sourceVariants(rule.source)) {
      expandedRules.set(source, { ...rule, source })
    }
  }

  return Array.from(expandedRules.values()).sort((left, right) => left.source.localeCompare(right.source))
}

function sourceVariants(source: string): string[] {
  if (source === '/') {
    return ['/']
  }

  return [`${source}.html`, source]
}
