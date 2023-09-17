import Token from 'markdown-it/lib/token.js'
import { html, read } from './utils.js'

export const mdPluginAutodoc = function (md, { rootPath }): void {
  const cache = {}
  const regex = /@\[autodoc\]\{(.+)\}/
  let documented = false

  // add markdown-it rule for plugin
  md.core.ruler.push('autodoc', (state) => {
    state.tokens.forEach((token, idx) => {
      // process inline tokens
      const match = token.content.match(regex)
      if (token.type === 'inline' && match) {
        let [path, ...modules] = match[1].trim().split(/[ ,;]/)

        // read data into cache
        if (!(path in cache)) {
          cache[path] = read(
            rootPath
              ? path
                  .trim()
                  .replace(/^@root/, rootPath)
                  .trim()
              : path.trim(),
          )
        }

        // figure out modules to document
        const data = cache[path]

        if (!modules.length) {
          modules = Object.keys(data)
        }

        // render html for doc
        documented = true
        token.content = modules
          .map((key) => {
            if (!(key in data)) {
              throw new Error(
                `Autodoc: could not find export \`${key}\` in file \`${path}\``,
              )
            }
            return html(data[key])
          })
          .join('\n')
        token.type = 'html_inline'
        token.markdown = modules.join(', ')
        token.children = null

        // hide adjacent header items (used for sidebar)
        if (idx - 4 >= 0) {
          if (
            state.tokens[idx - 4].type === 'heading_open' &&
            state.tokens[idx - 3].type === 'inline' &&
            state.tokens[idx - 2].type === 'heading_close'
          ) {
            let hide = false
            state.tokens[idx - 3].children.forEach(({ content }) => {
              if (modules.includes(content)) {
                hide = true
              }
            })
            if (hide) {
              state.tokens[idx - 3].children = []
              state.tokens[idx - 4].hidden = true
              state.tokens[idx - 2].hidden = true
            }
          }
        }

        // hide outer paragraph tokens
        if (state.tokens[idx - 1].type === 'paragraph_open') {
          state.tokens[idx - 1].hidden = true
        }
        if (state.tokens[idx + 1].type === 'paragraph_close') {
          state.tokens[idx + 1].hidden = true
        }
      }
    })

    // add extra to ken for autodoc css
    if (documented) {
      const style = new Token('html_inline', '', 0)
      style.children = null
      state.tokens.push(style)
    }
  })
}
