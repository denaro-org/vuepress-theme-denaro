export const mergeStyle = (
  style1,
  style2
): string | Record<string, string> | string[] => {
  let style
  style1 instanceof Object &&
    style2 instanceof Object &&
    (style = Object.assign(style1, style2))
  style1 instanceof Array &&
    style2 instanceof Array &&
    (style = style1.concat(style2))
  typeof style1 === 'string' &&
    typeof style2 === 'string' &&
    (style = `${style1} ${style2}`)
  return style
}

export const randomNum = (val: number): number =>
  Math.floor(Math.random() * val)
