# 📕 学术报告演示文稿模板

[![](https://img.shields.io/badge/maintainer-@BITNP/BIThesis-F80000?logo=github&labelColor=2b2b2b)](https://github.com/BITNP)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/BITNP/BIThesis?color=008080&logo=latex&labelColor=2b2b2b)](https://github.com/BITNP/BIThesis/releases/latest)

本文档介绍了北京理工大学 LaTeX 演示文稿使用方法。

## 内容高亮（highlight)

中文的内容高亮需要使用模板中提供的 `\cjkhl{color}{content}`。例如：`\cjkhl{yellow}{得道有先后}`。请注意，在内容中含有特殊符号情况下，该方法可能会失效。

## 在 Windows 下进行演示

### 推荐方法

渲染为 PDF 之后，直接使用该 PDF 进行幻灯演示（例如 Edge，Chrome 均支持此方法）。

这样的好处是，所有的信息都能保留。

### 不推荐方法

- 渲染为 PDF 之后，利用一些工具将 PDF 转为 PPT(X)—— **会存在某些样式错乱的问题。**
- 渲染为 PDF 之后，利用工具将 PDF 转为图片格式，再插入 PPT(X)中—— **会存在分辨率不足的问题。**

**如果你最终只能提交 PPT(X)，那么不建议你使用 LaTeX 进行文档演示。**

## 其他注意事项

有一些习惯用法，在 `beamer` 中的使用方式和平常使用 `article` 文档类或者 `book` 文档类会有些许不同。如果遇到问题，请在搜索的时候特意注明对 `beamer` 的使用。

