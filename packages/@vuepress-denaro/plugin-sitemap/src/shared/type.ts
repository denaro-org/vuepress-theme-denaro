import { type SitemapItemOptions } from 'sitemap'

/**
 * Options for @vuepress-denaro/vuepress-plugin-sitemap
 */
export interface SitemapPluginOptions {
  /**
   * custom urls to append
   *
   * @default []
   */
  urls?: SitemapItemOptions[]
  /**
   * website root url
   *
   * @default ''
   */
  hostname: string
  /**
   * cacheTime
   *
   * @default 600
   */
  cacheTime?: number
  /**
   * xslUrl
   *
   * @default ''
   */
  xslUrl?: string
  /**
   * xmlNs
   *
   * @default ''
   */
  xmlNs?: string
  /**
   * sitemap file name
   *
   * @default 'sitemap.xml'
   */
  outFile?: string
  /**
   * changefreq
   *
   * @default 'daily'
   */
  changefreq?: string
  /**
   * exclude urls from sitemap
   *
   * @default []
   */
  exclude?: string[]
  /**
   * formatted today
   *
   * @default '(lastUpdated) => new Date(lastUpdated).toISOString()''
   */
  dateFormatter?: (lastUpdated: string) => string
}
