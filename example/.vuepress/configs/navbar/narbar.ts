import type { NavbarConfig } from '@vuepress/theme-default'
import { VUEPRESS_VERSION } from '../meta.js'

export const denaroNavbar: NavbarConfig = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '文档',
    link: '/denaro/docs/intro.md',
  },
  {
    text: '插件使用栗子',
    link: '/denaro/plugins/README.md',
  },
  {
    text: `v${VUEPRESS_VERSION}`,
    children: [
      {
        text: 'GitHub',
        link: 'https://github.com/denaro-org/vuepress-theme-denaro',
      },
    ],
  },
]
