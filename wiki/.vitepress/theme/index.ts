import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // override with a wrapper component that injects the slots
  Layout: Layout,
}
