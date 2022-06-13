/* eslint-disable vue/match-component-file-name */
import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import { DenraoCodePreview } from './components'

export default defineClientConfig({
  enhance({ app }) {
    // wrap the `<DenraoCodePreview />` component with plugin options
    app.component('DenraoCodePreview', h(DenraoCodePreview))
  },
})
