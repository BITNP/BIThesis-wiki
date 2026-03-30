---
tag:
  - bithesis
  - font
---

# hbar 横线高度异常，未穿过 h

在 BIThesis 模板中使用`$\hbar$`，横线会向上偏移，未穿过 h，像 h̅ 而非 ħ。

## 原因

LaTeX 默认的`\hbar`由字母 h 和横线组合而成，横线高度配合默认字体 Computer Modern 的 h。

BIThesis 将西文字体设置为 Times New Roman。该字体 h 的高度不同，但 LaTeX 仍按原高度画横线，导致横线错位。

::: details 能复现该问题的最小例子

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{Times New Roman}
% \setmainfont{TeX Gyre Termes}
% \setmainfont{TeX Gyre Termes Math}

\begin{document}
$\hbar$
\end{document}
```

:::

## 解决办法

不让 LaTeX 组合部件，直接调用 Times New Roman 字体提供的 ħ 字形。具体而言，如下定义`\planck`，使用时将`\hbar`改为`\planck`。

```latex
\newcommand*{\planck}{\textit{ħ}}
```

::: details 补充解释

- 这里选择另外定义`\planck`命令。

  由于`\hbar`命令比较底层，覆盖`\hbar`比较困难。

- `\planck`定义中的 ħ 是 U+0127 LATIN SMALL LETTER H WITH STROKE，属于 Latin Extended-A 区。

  Unicode 还编码了 ℏ，即 U+210F PLANCK CONSTANT OVER TWO PI，属于 Letterlike Symbols 区。

  这里选择用 U+0127 是出于以下考虑：
  - Times New Roman 和 TeX Gyre Termes 都提供 U+0127 及其意大利斜体，并且都不提供 U+210F。
  - TeX Gyre Termes Math 提供 U+210F（尽管只有意大利斜体），并且不提供 U+0127。
  - 以上 U+0127 的横线水平（无论正斜），但 U+210F 的横线倾斜。水平横线版本更常见。

:::

## 另法

也可如下导入[[pkg:mathdesign]]，全盘更换字体。

```latex
\usepackage{mathdesign}
```

根据2026年3月反馈，有课题组的祖传模板使用这种方案，祖传模板的注释还说这个字体最符合 [APS (American Physical Society)](https://journals.aps.org/)。相关专业的同学可以考虑使用。
