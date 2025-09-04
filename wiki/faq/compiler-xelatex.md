---
tag:
  - bithesis
  - meta
---

# 空模板无法编译（如何换用 XeLaTeX？）

很可能是编译器设置成了 pdfLaTeX。该编译器几乎不支持汉字，请换成[[pkg:bithesis]]支持的 XeLaTeX。

- 本地平台——请参考 [📃 编辑器配置与模板编译](../guide/configure-and-compile.md)
  - **徒手`latexmk`和 TeXstudio**——默认识别`! TeX`魔术注释和`latexmkrc`，正常没有问题。
  - **VS Code**——推荐使用魔术注释（在文档开头添加 `% !LW recipe = latexmk (xelatex)`），详见[使用 VS Code 配合 LaTeX Workshop 编写与编译](../guide/configure-and-compile.md#使用-vs-code-撰写与编译-latex-模板)。

- 在线平台
  - [**Overleaf**](https://www.overleaf.com)——左上角 Menu/菜单 → Settings/设置 → Compiler/编译器，改为 XeLaTeX。
  - [**TeXPage**](https://www.texpage.com)——默认用 XeLaTeX，正常没有问题。

## 可能的报错

为方便搜索，列出几种可能报错。

Linux、macOS 及大部分在线平台：

```log
…/texmf-dist/tex/latex/ctex/fontset/ctex-fontset-fandol.def
! Critical Class ctexbook Error:
CTeX fontset `fandol' is unavailable in current mode.
```

Windows：

```log
…/texmf-dist/tex/xelatex/xecjk/xeCJK.sty
! Critical Package xeCJK Error:
The xeCJK package requires XeTeX to function.

You must change your typesetting engine to "xelatex"
instead of plain "latex" or "pdflatex" or "lualatex".
Loading xeCJK will abort!
```

[在 Overleaf 等在线平台自定义`ctex-fontset-windows.def`](./word-font.md#overleaf)时：

```log
./ctex-fontset-windows.def
File: ctex-fontset-windows.def 2022/07/14 v2.5.10  Windows fonts definition (CTEX, by file name)
  See https://bithesis.bitnp.net/faq/word-font.html
! Undefined control sequence.
l.13 \setCJKmainfont { simsun.ttc } [ BoldFont = simhei.ttf , ItalicFont =...
```
