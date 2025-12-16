<script setup lang="ts">
import { data as news_posts } from '../.vitepress/theme/news.data.ts'
import { with_anchor } from '../.vitepress/theme/util.ts'
</script>

# 更新说明

<!-- 添加页面时，需要同步更新 config.mts 中的 sidebar 设置 -->

::: tip 并非详细更新日志
此处备份 [GitHub Releases][releases] 中人工撰写的说明，主要介绍更新内容，提供升级建议。

详细更新日志请移步[`CHANGELOG.md`](https://github.com/BITNP/BIThesis/blob/main/CHANGELOG.md)。

<!-- 日期优先参考 CHANGELOG，其次参考`gh release view … --json createdAt`（换算到 UTC+8）-->

:::

[releases]: https://github.com/BITNP/BIThesis/releases/ 'Releases · BITNP/BIThesis'

<section v-for="p of news_posts" :key="p.url">
  <h2 :href="p.url">{{ p.period }}</h2>
  <ul>
    <li v-for="r of p.releases" :key="r">
      <a :href="with_anchor(p.url, r)">{{ r }}</a>
    </li>
  </ul>
</section>
