import { defineClientConfig } from '@vuepress/client'
import { useDynamicTitle } from './composables'

export default defineClientConfig({
  setup() {
    useDynamicTitle()
  },
})
