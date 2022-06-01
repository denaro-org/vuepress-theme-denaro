import { baiduAutopushPlugin } from '@vuepress-denaro/vuepress-plugin-baidu-autopush'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'vuepress-theme-denrao',
      description: '中文描述',
    },
  },
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  plugins: [baiduAutopushPlugin()],

  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@/, process.cwd()),
    },
  },
})
