---
home: true
heroImage: '/denaro.svg'
heroBgImage: '/hero-bg.svg'
heroImageStyle: {}
# actions:
#   [
#     { text: '快速上手', type: 'primary' },
#     { text: '项目简介', type: 'secondary' },
#   ]

features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
  - title: Themes
    details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
  - title: Plugins
    details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.
  - title: Bundlers
    details: Default bundler is Vite, while Webpack is also supported. Choose the one you like!
footer: MIT Licensed | Copyright © 2018-present Evan You
---

# 像数 1,2,3 一样容易

```bash
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

::: warning 注意
请确保你的 Node.js 版本 >= 8.6。
:::

@[preview-code](@/.vuepress/vue-previews/demo.vue)

@[docvue](@/.vuepress/vue-previews/demo.vue)
