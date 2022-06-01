import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import * as defaultConst from '../components/const'

export const useDynamicTitle = (): void => {
  let originTitle
  let recoverTimeout
  const { showIcon, hideIcon, hideText, showText, recoverTime } = defaultConst

  onMounted(() => {
    originTitle = document.title
    if (showIcon !== '') {
      getIconElm().setAttribute('href', showIcon)
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        hidden()
      } else {
        visible()
      }
    })
  })

  const hidden = (): void => {
    if (hideIcon !== '') {
      getIconElm().setAttribute('href', hideIcon)
    }
    document.title = hideText
    clearTimeout(recoverTimeout)
  }

  const visible = (): void => {
    if (showIcon !== '') {
      getIconElm().setAttribute('href', showIcon)
    }
    document.title = showText + originTitle
    recoverTimeout = setTimeout(() => {
      document.title = originTitle
    }, recoverTime)
  }

  const getIconElm = (): Element => {
    let elm = document.querySelector('link[rel=icon]')
    if (elm === null) {
      elm = document.createElement('link')
      elm.setAttribute('rel', 'icon')
      document.head.appendChild(elm)
    }
    return elm
  }

  const route = useRoute()

  watch(
    () => route,
    (to, from) => {
      if (to.path !== from.path) {
        originTitle = document.title
        clearTimeout(recoverTimeout)
      }
    },
    {
      deep: true,
    }
  )
}
