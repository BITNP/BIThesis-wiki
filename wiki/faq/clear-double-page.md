---
tag: page
---

# 想要让某一个页面自动从奇数页开始

## 只让部分页面从奇数页开始（如正文 chapter）

首先，请保证开启了 `twoside` 模式。

然后，请在你想要奇数页排版的页面之前（`\chapter`之前）插入`\cleardoublepage`。

## 让所有 chapter 从奇数页开始（含结论、参考文献、致谢等）

请同时开启`twoside`和`openright`。

```latex
\documentclass[type=bachelor]{bithesis} % [!code --]
\documentclass[type=bachelor, twoside=true]{bithesis} % [!code ++]
\makeatletter \@openrighttrue \makeatother % [!code ++]
```

<!-- 单纯设置`ctex={openright}`无效，可能是因为 book 默认 openright，bithesis 加了 openany，导致最终作者再加 openright 无用 -->
