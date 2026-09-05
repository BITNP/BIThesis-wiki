---
tag:
  - font
---

# 如何写正体π？

LaTeX 默认`\pi`是斜体，而信息与电子学院个别老师要求改成正体。

若写作初期就计划用正体π，建议[使用 unicode-math 设置数学字体](./math-font.md)，然后用`\symup{\pi}`。

若已经写完了，可按以下定义`\uppi`，然后全文查找替换凑活一下。

```latex
\newcommand*{\uppi}{\text{\fontspec{NewCMMath-Regular.otf}π}}
```
