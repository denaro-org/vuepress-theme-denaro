import type { PluginFunction } from '@vuepress-denaro/core'
import { useDenaroPlugin } from '@vuepress-denaro/core'
import { slugify } from 'transliteration'
import type { OptionsSlugify } from 'transliteration/dist/node/src/types'
import { PLUGIN_NAME } from './utils.js'

export const permainkPinyinPlugin = (
  options?: OptionsSlugify,
): PluginFunction =>
  useDenaroPlugin(() => ({
    name: PLUGIN_NAME,

    extendsPage: (page) => {
      const pathArr = decodeURIComponent(page.path).split('/')

      const mergeOptions = Object.assign({}, options || {}, {
        ignore: ['/', '.'],
      })

      page.path = page.pathInferred = pathArr
        .map((str) => slugify(str, mergeOptions))
        .join('/')
    },
  }))
