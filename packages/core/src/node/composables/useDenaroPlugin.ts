import type { PluginFunction, PluginObject } from '@vuepress/core'
import { merge } from 'lodash-es'
import { usePluginConstant } from './index.js'

interface DenaroPluginObj extends PluginObject {
  /**
   * Plugin name
   */
  name: string
  /**
   * Whether to use client config
   */
  useClientConfig?: boolean
  /**
   * Plugin dirname
   */
  dirname?: string
}

export const useDenaroPlugin =
  (
    /**
     * Plugin object
     */
    pluginObjFun: DenaroPluginObj | (() => DenaroPluginObj),
  ): PluginFunction =>
  (app) => {
    const pluginObj =
      pluginObjFun instanceof Function ? pluginObjFun() : pluginObjFun
    const { useClientConfig, name, dirname } = pluginObj

    const { PLUGIN_NAME, CLIENT_CONFIG_FILE } = usePluginConstant(name, dirname)

    return merge(
      {
        name: PLUGIN_NAME,
        ...(useClientConfig && { clientConfigFile: CLIENT_CONFIG_FILE }),
      },
      pluginObj,
    )
  }

export type { PluginFunction, PluginObject }
