---
tag:
  - package
  - text
  - bithesis
---

# `\autoref`中文引用名称

<!--
  https://github.com/BITNP/BIThesis/discussions/400
  https://github.com/BITNP/BIThesis/issues/38#issuecomment-631185830
-->

[[pkg:hyperref]]提供的`\autoref`可以在交叉引用时自动带上 figure, table, chapter 等名称。

- `\autoref`是给空格分词的语言准备的，按现在[[pkg:bithesis]]的实现，`\autoref{fig:sth}啊` ⇒ `图 1-1啊`，数字前有空格，数字后没空格。改为`\autoref{fig:sth} 啊`（⇒ `图 1-1 啊`）或再像下面那样定义`\figureautorefname`即可。

- 在导言区加下面这段可实现`\autoref{ch:whatever}` ⇒ `第2章`等。

  ```latex
  \usepackage{hyperref}
  % https://bithesis.bitnp.net/faq/autoref-name.html
  \def\chapterautorefname~#1\null{第~#1~章\null}
  \def\sectionautorefname~#1\null{第~#1~节\null}
  \def\subsectionautorefname~#1\null{第~#1~节\null}
  % 严格按学校标准：\def\equationautorefname~#1\null{式（#1）\null}
  \def\equationautorefname~#1\null{式~(#1)~\null}
  ```

来源：

- [hyperref - How to use the command `\autoref` to implement the same effect when use the command `\eqref`? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/a/66150/82731)
- [中国科学技术大学 USTC thesis](https://github.com/ustctug/ustcthesis/blob/3900c0d711c01972ccf57fedb14911d1d7dc711b/ustcthesis.cls#L3232-L3250)、[西南交通大学 SWJTU thesis](https://github.com/swjtutug/swjtuthesis/blob/4b2869b8de1ebe87b24028d59a6f2f6751788772/swjtuthesis.dtx#L810-L824)

## 已知的问题

附录中也有 section，传入的`#1`形如`附录 A`，`\autoref{…}`会变成`第 附录 A 节`。

在`\autoref`前重定义`\sectionautorefname`可解决，但那样反而不如直接`\ref{…} ` ⇒ `附录 A `方便。

## 相关讨论

- [如何在宏两侧自动插入CJKecglue · Issue #23 · CTeX-org/forum](https://github.com/CTeX-org/forum/issues/23)
- [`\ref` 中出现数字时，与随后紧跟的汉字之间缺少空格 · Issue #392 · CTeX-org/ctex-kit](https://github.com/CTeX-org/ctex-kit/issues/392)

## 题外话

[Reference Function – Typst Documentation](https://typst.app/docs/reference/model/ref/#parameters-supplement)

```typst
#set ref(supplement: it => {
  if it.func() == heading {
    "Chapter"
  } else {
    "Thing"
  }
})
```
