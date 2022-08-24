/* eslint-disable vue/match-component-file-name */
import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import { CodeGroup, CodeGroupItem, DenraoVuePreview } from './components'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DenraoVuePreview', h(DenraoVuePreview))
    app.component('DenraoCodeGroup', CodeGroup)
    app.component('DenraoCodeGroupItem', CodeGroupItem)
  },
})
