import { getDirname } from '@vuepress-denaro/core'
import chalk from 'chalk'

export const log = (msg, color = 'blue', label = 'SITEMAP'): void =>
  console.log(`\n${chalk.reset.inverse.bold[color](` ${label} `)} ${msg}`)

export const DIR_NAME = getDirname(import.meta.url)

export const PLUGIN_NAME = `sitemap`
