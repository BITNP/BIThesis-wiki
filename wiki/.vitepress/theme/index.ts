import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Layout, enhanceApp } from '../naive-ui-adapter/theme'
import InstallGuide from './InstallGuide.vue'
import InstallContent from './InstallContent.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('InstallGuide', InstallGuide)
    app.component('InstallContent', InstallContent)
    enhanceApp({ app })
  },
} satisfies Theme
