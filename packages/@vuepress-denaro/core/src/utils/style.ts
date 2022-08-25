import { classPrefix } from '../config/index.js'

const modifierSeparator = '--'
const elementSeparator = '__'

export const prefixCls = (cls: string): string => {
  return cls
    .split(' ')
    .map((c) => c && `${classPrefix}${c}`)
    .filter((b) => b)
    .join(' ')
}

export const classNameByBEM = (b: string, e?: string, m?: string): string => {
  let className = ''
  className = b
  e && (className += `${elementSeparator}${e}`)
  m && (className += `${modifierSeparator}${m}`)
  return prefixCls(className)
}
