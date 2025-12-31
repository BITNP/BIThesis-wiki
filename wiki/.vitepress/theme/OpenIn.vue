<script setup lang="ts">
import { computed } from 'vue'

const { platform, template: file } = defineProps<{
  platform: 'overleaf' | 'texpage'
  template: string // without `.zip`
}>()

const href = computed(() => {
  const url = `https://github.com/BITNP/BIThesis/releases/latest/download/${file}.zip`
  switch (platform) {
    case 'overleaf':
      return `https://cn.overleaf.com/docs?engine=xelatex&snip_uri=${url}`
    case 'texpage':
      return `https://www.texpage.com/console/new?compiler=xelatex&zip_url=${url}`
    default:
      const exhaustCheck: never = platform
      return exhaustCheck
  }
})

const icon = computed(() => {
  switch (platform) {
    case 'overleaf':
      return 'https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b'
    case 'texpage':
      // TeXPage PNG 图标：https://static.texpage.com/dist/imgs/favicon.png
      // 为缩短加载时间，以下采用 TeXPage 邮件提供的 SVG。
      return 'https://img.shields.io/badge/open_in-TeXPage-495a80?labelColor=white&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTJDMCA1LjM3MjU4IDUuMzcyNTggMCAxMiAwSDUyQzU4LjYyNzQgMCA2NCA1LjM3MjU4IDY0IDEyVjUyQzY0IDU4LjYyNzQgNTguNjI3NCA2NCA1MiA2NEgxMkM1LjM3MjU4IDY0IDAgNTguNjI3NCAwIDUyVjEyWiIgZmlsbD0iIzQ5NUE4MCIvPgo8cGF0aCBkPSJNNDYuNDc5NSAxMkM0Ny4yNTQyIDEyIDQ3LjgwMTEgMTIuMTgyMyA0OC4xMjAxIDEyLjU0NjlDNDguNDYxOSAxMi44ODg3IDQ4LjYzMjggMTMuNDgxMSA0OC42MzI4IDE0LjMyNDJWMjcuMjFDNDguNjMyOCAyOC4wMDc1IDQ4LjQzOTEgMjguNTc3MSA0OC4wNTE4IDI4LjkxODlDNDcuNjY0NCAyOS4yNjA3IDQ3LjAwMzYgMjkuNDMxNiA0Ni4wNjkzIDI5LjQzMTZDNDUuMTM1MSAyOS40MzE2IDQ0LjQ3NDMgMjkuMjYwNyA0NC4wODY5IDI4LjkxODlDNDMuNjk5NSAyOC41NzcxIDQzLjUwNTkgMjguMDA3NSA0My41MDU5IDI3LjIxVjE2LjY0ODRIMzQuMzc5OVY0Ny45MjI5SDQyLjQ0NjNDNDMuMjIxIDQ3LjkyMjkgNDMuNzY3OSA0OC4xMDUxIDQ0LjA4NjkgNDguNDY5N0M0NC40Mjg3IDQ4LjgxMTUgNDQuNTk5NiA0OS40MDQgNDQuNTk5NiA1MC4yNDcxQzQ0LjU5OTYgNTEuMDkwMiA0NC40Mjg3IDUxLjY5NCA0NC4wODY5IDUyLjA1ODZDNDMuNzY3OSA1Mi40MDA0IDQzLjIyMSA1Mi41NzEzIDQyLjQ0NjMgNTIuNTcxM0gyMS4xODY1QzIwLjQxMTggNTIuNTcxMyAxOS44NTM1IDUyLjQwMDQgMTkuNTExNyA1Mi4wNTg2QzE5LjE5MjcgNTEuNjk0IDE5LjAzMzIgNTEuMDkwMiAxOS4wMzMyIDUwLjI0NzFDMTkuMDMzMiA0OS40MDQgMTkuMTkyNyA0OC44MTE1IDE5LjUxMTcgNDguNDY5N0MxOS44NTM1IDQ4LjEwNTEgMjAuNDExOCA0Ny45MjI5IDIxLjE4NjUgNDcuOTIyOUgyOS4yNTI5VjE2LjY0ODRIMjAuMTI3VjI3LjIxQzIwLjEyNyAyOC4wMDc1IDE5LjkzMzMgMjguNTc3MSAxOS41NDU5IDI4LjkxODlDMTkuMTU4NSAyOS4yNjA3IDE4LjQ5NzcgMjkuNDMxNiAxNy41NjM1IDI5LjQzMTZDMTYuNjI5MiAyOS40MzE2IDE1Ljk2ODQgMjkuMjYwNyAxNS41ODExIDI4LjkxODlDMTUuMTkzNyAyOC41NzcxIDE1IDI4LjAwNzUgMTUgMjcuMjFWMTQuMzI0MkMxNSAxMy40ODExIDE1LjE1OTUgMTIuODg4NyAxNS40Nzg1IDEyLjU0NjlDMTUuODIwMyAxMi4xODIzIDE2LjM3ODYgMTIgMTcuMTUzMyAxMkg0Ni40Nzk1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=='
    default:
      const exhaustCheck: never = platform
      return exhaustCheck
  }
})
</script>

<template>
  <a :href="href" :title="`open ${template} in ${platform}`" target="_blank" rel="noreferrer"
    ><img :src="icon" :alt="`open in ${platform}`" loading="lazy"
  /></a>
</template>
