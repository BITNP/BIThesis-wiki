---
tag:
  - bithesis
  - package
---

# 如何排版算法（伪代码）？

有以下三种互不兼容的方式。

## [[pkg:algorithm2e]]方式（推荐）{#algorithm2e}

引入宏包时，要加上选项 `algochapter` 才能按学校要求分章编号，示例如下。

```latex
\usepackage[ruled, algochapter]{algorithm2e}
```

使用示例请参考 [Algorithms - Overleaf 文档的 The `algorithm2e` package 一节](https://www.overleaf.com/learn/latex/Algorithms#The_algorithm2e_package)或者 [BIThesis 的测试用例](https://github.com/BITNP/BIThesis/blob/main/tests/algorithm2e/main.tex)，也可直接查询互联网及人工智能。

::: tip 📥 报错 file not found？请补装宏包
如果您之前精简了 TeX Live 安装内容，需要补装宏包：

```shell
tlmgr install algorithm2e endfloat ifoddpage tocbibind
```

:::

## [[pkg:algorithms|algorithm]] + X 方式

引入[[pkg:algorithms|algorithm]]时，要加上选项 `chapter` 才能按学校要求分章编号，示例如下。

```latex
\usepackage[chapter]{algorithm}
\usepackage{algorithmic} % 也可替换为 algpseudocode 或 algcompatible
```

使用示例请参考 [Algorithms - Overleaf 文档](https://www.overleaf.com/learn/latex/Algorithms)。

::: warning 🧓 不推荐
[[pkg:algorithms]]2009年后就未再更新，有些小问题，我们不推荐使用（除非您已有现成代码）。例如，`algorithm`环境按`H`与`h/t/b/p`方式浮动时，算法内部的行距不同；再比如`\IF`等命令设计得不好，LaTeX 源代码难以自动缩进。
:::

## 使用模板提供的 `algo` 环境

这是模板“预定义的数学环境”之一，不额外依赖宏包，但功能有限，基本只支持编号。
