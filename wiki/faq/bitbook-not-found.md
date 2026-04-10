---
tag:
  - bithesis
  - upgrade
lastUpdated: 2023-02-13 10:52:26 +08:00
# commit 1b33eb7d5386a835f668e1299f8afa99f0b76be4
---

# 编译时报错`bitbook.cls not found`

:::warning `v3.x.x` 观看提示
该问题只可能在老版本上出现。如遇到此问题，建议使用最新版本代码。
:::

原因是：你使用了 V2.x 的模板，但是本机的 LaTeX 环境没有更新到最新，并未包含 `bithesis` 宏集。

解决方案：安装最新的 LaTeX 环境，或通过包管理器手动安装[[pkg:bithesis]]。(更多内容请参考 [文档 - 🍌 如何开始](../guide/latex-env.md)。)
