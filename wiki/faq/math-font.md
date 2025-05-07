---
tag:
  - font
  - package
---

# 如何修改数学公式的字体？

## BIThesis

请编辑`main.tex`，用`\BITSetup`设置`style/mathFont`选项，例如：

```latex {4}
\BITSetup{
  …,
  style = {
    mathFont = termes,
  },
}
```

这里`terms`指 TeX Gyre Termes Math 字体，它相当接近 Times New Roman。更多选择请参考[[texdoc:bithesis]]。

## 一般 LaTeX 文档

<!-- https://github.com/BITNP/BIThesis/discussions/583 -->

可以在导言区引入[[pkg:unicode-math]]，并使用 `\setmathfont{…}` 修改数学环境下字体，例如：

```latex
\usepackage{unicode-math}
\unimathsetup{
  math-style = ISO,
  bold-style = ISO,
}
\setmathfont{XITSMath-Regular.otf}
```

（部分环境需手动安装字体）

更多字体与使用方法请参考[[texdoc:unicode-math]]。

## 可能存在的问题

### 粗体：`\boldsymbol` → `\symbf`

[[pkg:unicode]]与上世纪的字体管理方式不兼容。使用[[pkg:unicode]]后，加粗无法使用[[pkg:amsbsy]]的`\boldsymbol`、[[pkg:bm]]的`\bm`、[[pkg:physics]]的`\vb`等。

建议使用`\symbf`加粗，`\symup`、`\symit`、`\symcal`等同理。

也可以考虑兼容手段，例如使用[[pkg:physics2]]的`bm-um.legacy`，或者自己[`\renewcommand*`](https://texfaq.org/FAQ-newcmdstar)：

```latex
% Overwrite some commands from physics to be compatible with unicode-math
\RenewCommandCopy\vb\symbf
\renewcommand*{\vdot}{\symbf{\cdot}}
\renewcommand*{\grad}{\symbf{\nabla}}
\renewcommand*{\divergence}{\symbf{\nabla} \vdot}
```

参考：[LaTeX 排版国标样式的数学符号 - LaTeX工作室](https://www.latexstudio.net/archives/51494)。

### 如需兼容[[pkg:mathtools]]

[[pkg:mathtools]]提供了`gather`环境、`\coloneqq`符号（:=）等命令，但个别命令与[[pkg:unicode-math]]冲突。如需使用，可在导入时关闭警告：

```latex {5}
% 注意导入顺序
\usepackage{amsmath}
\usepackage{mathtools}
\usepackage[
  warnings-off={mathtools-colon, mathtools-overbracket},
]{unicode-math}

\unimathsetup{…}
```

### 字体字面较大

如果使用 TeX Gyre Pagella Math 等字面较大的字体，略微增加数学行距可能更美观：

```latex
\setmathfont{texgyrepagella-math.otf}
\SetMathEnvironmentSinglespace{1.05}
```

请参考[[texdoc:zhlineskip]]。

### 混用字体

下例中，主要使用 Latin Modern Math，双线体（如 ℕℤℚℝℂ）使用 TeX Gyre Pagella Math，[空集符号 ∅ 使用 Asana Math](https://tex.stackexchange.com/questions/208014/empty-set-symbols-confused)。

```latex
\setmathfont{latinmodern-math.otf}
\setmathfont[range=\mathbb]{texgyrepagella-math.otf}
\setmathfont[range=\varnothing]{Asana-Math.otf}
```

详情请参考[[texdoc:unicode-math]]。
