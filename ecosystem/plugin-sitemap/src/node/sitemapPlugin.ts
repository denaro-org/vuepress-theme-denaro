import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import type { SitemapPluginOptions } from '../shared/index.js'
import { generateSitemap } from './generateSitemap.js'

export const sitemapPlugin = ({
  urls = [],
  hostname,
  cacheTime = 600,
  xslUrl,
  xmlNs,
  outFile = 'sitemap.xml',
  changefreq = 'daily',
  exclude = [],
  dateFormatter = (lastUpdated) => new Date(lastUpdated).toISOString(),
  ...others
}: SitemapPluginOptions): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}sitemap`,

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

  return pluginObj
}
