// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'

// Importacion componentes global
import AppAnimation from '../../src/components/AppAnimation.vue'
import AppToggle from '../../src/components/AppToggle.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Componentes globales
    app.component('AppAnimation', AppAnimation)
    app.component('AppToggle', AppToggle)
  }
} satisfies Theme
