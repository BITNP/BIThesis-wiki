---
tag:
  - bithesis
  - par
---

# 如何调整表格行高？

## BIThesis（v3.7.8+）

请编辑`main.tex`，用`\BITSetup`设置`misc/tabularRowSeparation`选项，例如：

```latex
\BITSetup{
  misc / tabularRowSeparation = 1.6,
  % 设为 1.25 更接近本科 Word 模板实作
  % 设为 1.6 更接近硕博 Word 模板实作
}
```

这种方式会影响全文所有表格。若只需调整个别表格，可在正文`\BITSetup`，并用大括号`{}`限制作用范围，例如：

```latex {1-2,18}
{
  \BITSetup{ misc / tabularRowSeparation = 1.6 }
  \begin{table}[htbp]
    \centering
    \caption{统计表}
    \begin{tabular}{ccccc}
      \toprule
      项目    & 产量    & 销量    & 产值   & 比重    \\
      \midrule
      手机    & 1000  & 10000 & 500  & 50\%  \\
      计算机   & 5500  & 5000  & 220  & 22\%  \\
      笔记本电脑 & 1100  & 1000  & 280  & 28\%  \\
      \midrule
      合计    & 17600 & 16000 & 1000 & 100\% \\
      \bottomrule
    \end{tabular}
  \end{table}
}
```

## 一般 LaTeX 文档

请参考 [How do I change column or row separation in LaTeX tables? - Overleaf](https://www.overleaf.com/learn/latex/Questions/How_do_I_change_column_or_row_separation_in_LaTeX_tables%3F)，重定义`\arraystretch`：

```latex
\renewcommand*{\arraystretch}{1.6}
```

不过这会同时影响表格和矩阵，用于中文并不合适——表格里写方块字，矩阵里写字母，前者行高应大于后者。[[pkg:bithesis]]的`misc/tabularRowSeparation`选项也用`\arraystretch`实现，不过只影响表格，不影响矩阵。
