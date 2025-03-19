---
tag: par
---

# 如何让 subsubsection 显示在书签和目录中？

<!-- https://github.com/BITNP/BIThesis/discussions/581 -->

`\subsubsection{…}`是第四级标题，编号形如 0.0.0.0。正文之前的目录和 PDF 的`/Outline`默认只收录到第三级，不包含它。

如需包含，请编辑 `main.tex`，在`\documentclass[…]{bithesis}`与`\MakeTOC`之间的任意地方，加上下面这行。

```latex
\ctexset{tocdepth = subsubsection}
```

更多用法请参考[[texdoc:ctex]]。
