import type { PluginFunction, PluginObject } from '@vuepress/core'
import { hash, path } from '@vuepress/utils'
import type { VuePreviewOptions } from '../shared/index.js'
import { mdPluginVuePreview } from './md-plugin-vue-preview/index.js'
import { prepareConfigFile } from './utils/prepareConfigFile.js'
import { PLUGIN_NAME } from './utils.js'

export const vuePreviewPlugin =
  (options: VuePreviewOptions): PluginFunction =>
  (app) => {
    const { rootPath } = options
    const stateOptions = {
      componentsDir: rootPath,
      componentsPatterns: ['**/*.vue'],
      getComponentName: (filename) =>
        path.trimExt(filename.replace(/\/|\\/g, '-')),
    }
    const optionsHash = hash(stateOptions)

    const pluginObj: PluginObject = {
      name: PLUGIN_NAME,

      extendsMarkdown(md) {
        md.use(mdPluginVuePreview, { rootPath })
      },

      clientConfigFile: (app) =>
        prepareConfigFile(app, stateOptions, optionsHash),
    }

    return pluginObj
  }
