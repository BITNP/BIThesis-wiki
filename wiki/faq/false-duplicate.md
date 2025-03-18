---
tag: font
---

# 查重时，macOS 编译结果有大量虚警

使用 macOS 上编译的 PDF，知网可能会错误地将参考文献、研究成果声明等标为重复。

这种 PDF 渲染正常，但文字复制出来是乱码，可能是无意中替换为了非通用的字体。

## 解决方案

- 更新到 [TeX Live / MacTeX 2023 或更新版本](https://www.tug.org/mactex/mactex-download.html)。
- 如果不行，还可以尝试[使用 Windows 字体](./word-font.md)。
- 或者干脆在提交的版本中删去原创性声明，或[使用盲审版本](./blind-peer-review.md)。

## 历史分析

- [知网会查重「研究成果声明」 · BITNP/BIThesis · Discussion #317](https://github.com/BITNP/BIThesis/discussions/317?sort=top)
- [macOS 下编译后，查重参考文献大面积标红 · Issue #326 · BITNP/BIThesis](https://github.com/BITNP/BIThesis/issues/326)
