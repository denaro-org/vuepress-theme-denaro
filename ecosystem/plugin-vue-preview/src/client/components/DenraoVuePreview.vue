<script lang="ts" setup>
import { classNameByBEM } from '@vuepress-denaro/core'
import { computed } from 'vue'

const props = defineProps({
  // @doc 是否显示示例
  showDemo: {
    type: String,
    default: 'undefined',
  },
  // @doc 组件
  componentName: {
    type: String,
    default: '',
  },
})

const capitalize = (str): string => {
  return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase()
  })
}

const StateComponentName = computed(
  () => `DenraoVuePreview${capitalize(props.componentName)}`,
)
</script>

<template>
  <div :class="classNameByBEM('vue-preview-container')">
    <div
      v-if="showDemo && componentName !== 'undefined'"
      :class="classNameByBEM('preview-container')"
    >
      <div style="overflow-x: auto">
        <Component :is="StateComponentName" />
      </div>
    </div>

    <slot />
  </div>
</template>

<style lang="scss">
@import '../styles/vue-preview.scss';
</style>
