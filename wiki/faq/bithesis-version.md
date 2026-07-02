---
tag:
  - bithesis
  - meta
---

# 如何查看版本号？

在`bithesis.cls`开头有写：

```latex
\ProvidesExplClass{bithesis}
  {2025-04-18} {3.8.4} {BIT Thesis Templates}
```

另外在日志中搜索“Document Class”也能找到：

```log {1}
Document Class: bithesis 2025-04-18 v3.8.4 BIT Thesis Templates
Document Class: ctexbook 2022/07/14 v2.5.10 Chinese adapter for class book (CTEX)
Document Class: book 2024/06/29 v1.4n Standard LaTeX document class
```

::: tip 🔼 如何升级？
如欲升级，请参考 [📁 下载与使用模板](../guide/downloading-using-templates.md#日后更新升级)。
:::

## 找不到类似内容？

如果你找不到类似内容，而且发现以下迹象，那么你使用的恐怕并不是这个模板。

- 文件夹中有`BIT-thesis-run.{sh,cmd,cls}`
- 日志中出现[[pkg:natbib]]
- ……

我校历史上存在[十余个名称类似的 LaTeX 模板](https://ydx-2147483647.github.io/best-of-bits/#template)：BIT-Thesis、BITthesis、BIT_Thesis……不过大都因作者毕业等原因不再维护，没有持续跟进学校新版要求并兼容 LaTeX 新版基础设施。而 BIThesis [有学生组织牵头](../guide/acknowledgements.md)，是目前[^present]唯一积极维护的 LaTeX 模板。

[^present]: 2025年10月。

若是新建文档，可参考 [📁 下载与使用模板](../guide/downloading-using-templates.md)重新创建。
