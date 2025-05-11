import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Layout, enhanceApp } from '../naive-ui-adapter/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp,
} satisfies Theme
