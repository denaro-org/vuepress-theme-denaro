export const isRealNum = (val: number | string): boolean => {
  if (val == null || val.toString().replace(/\s/g, '') === '') {
    return false
  }

  if (typeof val === 'boolean') {
    return false
  }

  if (!isNaN(val as number)) {
    return true
  } else {
    return false
  }
}

export * from './qrcode'
