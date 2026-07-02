---
tag:
  - page
  - bithesis
---

# 怎样让空白页有页眉页脚？

可以[通过`\cleardoublepage`或`openright`在正文插入空白页](./clear-double-page.md)。[[pkg:bithesis]]默认这种空白页无页眉页脚，不标页码但计入页码。这种做法与很多专业出版社排的纸书一致。

如果你想让空白页也有页眉页脚，可以编辑`main.tex`，**在`\mainmatter`之后**加入以下代码。

```latex
\makeatletter
\ExplSyntaxOn
\RenewDocumentCommand \cleardoublepage { }
  {
    \clearpage
    \bool_if:NT \g__bithesis_twoside_bool
      {
        \int_if_odd:nF \c@page
          { \hbox:n { } \thispagestyle { BIThesis } \newpage }
      }
  }
\ExplSyntaxOff
\makeatother
```

::: details 代码来源

[模板原有类似代码](https://github.com/BITNP/BIThesis/blob/f505c9d3076af58b6991e3501c2d354cd78e8d73/bithesis.dtx#L2593-L2608)，只不过`\thispagestyle { empty }`。这里改成了`\thispagestyle { BIThesis }`。

另请参阅[`fancyhdr`宏包手册的 Those blank pages 一节](https://texdoc.org/serve/fancyhdr/0#section.2.24)。

:::
