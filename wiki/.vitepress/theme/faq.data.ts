import { createContentLoader } from 'vitepress'

import { normalizeTag } from './util'

interface FAQItem {
  title: string
  url: string
  tag: string[]
}

declare const data: FAQItem[]
export { data }

export default createContentLoader('faq/*.md', {
  transform(raw): FAQItem[] {
    return raw
      .map(({ url, frontmatter }) => {
        const title = frontmatter.title
        if (!title) {
          console.warn(`${url} 应当在 frontmatter 中标注 title，但目前缺失`)
        }

        const tag = normalizeTag(frontmatter.tag)
        if (!tag) {
          console.warn(`${url}（${title}）应当在 frontmatter 中标注至少一个 tag，但目前缺失`)
        }

        return { title, url, tag }
      })
      .sort((a, b) => a.url.localeCompare(b.url))
  },
})
