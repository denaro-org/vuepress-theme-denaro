import { defineClientConfig } from '@vuepress/client'
import { useBaiduPush } from './composables'

export default defineClientConfig({
  setup() {
    useBaiduPush()
  },
})
