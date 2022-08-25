/* eslint-disable vue/match-component-file-name */
import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import { DenraoFlowChart } from './components/index.js'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DenraoFlowChart', h(DenraoFlowChart))
  },
})
