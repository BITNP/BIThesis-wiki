<script setup lang="ts">
import { NForm, NFormItem, NInput, NInputNumber, NRadioButton, NRadioGroup } from 'naive-ui'
import { computed, ref } from 'vue'

const language = ref<'zh' | 'en'>('zh')
const nth = ref<number | null>(1)
const normal_override = ref<string | undefined>(undefined)
const blind_override = ref<string | undefined>(undefined)

const normal_out = computed(() => normal_override.value || null)
const blind_out = computed(() => {
  if (blind_override.value) {
    return blind_override.value
  }

  const n = nth.value ?? 1
  if (language.value === 'zh') {
    const the_zhnumber = '一二三四五六七八九十'.at(n - 1) ?? n
    return `第${the_zhnumber}作者`
  } else {
    const the_Ordinalstringnum = ['First', 'Second', 'Third'].at(n - 1) ?? `${n}th`
    return `${the_Ordinalstringnum} Author`
  }
})
const blind_notes = computed(() =>
  (nth.value ?? 1) >= 4 && !blind_override.value ? '（请以 LaTeX 实际编译结果为准）' : null
)

const code = computed(() => {
  const n = nth.value ?? 1

  let params = [n > 1 && !blind_override.value ? n : null, normal_override.value, blind_override.value]
  // 丢弃结尾的空项
  params = params.slice(0, params.map(Boolean).lastIndexOf(true) + 1)

  return [
    'author+an = {',
    n,
    ':myself="\\',
    language.value === 'zh' ? 'Author' : 'AuthorEn',
    ...params.map((x) => `[${x ?? ''}]`),
    '"},',
  ].join('')
})

// vue 里不好渲染代码，故传出去在 markdown 里渲染
defineExpose({ code })
</script>

<template>
  <n-form label-placement="left" label-width="auto">
    <n-form-item label="第几作者">
      <n-input-number
        v-model:value="nth"
        :min="1"
        placeholder="默认为 1"
        clearable
        :autofocus="true"
        :input-props="{ type: 'number' }"
      />
    </n-form-item>
    <n-form-item label="普通模式下" feedback="默认输出作者姓名。" style="margin-bottom: 1em">
      <n-input v-model:value="normal_override" type="text" placeholder="（一般不用修改）" clearable />
    </n-form-item>
    <n-form-item label="盲审模式下" feedback="默认输出「第n作者」。" style="margin-bottom: 1em">
      <n-input v-model:value="blind_override" type="text" placeholder="第一发明人、共同二作……" clearable />
    </n-form-item>
    <n-form-item label="语言" feedback="影响「第n作者」的语言。">
      <n-radio-group v-model:value="language">
        <n-radio-button value="zh">中文</n-radio-button>
        <n-radio-button value="en">English</n-radio-button>
      </n-radio-group>
    </n-form-item>
  </n-form>
  <h3 style="margin-top: 0.5em">效果</h3>
  <ul>
    <li>
      普通模式下：<code v-if="normal_out !== null">{{ normal_out }}</code
      ><span v-else>作者姓名</span>
    </li>
    <li>
      盲审模式下：<code>{{ blind_out }}</code
      ><span v-if="blind_notes !== null">{{ blind_notes }}</span>
    </li>
  </ul>
</template>
