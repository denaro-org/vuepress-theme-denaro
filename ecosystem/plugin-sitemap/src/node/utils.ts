import { ensureEndingSlash } from '@vuepress/shared'
import { getDirname, path } from '@vuepress/utils'
import { pluginNamePrefix } from '@vuepress-denaro/core'
import chalk from 'chalk'

export const log = (msg, color = 'blue', label = 'SITEMAP'): void =>
  console.log(`\n${chalk.reset.inverse.bold[color](` ${label} `)} ${msg}`)

const __dirname = getDirname(import.meta.url)

export const PLUGIN_NAME = `${pluginNamePrefix}sitemap`
export const CLIENT_FOLDER = ensureEndingSlash(
  path.resolve(__dirname, '../client'),
)

export const CLIENT_CONFIG_FILE = `${CLIENT_FOLDER}config.js`
