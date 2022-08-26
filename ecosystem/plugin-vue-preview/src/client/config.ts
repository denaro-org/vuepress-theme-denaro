/* eslint-disable vue/match-component-file-name */
import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import {
  CodeGroup,
  CodeGroupItem,
  DenraoVuePreview,
} from './components/index.js'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DenraoVuePreview', DenraoVuePreview)
    app.component('DenraoCodeGroup', h(CodeGroup))
    app.component('DenraoCodeGroupItem', CodeGroupItem)
  },
})
