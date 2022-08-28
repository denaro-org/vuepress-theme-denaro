/**
 * Options for @vuepress-denaro/vuepress-plugin-vue-preview
 */
export interface VuePreviewOptions {
  /**
   * Replacement path for '@root'
   *
   * @default './vuepress/vue-preview'
   */
  rootPath: string
}

export interface RegisterComponentsPluginOptions {
  /**
   * Absolute path to the components directory
   */
  componentsDir?: string | null

  /**
   * Patterns to match component files using [globby](https://github.com/sindresorhus/globby)
   *
   * The patterns are relative to componentsDir`
   */
  componentsPatterns?: string[]

  /**
   * A function to get component name from the filename
   */
  getComponentName?: (filename: string) => string
}
