<script setup lang="ts">
import { NForm, NFormItem, NInput } from 'naive-ui'
import { computed, onMounted, ref } from 'vue'

const key = ref<string | undefined>(undefined)
const value = ref<string | undefined>(undefined)

const existing_groups = ['cover', 'info', 'style', 'misc']

function parse_key(key: string | undefined): string[] {
  return key ? key.split('/').map((s) => s.trim()) : []
}

const highlight = '  % 👈 编辑这里'
const omitted = '…,'

function join(lines: string[]): string {
  return lines.map((line) => `  ${line}`).join('\n')
}

const code = computed(() => {
  const parts = parse_key(key.value)
  const value_safe = value.value ? (value.value.includes(',') ? `{ ${value.value} }` : value.value) : '{ … }'

  if (parts.length == 0) {
    // prettier-ignore
    return join([
      'cover = {',
      `  ${omitted}`,
      '},',
      'info = {',
      `  ${omitted}`,
      '},',
      `${omitted}`,
    ])
  } else if (parts.length == 1 || !existing_groups.includes(parts[0])) {
    // prettier-ignore
    return join([
      'cover = {',
      `  ${omitted}`,
      '},',
      `${omitted}`,
      `${parts.join(' / ')} = ${value_safe},${highlight}`,
    ])
  } else {
    const n = existing_groups.indexOf(parts[0])
    return join(
      existing_groups.flatMap((group, index) => {
        if (group == parts[0]) {
          // prettier-ignore
          return [
            `${group} = {`,
            `  ${omitted}`,
            `  ${parts.slice(1).join(' / ')} = ${value_safe},${highlight}`,
            '},',
          ]
        } else if (index == 0 || Math.abs(index - n) <= 1) {
          // prettier-ignore
          return [
            `${group} = {`,
            `  ${omitted}`,
            '},',
          ]
        } else {
          return [omitted]
        }
      })
    )
  }
})

const anchor = computed(() => {
  let anchor = parse_key(key.value).join('/')

  if (anchor && value.value) {
    anchor += `=${value.value}`
  }

  return anchor
})

const on_this_page = ['#如何用-bitsetup设置选项', '#代码示例', '#用法说明']

function apply_anchor(): void {
  const anchor = decodeURIComponent(window.location.hash)

  if (on_this_page.includes(anchor)) {
    return
  }

  const [k, v] = anchor.replace(/^#/, '').split('=', 2)

  if (k) {
    key.value = k

    if (v) {
      value.value = v
    }
  }
}

onMounted(() => {
  apply_anchor()
  window.addEventListener('hashchange', () => apply_anchor())
})

// vue 里不好渲染代码，故传出去在 markdown 里渲染
defineExpose({ code })
</script>

<template>
  <n-form label-placement="left" label-width="auto">
    <n-form-item label="键" feedback="要设置哪个选项" style="margin-bottom: 1em">
      <n-input v-model:value="key" type="text" placeholder="misc/algorithmSeparation" clearable />
    </n-form-item>
    <n-form-item label="值" feedback="要将选项设置成什么">
      <n-input
        v-model:value="value"
        type="text"
        :placeholder="key && key != 'misc/algorithmSeparation' ? '…' : '0.5em'"
        clearable
      />
    </n-form-item>
  </n-form>
  <p style="margin-block-start: -0.5em; height: 2em; text-align: end; font-size: 0.8em">
    <a v-if="anchor" :href="`#${anchor}`">🔗 分享链接</a>
  </p>
  <p>
    请编辑<code>main.tex</code>，用<code>\BITSetup</code>设置<code v-if="key">{{ key }}</code
    >选项<span v-if="key && value"
      >为<code>{{ value }}</code></span
    >：
  </p>
</template>
