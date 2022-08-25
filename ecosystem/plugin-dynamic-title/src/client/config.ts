import { defineClientConfig } from '@vuepress/client'
import { useDynamicTitle } from './composables/index.js'

export default defineClientConfig({
  setup() {
    useDynamicTitle()
  },
})
