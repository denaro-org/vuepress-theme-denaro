import { execSync } from 'child_process'
import Prism from 'prismjs'

function lineMdNumber(num): string {
  let html = `<div class="line-numbers">`
  for (let i = 1; i <= num; i++) {
    html += `<div class="line-number"></div>`
  }
  html += `</div>`
  return html
}

/**
 * Return badge class for specific object type.
 *
 * @param type - Object type to document.
 */
export const badgeClass = (type: string): string => {
  const data = {
    class: 'tip',
    function: 'error',
    const: 'warning',
    member: 'warning',
  }
  return type in data ? data[type] : 'tip'
}

/**
 * Generate html formatting for single parameter.
 *
 * @param param - Object with param data structure.
 */
export const formatParam = (param: Record<any, any>): string => {
  const name = param.name ? `<code>${param.name}</code>` : ''
  const type = param.type
    ? ' (' + param.type.names.map((x) => `<em>${x}</em>`).join(', ') + ')'
    : ''
  const desc = param.description ? ` - ${param.description}` : ''
  return `${name}${type}${desc}`
}

/**
 * Generate formatted html for single component.
 *
 * @param data - Structured data to generate html from.
 */
export const html = (data: Record<any, any>, nested?: boolean): string => {
  nested = nested || false
  const result: string[] = []
  let cls = badgeClass(data.type)
  let call = `${data.name}`
  if (['class', 'function'].includes(data.type)) {
    call += `(`
    if (data.params) {
      call += data.params.map((x) => x.name).join(', ')
    }
    call += `)`
  }

  // header
  const htag = nested ? 'h4' : 'h3'
  const anchor = data.name.toLowerCase()
  result.push(`<${htag} id="${anchor}">`)
  result.push(` <a href="#${anchor}" class="header-anchor">#</a>`)
  result.push(
    ` <span class="badge ${cls}" style="vertical-align: top;">${data.type}</span>`,
  )
  result.push(` <code>${call}</code>`)
  result.push(`</${htag}>`)

  // description
  if (data.description) {
    result.push(`<blockquote><p>${data.description}</p></blockquote>`)
  }

  // parameters
  if (data.params && data.params.length > 0) {
    result.push(`<blockquote>`)
    result.push(`<p><strong>Parameters</strong></p>`)
    result.push(`<ul>`)
    data.params.forEach((param) => {
      const parsed = formatParam(param)
      result.push(`<li>${parsed}</li>`)
    })
    result.push(`</ul>`)
    result.push(`</blockquote>`)
  }

  // returns
  if (data.returns && data.returns.length > 0) {
    result.push(`<blockquote>`)
    result.push(`<p><strong>Returns</strong></p>`)
    result.push(`<ul>`)
    data.returns.forEach((param) => {
      const parsed = formatParam(param)
      result.push(`<li>${parsed}</li>`)
    })
    result.push(`</ul>`)
    result.push(`</blockquote>`)
  }

  // tags && import
  if (data.tags && data.tags.some((tag) => tag.title === 'import')) {
    const importTags = data.tags.filter((tag) => tag.title === 'import')
    result.push(`<blockquote>`)
    result.push(`<p><strong>Import</strong></p>`)
    importTags.map((param, key) => {
      const lineNumbers = lineMdNumber(param.text.split('\n').length)
      const prismCode = Prism.highlight(
        param.text,
        Prism.languages.javascript,
        'javascript',
      )
      const code = `<div class="language-javascript line-numbers-mode">
        <pre class="language-javascript"><code>${prismCode}</code></pre>
        ${lineNumbers}
      </div>`
      result.push(`<p>${code}</p>`)
      return param
    })
    result.push(`</blockquote>`)
  }

  // examples
  if (data.examples) {
    result.push(`<blockquote>`)
    result.push(`<p><strong>Examples</strong></p>`)
    data.examples.map((param, key) => {
      const lineNumbers = lineMdNumber(param.split('\n').length)
      const prismCode = Prism.highlight(
        param,
        Prism.languages.javascript,
        'javascript',
      )
      const code = `<div class="language-javascript line-numbers-mode">
        <pre class="language-javascript"><code>${prismCode}</code></pre>
        ${lineNumbers}
      </div>`
      result.push(`<p><h5>example ${key + 1}</h5>${code}</p>`)
      return param
    })
    result.push(`</blockquote>`)
  }

  // nested
  if (data.nested) {
    Object.keys(data.nested).forEach((key) => {
      cls = badgeClass(data.nested[key].type)
      result.push(`<blockquote class="scoped ${cls}">`)
      result.push(html(data.nested[key], true))
      result.push(`</blockquote>`)
    })
  }

  return result.join('\n')
}

export const explain = (path: string): Record<any, any> => {
  const proc = execSync(`npx  jsdoc --explain ${path}`)
  console.log(proc)
  return JSON.parse(proc.toString())
}

export const read = (path: string): Record<any, any> => {
  const data = explain(path).filter((item) => item.comment)
  const parsed = {}
  data.forEach((item) => {
    // construct data from item
    const obj = {
      name: item.name,
      type: item.kind,
      description: item.classdesc || item.description,
      line: item.meta.lineno,
      path: item.meta.path,
      filename: item.meta.filename,
      returns: item.returns,
      params: item.params,
      examples: item.examples,
      tags: item.tags,
      nested: {},
    }

    // handle constructor methods
    if (obj.name in parsed) {
      parsed[obj.name].type = item.kind ? item.kind : obj.type
      parsed[obj.name].params = item.params ? item.params : obj.params
      parsed[obj.name].returns = item.returns ? item.returns : obj.returns
      parsed[obj.name].description = obj.description
        ? obj.description
        : item.description
      parsed[obj.name].examples = obj.examples ? obj.examples : item.examples
      parsed[obj.name].tags = obj.tags ? obj.tags : item.tags

      // handle nesting
    } else if (item.memberof in parsed) {
      parsed[item.memberof].nested[obj.name] = obj

      // save new base object
    } else {
      parsed[item.name] = obj
    }
  })

  return parsed
}
