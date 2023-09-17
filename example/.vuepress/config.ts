import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { autodocPlugin } from '@vuepress-denaro/vuepress-plugin-autodoc'
import { baiduAutopushPlugin } from '@vuepress-denaro/vuepress-plugin-baidu-autopush'
import { codePreviewPlugin } from '@vuepress-denaro/vuepress-plugin-code-preview'
import { dynamicTitlePlugin } from '@vuepress-denaro/vuepress-plugin-dynamic-title'
import { flowchartPlugin } from '@vuepress-denaro/vuepress-plugin-flowchart'
import {
  moefyCanvasPlugin,
  MoefyCanvasTheme,
} from '@vuepress-denaro/vuepress-plugin-moefy-canvas'
import { oneClickCopyPlugin } from '@vuepress-denaro/vuepress-plugin-one-click-copy'
import { permainkPinyinPlugin } from '@vuepress-denaro/vuepress-plugin-permalink-pinyin'
import { rewardPlugin } from '@vuepress-denaro/vuepress-plugin-reward'
import { sitemapPlugin } from '@vuepress-denaro/vuepress-plugin-sitemap'
import { smoothScrollPlugin } from '@vuepress-denaro/vuepress-plugin-smooth-scroll'
import { vuePreviewPlugin } from '@vuepress-denaro/vuepress-plugin-vue-preview'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // specify bundler via environment variable
  bundler: viteBundler(),

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'vuepress-theme-denrao',
      description: '中文描述',
    },
  },

  // configure default theme
  theme: defaultTheme(),

  plugins: [
    autodocPlugin({
      rootPath: path.resolve(process.cwd(), '.vuepress/vue-previews'),
    }),
    baiduAutopushPlugin(),
    codePreviewPlugin(),
    dynamicTitlePlugin({
      showText: '(/≧▽≦/)耶！主人最爱你了！',
      hideText: '(＞人＜;)呀！主人我走丢了, 看到我了嘛？',
      recoverTime: 2000,
    }),
    flowchartPlugin(),
    moefyCanvasPlugin({
      theme: MoefyCanvasTheme.Sakura,
    }),
    oneClickCopyPlugin({
      copyMessage: '复制成功了, 快去粘贴使用吧 !!!',
    }),
    permainkPinyinPlugin(),
    rewardPlugin({
      rewardOption: [
        {
          text: '微信',
          url: '/WeChat.png',
        },
        {
          text: '支付宝',
          url: '/Alipay.png',
        },
      ],
    }),
    sitemapPlugin({
      hostname: 'https://www.baidu.com/',
    }),
    smoothScrollPlugin(),
    vuePreviewPlugin({
      rootPath: path.resolve(process.cwd(), '.vuepress/vue-previews'),
    }),
  ],

  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@/, process.cwd()),
    },
  },
})
