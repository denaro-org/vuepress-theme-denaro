import { defineClientConfig } from '@vuepress/client'
import { useQrcode } from './composables'

export default defineClientConfig({
  setup() {
    useQrcode()
  },
})
