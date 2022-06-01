import { defineClientConfig } from '@vuepress/client'
import { useOneClickCopy } from './composables'

export default defineClientConfig({
  setup() {
    useOneClickCopy()
  },
})
