import { resolveHighlighter } from '@vuepress/plugin-prismjs'

export const highlightCode = (md): void => {
  md.options.highlight = (code, lang) => {
    const highlighter = resolveHighlighter(lang)
    return highlighter?.(code) || ''
  }
}
