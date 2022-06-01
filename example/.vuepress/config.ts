import { baiduAutopushPlugin } from '@vuepress-denaro/vuepress-plugin-baidu-autopush'
import { dynamicTitlePlugin } from '@vuepress-denaro/vuepress-plugin-dynamic-title'
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

  plugins: [
    baiduAutopushPlugin(),
    dynamicTitlePlugin({
      showText: '(/≧▽≦/)耶！主人最爱你了！',
      hideText: '(＞人＜;)呀！主人我走丢了, 看到我了嘛？',
      recoverTime: 2000,
    }),
  ],

  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@/, process.cwd()),
    },
  },
})
