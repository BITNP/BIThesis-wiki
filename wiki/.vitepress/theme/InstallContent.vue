<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  method?: string
  platform?: string
  defaultShow?: boolean
}>()

const currentMethod = ref<string | null>(null)
const currentPlatform = ref<string | null>(null)
const shouldShow = ref(!!props.defaultShow)

// 监听来自 InstallGuide 的状态更新
onMounted(() => {
  const handleStateUpdate = (event: CustomEvent) => {
    currentMethod.value = event.detail.method
    currentPlatform.value = event.detail.platform
    updateVisibility()
  }

  document.addEventListener('install-guide-state', handleStateUpdate)

  // 清理函数
  return () => {
    document.removeEventListener('install-guide-state', handleStateUpdate)
  }
})

const updateVisibility = () => {
  if (currentMethod.value !== null && currentPlatform.value !== null) {
    const methodMatch = !props.method || currentMethod.value === props.method
    const platformMatch = !props.platform || currentPlatform.value === props.platform
    shouldShow.value = methodMatch && platformMatch
  } else if (props.defaultShow) {
    // 如果设置了默认显示，且还未接收到状态，则显示内容
    shouldShow.value = true
  }
}
</script>

<template>
  <div v-if="shouldShow" class="install-content-section">
    <slot />
  </div>
</template>

<style scoped>
.install-content-section {
  margin-top: 1.5rem;
}
</style>
