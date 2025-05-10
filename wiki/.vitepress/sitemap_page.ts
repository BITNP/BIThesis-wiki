import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import type { SiteConfig } from 'vitepress'

import { getTitleFromSrc } from './util'

/**
 * 生成网站地图
 *
 * 注意是单独页面，并非`sitemap.xml`。用于给智能体导入知识库。
 *
 * 参考 [VitePress 的`src/node/build/generateSitemap.ts`](https://github.com/vuejs/vitepress/blob/26cb685adf54f07fe3e9fd7bfd49a0ff79956923/src/node/build/generateSitemap.ts)。
 */
export async function generate_sitemap_page(site: SiteConfig) {
  const pages = site.pages.map((page) => ({
    file: path.join(site.srcDir, page),
    url: (site.rewrites.map[page] ?? page)
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, site.cleanUrls ? '' : '.html'),
  }))

  const links = await Promise.all(
    pages.map(async ({ file, url }) => {
      const src = await readFile(file, 'utf-8')
      // url 也可能空，例如`/index.md`
      const title = getTitleFromSrc(src) ?? (url || '首页')
      return { url, title }
    })
  )
  links.sort(
    (a, b) =>
      by_category(a, b, (x) => x.url === '') ??
      by_category(a, b, (x) => x.url.startsWith('guide/')) ??
      a.url.localeCompare(b.url)
  )

  await writeFile(
    path.join(site.outDir, 'sitemap.html'),
    [
      '<ul>',
      ...links.map(({ url, title }) => `<li><a href="${site.userConfig.base ?? '/'}${url}">${title}</a></li>`),
      '</ul>',
    ].join('\n')
  )
}

function by_category<Item>(a: Item, b: Item, is_superior: (x: Item) => boolean): number | undefined {
  const a_superior = is_superior(a)
  const b_superior = is_superior(b)
  if (a_superior !== b_superior) {
    return a_superior ? -1 : +1
  }
}
