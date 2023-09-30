import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import { DenraoFlowChart } from './components/index.js'

export default defineClientConfig({
  enhance({ app }) {
    if (typeof window === 'undefined' || !__VUEPRESS_SSR__) return
    app.component('DenraoFlowChart', h(DenraoFlowChart))
  },
})
