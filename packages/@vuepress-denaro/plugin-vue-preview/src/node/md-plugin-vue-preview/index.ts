import { createMarkdown } from '@vuepress/markdown'
import { fs, path } from '@vuepress/utils'
import { docVue3 } from 'doc-vue3'
import { analyzeDeps } from './analyze-deps'
import { highlightCode } from './md-instance'

const md = createMarkdown()

highlightCode(md)

let hasImportBlockOpen = false
let importMode = ''
let componentName = null
let importBlockIndex = 0
let resolveFileError = false

const root = process.cwd()

function getAbsPath(path, pathOptions): string {
  if (pathOptions.rootPath) {
    return path
      .trim()
      .replace(/^@root/, pathOptions.rootPath)
      .trim()
  } else {
    return path.trim().replace(/^@/, root).trim()
  }
}

export const mdPluginVuePreview = function (md, { rootPath }): void {
  // 覆盖块标签-起始标签
  md.renderer.rules.paragraph_open = function (
    tokens,
    idx,
    options,
    env,
    self
  ) {
    const contentToken = tokens[idx + 1]
    const matchImportPattern =
      contentToken.type === 'inline' &&
      contentToken.content.match(/^@\[(preview|docvue)-?(\w+)?\]\((.+)\)/)

    if (!matchImportPattern) {
      return self.renderToken(tokens, idx, options)
    }

    importMode = matchImportPattern[1]
    componentName = matchImportPattern[2]

    hasImportBlockOpen = true
    importBlockIndex = idx

    const filePath = matchImportPattern[3]

    const absoluteFilePath = getAbsPath(filePath, { rootPath })

    if (!fs.existsSync(absoluteFilePath)) {
      resolveFileError = true
      return `<div class="custom-container warning"><p>未找到文件: ${absoluteFilePath}</p></div><!-- `
    }

    if (!/\.vue$/.test(absoluteFilePath)) {
      resolveFileError = true
      return `<div class="custom-container warning"><p>不支持非 vue 文件: ${filePath}</p></div><!-- `
    }

    resolveFileError = false

    if (importMode === 'preview') {
      return renderDemoOpen({
        filePath,
        absoluteFilePath,
        showDemo: componentName,
      })
    }

    if (importMode === 'docvue') {
      const content = fs.readFileSync(absoluteFilePath, 'utf-8')
      const htmlResult = docVue3(content || '', { type: 'html' })

      return htmlResult + '<!-- '
    }
  }

  // 覆盖块标签-结束标签
  md.renderer.rules.paragraph_close = function (
    tokens,
    idx,
    options,
    env,
    self
  ) {
    if (importMode === 'docvue') {
      return ' -->'
    }
    if (hasImportBlockOpen && importBlockIndex + 2 === idx) {
      hasImportBlockOpen = false

      return !resolveFileError
        ? '--></DenraoCodeGroup></DenraoVuePreview>'
        : ' -->'
    }
    return self.renderToken(tokens, idx, options)
  }
}

function renderDemoOpen({ filePath, absoluteFilePath, showDemo }): string {
  const template = `<DenraoVuePreview absoluteFilePath="${absoluteFilePath}" showDemo="${showDemo}"><DenraoCodeGroup>`

  const deps = analyzeDeps(absoluteFilePath)

  const codeGroups = `${[absoluteFilePath]
    .concat(deps)
    .map((absPath, index) => {
      return `<DenraoCodeGroupItem title="${path.basename(absPath)}">
      ${md.render(`@[code](${absPath})`)}
      </DenraoCodeGroupItem>`
    })
    .join('')}`

  return template + codeGroups + '' + '<!-- '
}
