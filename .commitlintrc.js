const fs = require('fs')
const path = require('path')

const packages = fs.readdirSync(
  path.resolve(__dirname, 'packages/@vuepress-denaro')
)

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['vuepress-theme-denaro', ...packages]],
  },
}
