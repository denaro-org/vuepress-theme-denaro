import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import { DenraoCodePreview } from './components/index.js'

export default defineClientConfig({
  enhance({ app }) {
    if (__VUEPRESS_SSR__) return
    app.component('DenraoCodePreview', h(DenraoCodePreview))
  },
})
