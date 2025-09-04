---
tag:
  - bithesis
  - meta
---

# VS Code 中如何避免 LaTeX Workshop 全局配置冲突？

## 问题描述

按照某些教程配置 VS Code 的 LaTeX Workshop 时，可能会建议在全局设置文件 `settings.json` 中添加自定义的编译工具和工具链配置。这种做法会覆盖 LaTeX Workshop 的默认设置，强制所有 LaTeX 项目都使用 XeTeX 编译，可能导致其他不兼容 XeTeX 的模板编译失败。

## 推荐解决方案

### 方案一：使用内置 recipe（推荐）

LaTeX Workshop 内置了多种编译工具链，其中 "latexmk (xelatex)" 适合编译 BIThesis 模板：

1. 设置默认 recipe 为"上次使用的"：

```json
{
  "latex-workshop.latex.recipe.default": "lastUsed"
}
```

2. 编译时选择内置的 "latexmk (xelatex)" recipe：
   - 按 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> 打开命令面板
   - 搜索 "LaTeX Workshop: Build with recipe"
   - 选择 "latexmk (xelatex)"

### 方案二：使用魔术注释（最推荐）

在 LaTeX 文档的开头添加魔术注释，指定该文件使用的编译工具链：

```latex
% !LW recipe = latexmk (xelatex)
\documentclass{bithesis}
```

这样 LaTeX Workshop 会自动为该文件选择 XeTeX 编译，而不影响其他项目。

### 方案三：启用 TeX 程序魔术注释

如果模板中已有 `% !TeX program = xelatex` 注释，可以配置 LaTeX Workshop 识别它：

```json
{
  "latex-workshop.latex.build.forceRecipeUsage": false
}
```

注意：此方案可能存在安全风险，请谨慎使用。

## 为什么不推荐全局配置

全局配置会：

- 覆盖 LaTeX Workshop 的默认编译工具
- 强制所有 LaTeX 项目使用相同的编译方式
- 可能导致其他模板无法正常编译
- 增加配置复杂度和维护难度

## 参考链接

- [LaTeX Workshop 官方编译配置文档](https://github.com/James-Yu/LaTeX-Workshop/wiki/Compile#latex-recipes)
- [📃 编辑器配置与模板编译](../guide/configure-and-compile.md#使用-vs-code-撰写与编译-latex-模板)
