import { defineClientConfig } from '@vuepress/client'
import { useBaiduPush } from './composables/index.js'

export default defineClientConfig({
  setup() {
    useBaiduPush()
  },
})
