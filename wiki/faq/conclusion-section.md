---
tag: par
---

# 结论里怎么加 section?

学校要求结论不加章号，导致结论里的 section 也无法编号。

建议给`\section`加星号，放弃编号。

```latex
\section*{总结}

\section*{展望}
```

如果确实需要编号，可自行定义不含章号的编号格式，例如以下命令会让`\section`的编号形如`1`（不过可能与章号混淆）。更多用法请参考[[texdoc:ctex]]。

```latex
\ctexset{ section/number = \arabic{section} }
```
