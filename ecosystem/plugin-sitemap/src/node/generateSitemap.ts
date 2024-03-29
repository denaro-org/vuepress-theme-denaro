import path from 'path'
import type { SiteLocaleConfig } from '@vuepress/core'
import fs from 'fs-extra'
import { createSitemap } from 'sitemap'
import type { SitemapPluginOptions } from '../shared/index.js'
import { log } from './utils.js'

function stripLocalePrefix(path, localePathPrefixes): Record<string, string> {
  const matchingPrefix = localePathPrefixes
    .filter((prefix) => path.startsWith(prefix))
    .shift()
  return {
    normalizedPath: path.replace(matchingPrefix, '/'),
    localePrefix: matchingPrefix,
  }
}

interface IGenerateSitemap extends SitemapPluginOptions {
  locales?: SiteLocaleConfig
  base: string
  pages: Record<any, any>[]
  dest: string
}

export const generateSitemap = (
  {
    urls = [],
    hostname,
    cacheTime = 600,
    xslUrl,
    xmlNs,
    outFile = 'sitemap.xml',
    changefreq = 'daily',
    exclude = [],
    dateFormatter = (lastUpdated) => new Date(lastUpdated).toISOString(),
    locales,
    base,
    pages,
    dest,
    ...others
  }: IGenerateSitemap = {
    hostname: '',
    pages: [],
    base: '',
    dest: '',
  },
): void => {
  if (!hostname) {
    return log(
      'Not generating sitemap because required "hostname" option doesn\'t exist',
      'red',
    )
  }

  log('Generating sitemap...')

  const withBase = (url): string => base && base.replace(/\/$/, '') + url

  // Sort the locale keys in reverse order so that longer locales, such as '/en/', match before the default '/'
  const localeKeys = (locales && Object.keys(locales).sort().reverse()) || []
  const localesByNormalizedPagePath = pages.reduce((map, page) => {
    const { normalizedPath, localePrefix } = stripLocalePrefix(
      page.path,
      localeKeys,
    )
    const prefixesByPath = map.get(normalizedPath) || []
    prefixesByPath.push(localePrefix)
    return map.set(normalizedPath, prefixesByPath)
  }, new Map())

  const pagesMap = new Map()

  pages.forEach((page) => {
    const fmOpts = page.frontmatter.sitemap || {}
    const metaRobots = (page.frontmatter.meta || []).find(
      (meta) => meta.name === 'robots',
    )
    const excludePage = metaRobots
      ? (metaRobots.content || '')
          .split(/,/)
          .map((x) => x.trim())
          .includes('noindex')
      : fmOpts.exclude === true

    if (excludePage) {
      exclude.push(page.path)
    }

    const lastmodISO = page.lastUpdated
      ? dateFormatter(page.lastUpdated)
      : undefined

    const { normalizedPath } = stripLocalePrefix(page.path, localeKeys)
    const relatedLocales = localesByNormalizedPagePath.get(normalizedPath)

    let links = []
    if (relatedLocales.length > 1) {
      links = relatedLocales.map((localePrefix) => {
        return {
          lang: locales && locales[localePrefix].lang,
          url: withBase(normalizedPath.replace('/', localePrefix)),
        }
      })
    }

    pagesMap.set(page.path, {
      changefreq: fmOpts.changefreq || changefreq,
      lastmodISO,
      links,
      ...others,
    })
  })

  const sitemap = createSitemap({
    urls,
    hostname,
    cacheTime: cacheTime * 1000,
    xmlNs,
    xslUrl,
  })

  pagesMap.forEach((page, url) => {
    if (!exclude.includes(url)) {
      sitemap.add({
        url: withBase(url),
        ...page,
      })
    }
  })

  urls.forEach((item) => {
    if (item instanceof Object) {
      const page = pagesMap.get(item.url)
      if (page) {
        sitemap.del(item.url)
        sitemap.add({ ...page, ...item })
      } else {
        typeof item === 'string' && sitemap.add(item)
      }
    }
  })

  log(`found ${sitemap.urls.length} locations`)
  const sitemapXML = path.resolve(dest, outFile)

  fs.writeFileSync(sitemapXML, sitemap.toString())
  log(`${sitemap.urls.length} locations have been written.`)
}
