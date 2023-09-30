import type { PluginFunction } from '@vuepress-denaro/core'
import { useDenaroPlugin } from '@vuepress-denaro/core'
import type { AutodocOptions } from '../shared/index.js'
import { mdPluginAutodoc } from './md-plugin-autodoc/index.js'
import { DIR_NAME, PLUGIN_NAME } from './utils.js'

export const autodocPlugin = (options?: AutodocOptions): PluginFunction =>
  useDenaroPlugin(() => {
    const { rootPath } = options || {}

    return {
      name: PLUGIN_NAME,
      dirname: DIR_NAME,
      useClientConfig: true,

      extendsMarkdown(md) {
        md.set({ breaks: true })
        md.use(mdPluginAutodoc, { rootPath })
      },
    }
  })
