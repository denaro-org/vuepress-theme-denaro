import { ensureEndingSlash } from '@vuepress/shared'
import { getDirname, path } from '@vuepress/utils'
import { pluginNamePrefix } from '@vuepress-denaro/core'

const __dirname = getDirname(import.meta.url)

export const PLUGIN_NAME = `${pluginNamePrefix}vue-preview`
export const CLIENT_FOLDER = ensureEndingSlash(
  path.resolve(__dirname, '../client'),
)

export const CLIENT_CONFIG_FILE = `${CLIENT_FOLDER}config.js`
