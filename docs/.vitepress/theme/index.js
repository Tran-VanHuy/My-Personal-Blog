// .vitepress/theme/index.js
import './style.css'
import Layout from './Layout.vue'

export default {
  Layout,
  NotFound: () => {window.location.href = this.$withBase('/404.html')}, // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}