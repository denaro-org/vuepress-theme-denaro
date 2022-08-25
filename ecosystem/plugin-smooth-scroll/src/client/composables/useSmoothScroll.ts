import smoothscroll from 'smoothscroll-polyfill'
import '../styles/smooth-scroll.scss'

export const useSmoothScroll = (): void => {
  smoothscroll.polyfill()
}
