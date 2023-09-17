import { classPrefix } from '@vuepress-denaro/core/client'
import { onMounted, onUpdated } from 'vue'
import * as defaultConst from '../components/const.js'
import '../styles/style.scss'
import Message from '../utils/Message.js'

export const useOneClickCopy = (): void => {
  const { copySelector, toolTipMessage, duration, copyMessage } = defaultConst

  onMounted(() => {
    updateCopy()
  })

  onUpdated(() => {
    updateCopy()
  })

  const generateCopyButton = (parent: any): void => {
    if (parent.classList.contains('codecopy-enabled')) return
    const copyElement = document.createElement('i')
    copyElement.className = `${classPrefix}-code-copy`
    copyElement.innerHTML =
      '<svg  style="color:#aaa;font-size:14px" t="1572422231464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3201" width="14" height="14"><path d="M866.461538 39.384615H354.461538c-43.323077 0-78.769231 35.446154-78.76923 78.769231v39.384616h472.615384c43.323077 0 78.769231 35.446154 78.769231 78.76923v551.384616h39.384615c43.323077 0 78.769231-35.446154 78.769231-78.769231V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231z m-118.153846 275.692308c0-43.323077-35.446154-78.769231-78.76923-78.769231H157.538462c-43.323077 0-78.769231 35.446154-78.769231 78.769231v590.769231c0 43.323077 35.446154 78.769231 78.769231 78.769231h512c43.323077 0 78.769231-35.446154 78.76923-78.769231V315.076923z m-354.461538 137.846154c0 11.815385-7.876923 19.692308-19.692308 19.692308h-157.538461c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h157.538461c11.815385 0 19.692308 7.876923 19.692308 19.692308v39.384615z m157.538461 315.076923c0 11.815385-7.876923 19.692308-19.692307 19.692308H216.615385c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h315.076923c11.815385 0 19.692308 7.876923 19.692307 19.692308v39.384615z m78.769231-157.538462c0 11.815385-7.876923 19.692308-19.692308 19.692308H216.615385c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h393.846153c11.815385 0 19.692308 7.876923 19.692308 19.692308v39.384615z" p-id="3202"></path></svg>'
    copyElement.title = toolTipMessage
    copyElement.addEventListener('click', () => {
      copyToClipboard(parent.innerText)
    })
    parent.appendChild(copyElement)
    parent.classList.add('codecopy-enabled')
  }

  const copyToClipboard = (str: string): void => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selection = document.getSelection()
    const selected =
      selection && (selection.rangeCount > 0 ? selection.getRangeAt(0) : false)
    el.select()
    document.execCommand('copy')
    const message = new Message()
    message.show({
      text: copyMessage,
      duration,
    })
    document.body.removeChild(el)
    if (selected) {
      selection.removeAllRanges()
      selection.addRange(selected)
    }
  }

  const updateCopy = (): void => {
    setTimeout(() => {
      if (typeof copySelector === 'string') {
        document.querySelectorAll(copySelector).forEach(generateCopyButton)
      } else if (copySelector instanceof Array || Array.isArray(copySelector)) {
        copySelector.forEach((item) => {
          document.querySelectorAll(item).forEach(generateCopyButton)
        })
      }
    }, 1000)
  }
}
