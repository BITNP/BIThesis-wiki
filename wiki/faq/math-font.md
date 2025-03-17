---
tag:
  - package
  - font
---

# 如何修改数学公式的字体？

可以在导言区引入[[pkg:unicode-math]]，
并使用 `\setmathfont{XITS Math}` 修改数学环境下字体：

```latex
\usepackage{unicode-math}
\unimathsetup{
    math-style = ISO,
    bold-style = ISO,
}
\setmathfont{XITSMath-Regular.otf}
```

请事先安装 XITS 字体。

此外，如果使用 TeX Gyre Pagella Math 等字面较大的字体，略微增加数学行距可能更美观：

```latex
\setmathfont{texgyrepagella-math.otf}
\SetMathEnvironmentSinglespace{1.05}
```

更多字体与使用方法请参考[[texdoc:unicode-math]]和[[texdoc:zhlineskip]]。
