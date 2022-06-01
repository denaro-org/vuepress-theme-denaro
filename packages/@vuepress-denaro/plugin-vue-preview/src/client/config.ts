/* eslint-disable vue/match-component-file-name */
import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import { DenraoVuePreview } from './components'

export default defineClientConfig({
  enhance({ app }) {
    // wrap the `<DenraoVuePreview />` component with plugin options
    app.component('DenraoVuePreview', h(DenraoVuePreview))
  },
})
