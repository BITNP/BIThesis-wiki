# 开始使用 <Badge text="BIThesis"/>

:::tip 📖 BIThesis
适用于北京理工大学本科生的毕业设计开题报告、毕业设计终极论文与通用实验报告等的 LaTeX 模板。
:::

## 简单介绍

(｡･∀･)ﾉﾞ嗨，欢迎来到 BIThesis。这里是北京理工大学本科生毕业设计开题报告、总论文，以及其他课程报告、实验报告等重要论文、报告的 LaTeX 模板聚集地。如果你厌烦了 Word 格式的不人性化、参考文献的难以管理、公式输入的差劲体验……那么欢迎来尝试用专业的学术稿件排版利器 —— LaTeX 来排版你的论文。专业高端、学界认可、开源免费，LaTeX 是你论文排版的最佳搭档。

![](https://i.loli.net/2020/03/01/WbzE5rBvIZak8Rx.png)

BIThesis 为各位提供了基于北京理工大学计算机学院给出的「北京理工大学本科生毕业论文 · 开题报告」与北京理工大学教务部给出的「北京理工大学本科生毕业设计 · 论文模板」的 LaTeX 样版，基于 BIThesis 的 LaTeX 模板，你可以在不必过多在意论文格式的基础上，专注于学术研究、项目实现，从而顺利完成你的项目。

## 开始阅读文档

这里是 BIThesis 的项目 Wiki，提供了 LaTeX 的基本安装方法、LaTeX 项目的使用方法、BIThesis 的编译方法……你可以按照下面的流程图所示的顺序来下载与使用 BIThesis：

![](https://i.loli.net/2020/03/27/mV3kTsnCDNWwlOU.png)

在使用 BIThesis 之前，请务必仔细阅读相关章节，只有清晰理解 BIThesis 的各部分内容与功能，我们才能借助 BIThesis 模板撰写优秀的论文。

## BIThesis V2.x 和 V1.x 的区别是什么，我应该使用哪个？

首先，推荐使用 V2.x 版本的 BIThesis。今后我们会将工作重心逐渐迁移到 V2.x 版本。

对于用户来说，V2.x 的改动 **仅在于要求用户使用 2021 年及以上版本的 LaTeX 环境，或者手动安装 [ bithesis 宏集 ](https://ctan.org/pkg/bithesis?lang=en)** 。相关指南我们已经放在了下一小节中。

**V2.x 版本其实是对 V1.x 的重构，以提供更简介的模板和更方便的更新方式。** 如果你使用过 V1.x 版本，就会发现在模板开始，有较长的一段文档样式定义代码。这些代码并不需要作为使用者的你直接修改。但是随着版本的迭代，这部分的代码有可能会被开发者进行修改。为了更新本地的版本，作为使用者的你就不得不将自己的论文重新拷贝到新版本的模板中。

因此 V2.x 着力解决这一问题。为此我们将样式文件迁移到了自己的[ 宏集 bithesis ](https://ctan.org/pkg/bithesis?lang=en)中。bithesis 宏集将随着 TeX 发型版一起被分发到下游，进而供我们在模板中使用。这样，每次的样式更新就只需要用户更新 bithesis 宏集，而不影响用户正在编写的 `*.tex` 文件。 
