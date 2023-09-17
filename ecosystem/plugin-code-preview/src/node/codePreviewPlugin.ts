import type { PluginFunction, PluginObject } from '@vuepress/core'
import { CLIENT_CONFIG_FILE, PLUGIN_NAME } from './utils.js'

export const codePreviewPlugin = (): PluginFunction => (app) => {
  const pluginObj: PluginObject = {
    name: PLUGIN_NAME,

    clientConfigFile: CLIENT_CONFIG_FILE,
  }

  return pluginObj
}
