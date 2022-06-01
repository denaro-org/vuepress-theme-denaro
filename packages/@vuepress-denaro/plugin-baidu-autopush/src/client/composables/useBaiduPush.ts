export const useBaiduPush = (): void => {
  if (!__VUEPRESS_DEV__ && typeof window !== 'undefined') {
    ;(function () {
      const bp = document.createElement('script')
      const curProtocol = window.location.protocol.split(':')[0]
      if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
      } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js'
      }
      const script: HTMLScriptElement =
        document.getElementsByTagName('script')[0]
      script.parentNode && script.parentNode.insertBefore(bp, script)
    })()
  }
}
