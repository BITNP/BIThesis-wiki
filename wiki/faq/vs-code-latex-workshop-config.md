# VS Code 中如何避免 LaTeX Workshop 全局配置冲突？

## 问题描述

直接修改 VS Code 全局设置来配置 LaTeX Workshop 会影响所有 LaTeX 项目，可能导致其他模板无法正常编译。

## 推荐解决方案

### 使用魔术注释（推荐）

在 BIThesis 文档的开头添加魔术注释：

```latex
% !LW recipe = latexmk (xelatex)
\documentclass{bithesis}
```

**重要：使用魔术注释时，不要同时配置全局设置，两者不能共存。**

### 使用内置 recipe

1. 设置默认使用上次选择的 recipe：
```json
{
  "latex-workshop.latex.recipe.default": "lastUsed"
}
```

2. 编译时手动选择内置的 "latexmk (xelatex)" recipe。

## 为什么不推荐全局配置

- 会影响所有 LaTeX 项目
- 可能破坏其他模板的编译
- 增加配置维护负担

更多配置详情请参考 [LaTeX Workshop 官方文档](https://github.com/James-Yu/LaTeX-Workshop/wiki/Compile)。
