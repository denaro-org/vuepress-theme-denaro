import { defineClientConfig } from '@vuepress/client'
import { useOneClickCopy } from './composables/index.js'

export default defineClientConfig({
  setup() {
    useOneClickCopy()
  },
})
