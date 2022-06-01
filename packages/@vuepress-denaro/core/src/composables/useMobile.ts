import { computed } from 'vue'

export const useMobile = (showInMobile: boolean): Record<string, any> => {
  const isMobile = computed<boolean>(() => {
    if (!__VUEPRESS_SSR__) {
      const flag =
        !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )

      return flag
    }
    return false
  })

  return isMobile
}
