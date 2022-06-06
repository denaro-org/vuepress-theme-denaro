import { defineClientConfig } from '@vuepress/client'
import { useSmoothScroll } from './composables'
import { enhanceApp } from './enhanceApp'

export default defineClientConfig({
  enhance({ app, router }) {
    enhanceApp({ app, router })
  },
  setup() {
    useSmoothScroll()
  },
})
