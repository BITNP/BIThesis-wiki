---
tag:
  - bithesis
  - package
---

# 如何排版算法（伪代码）？

有以下三种互不兼容的方式。

## [[pkg:algorithms|algorithm]] + X 方式

引入[[pkg:algorithms|algorithm]]时，要加上选项 `chapter` 才能按学校要求分章编号，示例如下。

```latex
\usepackage[chapter]{algorithm}
\usepackage{algorithmic} % 也可替换为 algpseudocode 或 algcompatible
```

使用示例请参考 [Algorithms - Overleaf 文档](https://www.overleaf.com/learn/latex/Algorithms)。

## [[pkg:algorithm2e]]方式

引入宏包时，要加上选项 `algochapter` 才能按学校要求分章编号，示例如下。

```latex
\usepackage[ruled, algochapter]{algorithm2e}
```

使用示例请参考 [Algorithms - Overleaf 文档的 The `algorithm2e` package 一节](https://www.overleaf.com/learn/latex/Algorithms#The_algorithm2e_package)。

## 使用模板提供的 `algo` 环境

这是模板“预定义的数学环境”之一，不额外依赖宏包，但功能有限，基本只支持编号。
