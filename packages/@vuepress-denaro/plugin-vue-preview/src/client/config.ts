/* eslint-disable vue/match-component-file-name */
import { defineClientConfig } from '@vuepress/client'
import {
  CodeGroup,
  CodeGroupItem,
} from '@vuepress/theme-default/lib/client/components/global'
import { h } from 'vue'
import { DenraoVuePreview } from './components'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DenraoVuePreview', h(DenraoVuePreview))
    app.component('DenraoCodeGroup', CodeGroup)
    app.component('DenraoCodeGroupItem', CodeGroupItem)
  },
})
