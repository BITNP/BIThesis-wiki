/**
 * 接入 Naive UI
 * https://www.naiveui.com/zh-CN/os-theme/docs/vitepress
 */

import type { SSGContext, Awaitable } from 'vitepress'

const fileAndStyles: Record<string, string> = {}

export const vite_ssr = {
  noExternal: ['naive-ui', 'date-fns', 'vueuc'],
}

export function postRender(context: SSGContext): Awaitable<SSGContext | void> {
  const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
  const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
  const style = styleRegex.exec(context.content)?.[1]
  const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
  if (vitepressPath && style) {
    fileAndStyles[vitepressPath] = style
  }
  context.content = context.content.replace(styleRegex, '')
  context.content = context.content.replace(vitepressPathRegex, '')
}

export function transformHtml(code: string, id: string): Awaitable<string | void> {
  const html = id.split('/').pop()
  if (!html) return
  const style = fileAndStyles[`/${html}`]
  if (style) {
    return code.replace(/<\/head>/, `${style}</head>`)
  }
}
