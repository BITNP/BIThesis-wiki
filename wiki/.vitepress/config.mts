import { defineConfig } from 'vitepress'
import * as footnote from 'markdown-it-footnote'

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
  themeConfig: {
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/BITNP/BIThesis-wiki/edit/main/wiki/:path',
      text: '帮助我们改善此页面！',
    },
    logo: '/apple-touch-icon.png',
    nav: [
      { text: '文档指南', link: '/guide/preface' },
      { text: '常用指令', link: '/guide/usefulcommand' },
      { text: '疑难杂症', link: '/guide/troubleshooting' },
      { text: 'Overleaf', link: '/guide/preface#q-bithesis-都包含哪些模板' },
      { text: '模板下载', link: 'https://github.com/BITNP/BIThesis/releases/latest' },
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
            { text: '疑难杂症', link: '/guide/troubleshooting' },
            { text: 'LaTeX 学习与使用资源', link: '/guide/resources' },
          ],
        },
        {
          text: '致谢',
          items: [{ text: 'Thanks', link: '/guide/acknowledgements' }],
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
    footer: {
      message: 'Released under the <a href="https://www.latex-project.org/lppl/">LaTeX Project Public License</a>.',
      copyright: 'Copyright © 2020–2024 <a href="https://github.com/BITNP">BITNP</a>',
    },
  },
  markdown: {
    config: (md) => {
      md.use(footnote.default ?? footnote)
    },
  },
})
