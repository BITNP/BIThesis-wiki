---
tag: package
---

# 跨页三线表（续表）

<!-- https://github.com/BITNP/BIThesis/discussions/503 -->

使用[[pkg:longtable]]制作跨页三线表（续表）。

::: details 效果截图
![图片](https://github.com/user-attachments/assets/ca458a16-d568-4cf8-88e9-ee5c2adcc5cd)
:::

```latex
\usepackage{longtable}
% 此外还需要 booktabs，不过 bithesis 已经引入，不必重复
```

```latex
\begin{longtable}[htbp]{cccc}
  \caption{标题} \label{tab:标题} \\
  % 👇第一个表头
  \toprule
  甲 & 乙 & 丙 & 丁 \\
  \midrule
  \endfirsthead
  % 👇每次跨页后的表头
  \multicolumn{4}{l}{续表} \\
  \toprule
  甲 & 乙 & 丙 & 丁 \\
  \midrule
  \endhead
  % 👇每次临跨页前的结尾
  \midrule
  \multicolumn{4}{r}{{续下页}} \\
  \endfoot
  \bottomrule
  \endlastfoot
  % 👇表的内容
  1 & 2 & 3 & 4 \\
  1 & 2 & 3 & 4 \\
  1 & 2 & 3 & 4 \\
  1 & 2 & 3 & 4 \\
  1 & 2 & 3 & 4 \\
  1 & 2 & 3 & 4 \\
  1 & 2 & 3 & 4 \\
\end{longtable}
```

相关链接：

- [CY/T 170—2019《学术出版规范　表格》](https://www.nppa.gov.cn/xxgk/fdzdgknr/hybz/202210/t20221004_445179.html)

  > - 7.4.2 转页接排
  > - 7.4.2.1 表格一面排不下时，可采用转页接排的方法处理。
  > - 7.4.2.2 转页接排的表格应重复排横表头和关于单位的陈述，并在横表头上方加“表××（续）” 或“续表”字样。
  > - 7.4.2.3 前页表格最下端的行线应用细线，转页接排表格的顶线应用粗线。

- [GB/T 7713.2—2022《学术论文编写规则》](https://lib.tsinghua.edu.cn/wj/GBT7713_2-2022.pdf)

  > - 5.5.5 表格宜紧置于首次提及该表编号的正文之后，先见文字后见表。如果某个表格需要转页接排，则应在随后接排该表的表格上方加“表×（续）”或“续表”字样。续表应重复表头。
