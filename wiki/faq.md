<script setup lang="ts">
import FAQList from './.vitepress/theme/FAQList.vue'
</script>

# 🥑 疑难杂症

## 问题目录 {#faq-list}

<FAQList />

## 如何贡献

### 改进已有页面

页面下方有“**帮助我们改善此页面！**”按钮，单击它[跳转至 GitHub 仓库](https://github.com/BITNP/BIThesis-wiki/)，按提示操作即可。

### 增添全新页面

[在`/wiki/faq/`文件夹内创建](https://github.com/BITNP/BIThesis-wiki/new/main/wiki/faq/)`*.md`文件，编辑并提交 <abbr title="pull request">PR</abbr>。

::: details 模板

````markdown
---
tag:
  - bithesis # 仅适用于 bithesis 的，加上此标签
  - package # 需要用到其它宏包的，加上此标签
---

# 标题

引入宏包时，要加上选项`algochapter`才能按学校要求分章编号，示例如下。

```latex
\documentclass[…, twoside=false]{bithesis}
```

可以添加链接：[改进“疑难杂症”页面 · Issue #475 · BITNP/BIThesis-wiki](https://github.com/BITNP/BIThesis-wiki/issues/475)
````

可用如下方式指代宏包、手册。

- `[[pkg:bithesis]]` ⇒ [[pkg:bithesis]]
- `[[pkg:algorithms|algorithmic]]` ⇒ [[pkg:algorithms|algorithmic]]
- `[[texdoc:unicode-math]]` ⇒ [[texdoc:unicode-math]]
- ``[[texdoc:lshort-zh-cn|那份介绍（`lshort`中文版）]]`` ⇒ [[texdoc:lshort-zh-cn|那份介绍（`lshort`中文版）]]

:::
