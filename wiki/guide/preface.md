<script setup>
import TemplateList from '../.vitepress/theme/TemplateList.vue'
</script>

# BIThesis

## BIThesis 是什么？

(｡･∀･)ﾉﾞ嗨，欢迎来到 BIThesis。这里是北京理工大学非官方 LaTeX 模板聚集地，覆盖本科生、研究生学位论文，以及大学学习涉及的外文翻译、读书报告、实验报告等文档。

## 重要提醒

1. _尽管已有大量往届学生使用此项目进行论文撰写，但你仍需要仔细斟酌后决定是否使用我们的项目。_
2. _本模板仍处于积极维护中，因此仍有微小可能会修改部分接口。在论文撰写的过程中，请慎重考虑是否需要同步更新模板。_
3. 请对自己的撰写内容做好备份（甚至是版本管理）。
4. 尽管本项目的排版符合学校的要求，但很多时候盲审老师会有一些「自己的想法」；这是本项目无法预料的。

## Q&A

### Q：我真的可以直接将 BIThesis 模板用于我的毕业设计吗？

**A：可以的。**

- 本项目已经与北京理工大学[教务部](https://mp.weixin.qq.com/s/I1SsP9VSaQ90a_2tW4zQUg)、[研究生院](https://grd.bit.edu.cn/xwgz/xwgz2/wjxz_xwgz/b117824.htm)确认，可以用于撰写北京理工大学本科生、研究生毕业设计（论文）。
- 本项目同时也获得了 [北京理工大学教务部](https://jwb.bit.edu.cn/)、[北京理工大学计算机学院](https://cs.bit.edu.cn/) 的认可、背书与大力支持。详见：[致谢 - 官方赞助](./acknowledgements.md)。

我们正在对项目持续更新！目前，你完全可以使用现有版本开始编写毕业设计总论文；不过与此同时，我们也在持续推进代码的升级和更新（主要是不影响使用的底层逻辑）。更多开发计划请访问我们的 [Roadmap](https://github.com/BITNP/BIThesis/projects)。**想帮助这个项目持续前进？参见我们的[贡献者指南](https://github.com/BITNP/BIThesis/blob/main/contributing-zh.md)。**

### Q：BIThesis 都包含哪些模板？

**A：如下表。**

<TemplateList/>

### Q: 我能在哪些平台使用 BIThesis 模板?

**A：BIThesis 支持跨平台写作。**

BIThesis 是基于 LaTeX 的模板，支持 Windows/Linux/macOS 本地写作，也支持使用 Overleaf/TeXPage 等在线平台进行在线写作，一份相同的 LaTeX 代码在所有平台上编译得到的 PDF 几乎没有差别。下面关于各个平台的介绍有助于你选择写作的平台。

- 本地平台：前期配置麻烦，Linux/macOS 还存在[字体问题](../faq/word-font.md)需要解决
  - Windows: 性能较低，上手简单，不存在任何兼容性问题，该版本编译出的 PDF 可视为标准版本，是最稳妥的选择；
  - WSL(Windows Subsystem for Linux)：性能接近 Linux/macOS，高于 Windows 原生，对不熟悉 Linux 的人有一定门槛，属于比较平衡的选择；
  - Linux/macOS：性能最高的平台，但存在字体问题需要解决，适合有一定 LaTeX 使用经验、追求高性能的用户。

- 在线平台：开箱即用，但存在编译时长限制，无法编译较大的文档
  - Overleaf: 国外在线平台，对中文支持有限，需自行解决中文[字体问题](../faq/word-font.md)，目前不推荐使用该平台进行中文论文的撰写；
  - TexPage: 国内在线平台，中文支持完善，与本地平台的区别是有编译时长限制。

如果你需要本地写作，你需要参考后续教程来完成安装配置等前置工作，再下载模板，开始写作。

如果你需要在线写作，点击上方模板表格中的 `open in TeXPage`、`open in Overleaf` 按钮，在对应的在线平台中直接打开相应模板。
### Q：我应该选择 LaTeX 还是 Word？

如果你使用 Word 足够久，大约会遭遇种种魔幻现实主义事件：「同一份 Word 文档，在不同地方打开就变得不同」「写几个字，撤销，整段格式突然崩坏」「页码在 Word 中显示正常，导出 PDF 却变成“P A G E”」……LaTeX 适用于学术论文排版，使用者能将关注点更多放在内容质量，减少繁琐的格式调整。此外，LaTeX 在参考文献管理、公式输入方面也有更专业的设计。欢迎来尝试 LaTeX 来排版你的论文，专业高端、学界认可、开源免费。

不过，写作体验并非唯一因素，学习成本、参与文章的其他人的意愿、现有材料等也应纳入考量。网上已有大量文章就此讨论，可参考 FKY（本项目维护者之一）的[简要总结](https://blog.fkynjyq.com/should-i-choose-between-bithesis-or-word)。

### Q：我该如何使用 BIThesis？

请单击页面下方“下一页”，继续阅读[教程简介](./intro.md)。

### Q： 我能修改 BIThesis 使得它能够满足以毕业设计为模板修改而来的课程报告或者其他文档吗？

**A：当然可以！**

如果你是学生，请参照 [详细配置手册`bithesis.pdf`][bithesis-pdf] 来对模板的一些细节进行修改。

如果你是老师，你希望 BIThesis 开发组能够为你的模板提供相应的技术支持，请使用邮件联系我们，开发组会提供全力支持。

[bithesis-pdf]: https://mirrors.ctan.org/macros/unicodetex/latex/bithesis/bithesis.pdf
