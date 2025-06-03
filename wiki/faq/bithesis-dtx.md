---
tag:
  - bithesis
  - meta
---

# `bithesis.cls`和`bithesis.dtx`是什么关系？

`bithesis.cls`由`bithesis.dtx`转换生成，cls（class）供最终作者使用，dtx（documented tex）在仓库中开发。

如果你想把某个 pull request 的修改手动复制给自己的`bithesis.cls`，那么基本只需知道：

- cls 与 dtx 的行号不同，因为 dtx 中顶格的注释会被删掉，且 dtx 包含多个模板。

- dtx 里的`@@`表示`_bithesis`。

更多细节请移步[`DEVELOPMENT.md` · BITNP/BIThesis](https://github.com/BITNP/BIThesis/blob/main/DEVELOPMENT.md)或查阅[[texdoc:docstrip]]。
