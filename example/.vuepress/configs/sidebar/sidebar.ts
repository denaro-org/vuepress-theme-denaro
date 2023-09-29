import type { SidebarConfig } from '@vuepress/theme-default'

export const denaroSidebar: SidebarConfig = {
  '/': [
    {
      text: '插件文档',
      children: [
        {
          text: 'vuepress-plugin-autodoc',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-autodoc/README.md',
        },
        {
          text: 'vuepress-plugin-baidu-autopush',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-baidu-autopush/README.md',
        },
        {
          text: 'vuepress-plugin-code-preview',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-code-preview/README.md',
        },
        {
          text: 'vuepress-plugin-dynamic-title',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-dynamic-title/README.md',
        },
        {
          text: 'vuepress-plugin-flowchart',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-flowchart/README.md',
        },
        {
          text: 'vuepress-plugin-giscus',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-giscus/README.md',
        },
        {
          text: 'vuepress-plugin-moefy-canvas',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-moefy-canvas/README.md',
        },
        {
          text: 'vuepress-plugin-one-click-copy',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-one-click-copy/README.md',
        },
        {
          text: 'vuepress-plugin-permalink-pinyin',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-permalink-pinyin/README.md',
        },
        {
          text: 'vuepress-plugin-reward',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-reward/README.md',
        },
        {
          text: 'vuepress-plugin-sitemap',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-sitemap/README.md',
        },
        {
          text: 'vuepress-plugin-smooth-scroll',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-smooth-scroll/README.md',
        },
        {
          text: 'vuepress-plugin-vue-preview',
          link: '/node_modules/@vuepress-denaro/vuepress-plugin-vue-preview/README.md',
        },
      ],
    },
    {
      text: '来个栗子',
      link: '/denaro/plugins/',
      children: [
        '/denaro/plugins/plugin-autodoc.md',
        '/denaro/plugins/plugin-code-preview.md',
        '/denaro/plugins/plugin-dynamic-title.md',
        '/denaro/plugins/plugin-flowchart.md',
        '/denaro/plugins/plugin-moefy-canvas.md',
        '/denaro/plugins/plugin-one-click-copy.md',
        '/denaro/plugins/plugin-reward.md',
        '/denaro/plugins/plugin-vue-preview.md',
      ],
    },
  ],
}
