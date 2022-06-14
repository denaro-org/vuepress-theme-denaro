/**
 * 获取url问号后的参数并返回对象
 * @import import { getUrlParams } from '@linewell-framework/utils-tools'
 * @example
 * getUrlParams('http://www.baidu.com?search=xxx')
 * @param {String} url  url
 * @returns {Object} url参数对象
 */
export const getUrlParams = (url) => {
  const params = {}
  const paramsStart = url.indexOf('?')
  if (paramsStart !== -1) {
    const paraString = url.substring(url.indexOf('?') + 1)
    const paraArray = paraString.split('&')
    paraArray.forEach((e) => {
      const param = e.split('=')
      const key = param[0]
      const value = param[1]
      params[key] = value
    })
  }
  return params
}
