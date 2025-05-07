---
tag:
  - pub
  - bithesis
---

# 成果清单怎么绕过`pub.bib`直接记录项目？（例如获奖）

「攻读学位期间发表论文与研究成果清单」中，如果要记录不是文献的项目（例如获奖），或者盲审时希望隐藏，可以绕过`pub.bib`直接记录项目。

具体方法请参考`misc/4_pub.tex`结尾的[注释](https://github.com/BITNP/BIThesis/blob/25d9f7a8303dd1c056f20d6aba418cf93c27e7f3/templates/graduate-thesis/misc/4_pub.tex#L53-L61)，在`\printbibliography`之后，共存一个自定义的列表。

```latex {5-12}
\begin{publications}
  \addpubs{…}
  \printbibliography[…]

  \zihao{5} % 字号改为五号
  \renewcommand{\labelenumi}{[\theenumi]} % 编号改用中括号

  \begin{enumerate}[nosep, leftmargin=4ex-2pt, labelsep=1ex]
    \setcounter{enumi}{4} % 下一项为 5。
    \item 于《新青年》发表论文一篇，本人第一作者。
    \item 于\textit{La Jeunesse}发表论文一篇，导师第一作者，本人第二作者。
  \end{enumerate}
\end{publications}
```
