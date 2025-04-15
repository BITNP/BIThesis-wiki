import assert from 'node:assert'

import { defineConfig, type DefaultTheme } from 'vitepress'
import * as footnote from 'markdown-it-footnote'

import { generate_index_tex, generate_prev_next_links } from './theme/faq_data'
import LinkRender from './theme/link_render'

export default defineConfig({
  lang: 'zh-CN',
  title: 'BIThesis',
  description:
    '北京理工大学非官方 LaTeX 模板集合，包含本科、研究生毕业设计模板，本科全英文专业模板，外文翻译模板以及更多。🎉（更多文档请访问 wiki 和 release 中的手册）',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { property: 'og:image', itemprop: 'image primaryImageOfPage', content: '/bithesis.png' }],
  ],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://bithesis.bitnp.net',
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/BITNP/BIThesis-wiki/edit/main/wiki/:path',
      text: '帮助我们改善此页面！',
    },
    logo: '/apple-touch-icon.png',
    nav: [
      { text: '文档指南', link: '/guide/preface' },
      { text: '疑难杂症', link: '/faq/' },
      { text: 'Overleaf', link: '/guide/preface#q-bithesis-都包含哪些模板' },
      { text: '模板下载', link: '/guide/downloading-using-templates' },
      {
        text: '加入讨论',
        items: [
          {
            text: 'QQ 群：737548118',
            link: 'https://jq.qq.com/?_wv=1027&k=KYDrmS5z',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/BITNP/BIThesis/blob/master/contributing.md',
          },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/BITNP/BIThesis' },
    ],
    sidebar: {
      '/guide': [
        {
          text: '前言',
          items: [{ text: '写在开头', link: '/guide/preface' }],
        },
        {
          text: '食用方法',
          items: [
            { text: '简介', link: '/guide/intro' },
            { text: '如何开始', link: '/guide/getting-started' },
            { text: '下载模板', link: '/guide/downloading-using-templates' },
            { text: '编辑器配置与模板编译', link: '/guide/configure-and-compile' },
          ],
        },
        {
          text: '常见问题',
          items: [
            { text: '将 LaTeX 转换为 Word', link: '/guide/converting-to-word' },
            { text: 'LaTeX 学习与使用资源', link: '/guide/resources' },
            { text: '常用命令', link: '/guide/commands' },
            // `/faq/`会记于`*.tex`的注释中，需尽量简短，故不前缀`/guide/`；相关影响在`transformPageData`中修复
            { text: '疑难杂症', link: '/faq/' },
          ],
        },
        {
          text: '致谢',
          items: [{ text: 'Thanks', link: '/guide/acknowledgements' }],
        },
      ],
      '/news': [
        {
          text: '更新说明',
          items: [
            { link: '/news/', text: '目录' },
            // 以下需每年更新
            { link: '/news/2025', text: '2024年11月至 +∞' },
            { link: '/news/2024', text: '2023年11月至2024年10月' },
            { link: '/news/2023', text: '2022年11月至2023年10月' },
            { link: '/news/2022', text: '2021年11月至2022年10月' },
            { link: '/news/2021', text: '2020年11月至2021年10月' },
            { link: '/news/2020', text: '−∞ 至2020年10月' },
          ],
        },
      ],
      '/video': [
        {
          text: '视频介绍',
          items: [
            { text: '前言', link: '/video/intro' },
            { text: '第一节 综述', link: '/video/episode-1' },
            { text: '第二节 LaTeX 的下载和安装', link: '/video/episode-2' },
            { text: '第三节 LaTeX 基本介绍', link: '/video/episode-3' },
            { text: '第四节 模板的下载和使用', link: '/video/episode-4' },
            { text: '第五节 格式转化', link: '/video/episode-5' },
            { text: '第六节 项目介绍和疑难解惑', link: '/video/episode-6' },
          ],
        },
      ],
    },
    outline: {
      level: [2, 4],
      label: '本页目录',
    },
    footer: {
      message: 'Released under the <a href="https://www.latex-project.org/lppl/">LaTeX Project Public License</a>.',
      copyright: 'Copyright © 2020–2025 <a href="https://github.com/BITNP">BITNP</a>',
    },
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            processTerm: (term) => {
              const segmenter = new Intl.Segmenter('zh', { granularity: 'word' })
              if (!segmenter) return term
              return Array.from(segmenter.segment(term)).map(({ segment }) => segment)
            },
          },
        },
      },
    },
  },
  markdown: {
    config: (md) => {
      md.use(footnote.default ?? footnote).use(LinkRender)
    },
    anchor: {
      getTokensText: (tokens) =>
        tokens
          // Add `html_inline` from `LinkRender`
          .filter((t) => ['text', 'code_inline', 'html_inline'].includes(t.type))
          .map((t) => t.meta?.slug ?? t.content)
          .join(''),
    },
  },
  transformHead({ pageData: { frontmatter } }) {
    if (frontmatter['redirect-to']) {
      // Perform a redirect by serving the HTML file with an HTTP-REFRESH meta tag.
      // https://github.com/jekyll/jekyll-redirect-from/blob/0378df2984ef689ce16fbe9912ee4e0a199ded73/lib/jekyll-redirect-from/redirect.html

      // 正常应该配置服务器，然而有多种部署方式，且只用于 wiki/guide/troubleshooting，就退而求其次了。

      const to = frontmatter['redirect-to']

      return [
        ['link', { rel: 'canonical', href: to }],
        ['meta', { 'http-equiv': 'refresh', content: `0; url=${to}` }],
        ['meta', { name: 'robots', content: 'noindex' }],
        ['script', {}, `window.location = "${to}"`],
      ]
    }
  },
  buildEnd: generate_index_tex,
  transformPageData(page, context) {
    // Add pre/next links to `/faq/*`
    // https://vitepress.dev/reference/default-theme-prev-next-links
    if (page.relativePath === 'faq/index.md') {
      // 确认`sidebar`改得不太多
      const sidebar = context.siteConfig.userConfig.themeConfig.sidebar['/guide'] as DefaultTheme.SidebarItem[]
      assert.ok(sidebar)
      const section = sidebar.at(-2)
      assert.strictEqual(section?.text, '常见问题')
      assert.strictEqual(section.items?.at(-1)?.link, '/faq/')

      // Fix pre/next links
      page.frontmatter.prev ??= section.items.at(-2)
      page.frontmatter.next ??= sidebar.at(-1)?.items?.at(0)
    } else if (page.relativePath.startsWith('faq/')) {
      const { prev, next } = generate_prev_next_links(page)
      page.frontmatter.prev ??= prev
      page.frontmatter.next ??= next
    }

    // Set outline level for `/news/*`
    // https://vitepress.dev/reference/default-theme-config#outline
    if (page.relativePath.startsWith('news/')) {
      page.frontmatter.outline = { level: 2 }
    }
  },
})
