---
tag: package
---

# 列表项的间距过大该如何解决？

相比 Word，LaTeX 的列表项间距会比行间距更大一些。这样做在一个列表项中包含多行时，可以更好地区分不同的列表项。

但是，如果你只是想要一个简单的列表，这种间距可能会显得过大。想要**临时**取消这种间距，可以在环境中添加选项`nosep`：

```latex
\begin{itemize}[nosep]
  \item 选项一
  \item 选项二
\end{itemize}
```

想要**永久**取消这种间距，可以在导言区添加如下代码：

```latex
\setlist{nosep}
```

详见：[列表项的行距过大 · Issue #293 · BITNP/BIThesis · GitHub](https://github.com/BITNP/BIThesis/issues/293)

以上功能由[[pkg:enumitem]]支持，详见[[texdoc:enumitem]]。（[[pkg:bithesis]]已经自动导入该宏包。）
