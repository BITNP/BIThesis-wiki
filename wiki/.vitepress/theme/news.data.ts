/**
 * News posts, to be used at runtime.
 */

import { createContentLoader } from 'vitepress'

export interface NewsPost {
  /** @example `"−∞ 至2020年10月"` */
  period: string
  /** @example `"/news/2020"` */
  url: string
  /**
   * 按时间倒序排列。
   * @example `["[1.2.0-beta-3] - 2020-06-01", "[1.1.0] - 2020-05-19"]
   */
  releases: string[]
}

declare const data: NewsPost[]
export { data }

export default createContentLoader('news/*.md', {
  includeSrc: true,
  transform(raw): NewsPost[] {
    return raw
      .filter(({ url }) => url !== '/news/') // Ignore `index.md`
      .map(({ url, src }) => parse(url, src as string))
      .sort((a, b) => b.url.localeCompare(a.url)) // 按时间倒序排列
  },
})

function parse(url: string, src: string): NewsPost {
  const lines = src.split('\n')

  const period = lines.find((l) => /^# 更新说明：/.test(l))?.replace('# 更新说明：', '')
  if (!period) {
    console.warn(`未能从 ${url} 中提取一级标题，将用 URL 替代`)
  }

  const releases = lines
    .filter((l) => /^## /.test(l))
    ?.map((line) => {
      const release = /^## (.+?)(?:\{.+\})?$/.exec(line.trim())?.at(1)?.trim()
      if (!release) {
        console.warn(`未能从 ${url} 中提取二级标题，将跳过：“${line}”`)
      }
      return release
    })
    .filter((r) => r !== undefined)

  return { period: period ?? url, url, releases }
}
