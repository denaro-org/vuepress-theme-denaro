import { useDenaroPlugin } from '@vuepress-denaro/core'
import type { PluginFunction } from '@vuepress-denaro/core'
import type { SitemapPluginOptions } from '../shared/index.js'
import { generateSitemap } from './generateSitemap.js'
import { PLUGIN_NAME } from './utils.js'

export const sitemapPlugin = (options?: SitemapPluginOptions): PluginFunction =>
  useDenaroPlugin(() => {
    const {
      urls,
      hostname = '',
      cacheTime = 600,
      xslUrl,
      xmlNs,
      outFile = 'sitemap.xml',
      changefreq = 'daily',
      exclude,
      dateFormatter = (lastUpdated) => new Date(lastUpdated).toISOString(),
      ...others
    } = options || {}

    return {
      name: PLUGIN_NAME,

      onGenerated(app) {
        const { locales, base, dest } = app.options
        const { pages } = app

        generateSitemap({
          urls,
          hostname,
          cacheTime,
          xslUrl,
          xmlNs,
          outFile,
          exclude,
          changefreq,
          dateFormatter,
          locales,
          base,
          pages,
          dest,
          ...others,
        })
      },
    }
  })
