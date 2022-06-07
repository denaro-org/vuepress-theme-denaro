import { pluginNamePrefix } from '@vuepress-denaro/core'
import { type Plugin, type PluginObject } from '@vuepress/core'
import { slugify } from 'transliteration'
import { type OptionsSlugify } from 'transliteration/dist/node/src/types'

export const permainkPinyinPlugin = (options: OptionsSlugify): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}permaink-pinyin`,

    extendsPage: (page) => {
      const pathArr = decodeURIComponent(page.path).split('/')

      const mergeOptions = Object.assign({}, options, { ignore: ['/', '.'] })

      page.path = page.pathInferred = pathArr
        .map((str) => slugify(str, mergeOptions))
        .join('/')
    },
  }

  return pluginObj
}
