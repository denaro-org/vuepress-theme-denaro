import type { App } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { RegisterComponentsPluginOptions } from '../../shared/index.js'
import { getComponentsFromDir } from './getComponentsFromDir.js'

const capitalize = (str): string => {
  return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase()
  })
}

const __dirname = getDirname(import.meta.url)

export const prepareConfigFile = async (
  app: App,
  options: Required<RegisterComponentsPluginOptions>,
  identifier: string,
): Promise<string> => {
  // get components from directory
  const componentsFromDir = await getComponentsFromDir(options)

  // components from options will override components from dir
  // if they have the same component name
  const componentsMap: Record<string, string> = {
    ...componentsFromDir,
    DenraoVuePreview: path.resolve(
      __dirname,
      '../../client/components/DenraoVuePreview.vue',
    ),
  }

  // client app enhance file content
  const content = `\
import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {\
    ${Object.entries(componentsMap).map(
      ([name, filepath]) => `
      app.component(${JSON.stringify(
        ['DenraoVuePreview'].includes(name)
          ? name
          : 'DenraoVuePreview' + capitalize(name),
      )}, defineAsyncComponent(() => import(${JSON.stringify(filepath)})))`,
    )}
  },
}
`

  // write temp file and return the file path
  return app.writeTemp(`vue-preview/clientConfig.${identifier}.js`, content)
}
