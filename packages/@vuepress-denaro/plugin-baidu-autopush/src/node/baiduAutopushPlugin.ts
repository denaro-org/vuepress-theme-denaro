import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const baiduAutopushPlugin = (): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}baidu-autopush`,

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}baidu-autopush/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
