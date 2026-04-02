<script setup lang="ts">
import { NRadioGroup, NRadioButton, NCard } from 'naive-ui'
import { ref, computed, onMounted, watch } from 'vue'

const installMethod = ref<string>('online')
const platform = ref<string>('windows')

interface PlatformOption {
  value: string
  label: string
}

const platformOptions = computed<PlatformOption[]>(() => {
  const options: PlatformOption[] = [
    { value: 'windows', label: 'Windows' },
    { value: 'linux', label: 'Linux' },
  ]

  if (installMethod.value === 'online') {
    options.push({ value: 'macos', label: 'macOS' })
  } else if (installMethod.value === 'offline') {
    options.push({ value: 'wsl', label: 'WSL' })
  } else if (installMethod.value === 'minimal') {
    options.push({ value: 'macos', label: 'macOS' })
  }

  return options
})

const ensureValidPlatform = () => {
  const validPlatforms = platformOptions.value.map((option) => option.value)

  if (!validPlatforms.includes(platform.value)) {
    platform.value = validPlatforms[0] ?? 'windows'
  }
}

const emitState = () => {
  // 发布全局事件
  document.dispatchEvent(
    new CustomEvent('install-guide-state', {
      detail: {
        method: installMethod.value,
        platform: platform.value,
      },
    })
  )
}

watch(installMethod, () => {
  ensureValidPlatform()
  emitState()
})

// 组件挂载后立即发布初始状态
onMounted(() => {
  ensureValidPlatform()
  emitState()
})
</script>

<template>
  <n-card>
    <div class="install-selector">
      <div class="selector-group">
        <div class="selector-label"><strong>安装方式：</strong></div>
        <n-radio-group v-model:value="installMethod">
          <n-radio-button value="online">在线安装</n-radio-button>
          <n-radio-button value="offline">离线安装</n-radio-button>
          <n-radio-button value="minimal">精简安装</n-radio-button>
        </n-radio-group>
      </div>
      <div class="selector-group">
        <div class="selector-label"><strong>操作系统：</strong></div>
        <n-radio-group v-model:value="platform" @update:value="emitState">
          <n-radio-button v-for="option in platformOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </n-radio-button>
        </n-radio-group>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.install-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}

.selector-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.selector-label {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .install-selector {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
