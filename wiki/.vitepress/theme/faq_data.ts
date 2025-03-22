/**
 * FAQ list, to be used at build-time.
 */

import { writeFileSync } from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'
import { createContentLoader, type PageData, type SiteConfig } from 'vitepress'

import { normalizeTag, tagURL } from './util'

export interface FAQItem {
  title: string
  url: string
  tag: string[]
}

/**
 * A factory to create a content loader.
 *
 * The loader cannot be created before the config is resolved.
 * Therefore, the creation must be delayed, resulting in this factory.
 */
export const factory = () =>
  createContentLoader('faq/*.md', {
    includeSrc: true,
    transform(raw): FAQItem[] {
      return raw
        .filter(({ url }) => url !== '/faq/') // Ignore `index.md`
        .map(({ url, frontmatter, src }) => {
          const title = getTitleFromSrc(src as string)
          if (!title) {
            console.warn(`未能从 ${url} 中提取 title，将用 URL 替代`)
          }

          const tag = normalizeTag(frontmatter.tag)
          if (tag.length === 0) {
            console.warn(`${url}（${title}）应当在 frontmatter 中标注至少一个 tag，但目前缺失`)
          }

          return { title: title ?? url, url, tag }
        })
        .sort((a, b) => a.url.localeCompare(b.url))
    },
  })

function getTitleFromSrc(src: string): string | undefined {
  const lines = matter(src).content.split('\n')

  for (const line of lines) {
    // https://github.com/jooy2/vitepress-sidebar/blob/c6102e0d4aa2fa1395ab60af370d43d9b344fe67/lib/helper.ts#L164-L186
    if (/^# /.test(line)) {
      let title = line.replace(/^# /, '')

      if (/\[(.*)]\(.*\)/.test(title)) {
        // Remove hyperlink from h1 if exists
        const execValue = /(.*)?\[(.*)]\((.*)\)(.*)?/.exec(title) || ''

        title = execValue.length > 0 ? `${execValue[1] || ''}${execValue[2] || ''}${execValue[4] || ''}` : ''
      }

      // Remove certain Markdown format
      // https://github.com/jooy2/vitepress-sidebar/blob/c6102e0d4aa2fa1395ab60af370d43d9b344fe67/lib/helper.ts#L88-L94
      title = title
        .replace(/\*{1,2}([^*]+?)\*{1,2}/g, '$1')
        .replace(/_{1,2}([^_]+?)_{1,2}/g, '$1')
        .replace(/~{1,2}([^~]+?)~{1,2}/g, '$1')
        .replace(/`{1,3}([^`]+?)`{1,3}/g, '“$1”')

      return title
    }
  }
}

/**
 * Generate `faq/index.tex` for the development of `bithesis.pdf`.
 */
export async function generate_index_tex(site: SiteConfig) {
  const pages = await factory().load()

  const index_tex = [
    '\\begin{itemize}',
    ...pages.map(({ title, url }) => '  \\item ' + as_latex_href(title, `https://bithesis.bitnp.net${url}`)),
    '\\end{itemize}',
  ].join('\n')

  writeFileSync(path.join(site.outDir, 'faq/index.tex'), index_tex)
}

// https://github.com/roosta/yank/blob/57373daffcbc15d48e69a3aa67ad7678e6ad26a1/src/format.js

/**
 * Replace in string `s`, with an array of [[regex, replacement], …]
 * https://github.com/roosta/yank/blob/57373daffcbc15d48e69a3aa67ad7678e6ad26a1/src/format.js#L2-L7
 */
function str_esc(s: string, m: [string, string][]): string {
  return m.reduce((acc, [re, repl]) => {
    return acc.replace(new RegExp(`${re}`, 'g'), repl)
  }, s)
}

/**
 * Format as a LaTeX `\href`
 * https://github.com/roosta/yank/blob/57373daffcbc15d48e69a3aa67ad7678e6ad26a1/src/format.js#L60-L80
 */
function as_latex_href(title: string, url: string): string {
  const escaped = str_esc(title, [
    ['\\\\', '\\textbackslash{}'],
    ['(?<!textbackslash|textasciitilde|textgreater|textless|textasciicircum){', '\\{'],
    ['(?<!textbackslash{|textasciitilde{|textless{|textgreater{|textasciicircum{)}', '\\}'],
    ['&', '\\&'],
    ['%', '\\%'],
    ['\\$', '\\$'],
    ['#', '\\#'],
    ['_', '\\_'],
    ['\\~', '\\textasciitilde{}'],
    ['<', '\\textless{}'],
    ['>', '\\textgreater{}'],
    ['\\^', '\\textasciicircum{}'],
  ])
  return `\\href{${url}}{${escaped}}`
}

/**
 * Generate [prev/next links](https://vitepress.dev/reference/default-theme-prev-next-links).
 */
export function generate_prev_next_links(page: PageData): {
  prev: { text: string; link: string }
  next?: { text: string; link: string }
} {
  const prev = { text: '疑难解答', link: '/faq/' }

  const tag = normalizeTag(page.frontmatter.tag).at(0)
  const next = tag ? { text: `${tag} 问题目录`, link: tagURL(tag) } : undefined

  return { prev, next }
}
