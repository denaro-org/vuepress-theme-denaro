function getElementPosition(el: Element): {
  x: number
  y: number
} {
  const docEl = document.documentElement
  const docRect = docEl.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top,
  }
}

export const enhanceApp = ({ app, router }): void => {
  router.options.scrollBehavior = (
    to,
    from,
    savedPosition: void | { x: number; y: number },
  ): void => {
    if (savedPosition) {
      return window.scrollTo({
        top: savedPosition.y,
        behavior: 'smooth',
      })
    } else if (to.hash) {
      if (app.$vuepress.$get('disableScrollBehavior')) {
        return
      }

      const targetAnchor = to.hash.slice(1)
      const targetElement =
        document.getElementById(targetAnchor) ||
        document.querySelector(`[name='${targetAnchor}']`)

      if (targetElement) {
        return window.scrollTo({
          top: getElementPosition(targetElement).y,
          behavior: 'smooth',
        })
      }
    } else {
      return window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }
}
