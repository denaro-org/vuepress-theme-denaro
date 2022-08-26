import { defineClientConfig } from '@vuepress/client'
import { useSmoothScroll } from './composables/index.js'
import { enhanceApp } from './enhanceApp.js'

export default defineClientConfig({
  enhance({ app, router }) {
    enhanceApp({
      app,
      router,
    })

    if (!__VUEPRESS_SSR__) {
      useSmoothScroll()
    }
  },
})
