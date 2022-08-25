import { defineClientConfig } from '@vuepress/client'
import { DenaroMoefyCanvas } from './components/index.js'

export default defineClientConfig({
  rootComponents: [DenaroMoefyCanvas],
})
