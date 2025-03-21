---
tag:
  - page
  - bithesis
---

# 如何在封面后加空白页

<!-- https://github.com/BITNP/BIThesis/discussions/526 -->

## 法一：自动双页排版

可设置`twoside = true`开启双页排版，自动将某些页面空到奇数页。

```latex
\documentclass[…, twoside=true]{bithesis}
```

## 法二：手动加空白页

在`twoside = false`的情况下，编辑`main.tex`，加`\null`（给这一页填点儿东西）和`\clearpage`（另起一页）可加空白页。

```latex {3}
\MakeCover

\null\clearpage % 👈 在封面后加空白页

\begin{blindPeerReview}
  \includepdf{misc/1_originality.pdf}\newpage
\end{blindPeerReview}

\frontmatter
\input{chapters/0_abstract.tex}
```

更多信息：

- [header footer - Add a new empty page - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/34934/add-a-new-empty-page)
- [memoir - Insert extra blank pages after title - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/340065/insert-extra-blank-pages-after-title)
