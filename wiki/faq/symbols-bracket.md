---
tag:
  - bithesis
  - text
---

# 「主要符号对照表」如何写中括号？

编译器无法正常解析`\item[$[A]_n$]`，可套大括号改成`\item[{…}]`，帮助解析器分组。

```latex
\begin{symbols}
  \item[{$[A]_n$}] 「主要符号对照表」中这样写括号
\end{symbols}
```

具体解释请参考：[LaTeX 命令的可选参数不能有方括号么？ - 刘海洋的回答 - 知乎](https://www.zhihu.com/question/27515460/answer/36948635)。
