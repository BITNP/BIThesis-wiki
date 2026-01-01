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

| 预览                                                                                                         | 模板及特性                                                                                                                                                                                                                                                                                                                                                                    |
| :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://s2.loli.net/2022/03/29/MbXe7dFnDNxUuTa.png" width="300px" alt="graduate-thesis" />         | <ul><li>**研究生·学位论文**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GB/T 7714—2015 规范编排的书目</li><li>符合研究生学位论文模版的格式要求。</li><li>2025年3月末研究生院开始使用新的研究生学位论文模板[^1]，请使用BIThesis v3.8.3或更新的版本。</li><li>[![open in overleaf][open-in-overleaf]][graduate-thesis]</li></ul> |
| <img src="https://s2.loli.net/2023/04/07/zJBgZwrdtUQGNjp.png" width="300px" alt="undergraduate-thesis" />    | <ul><li>**本科生·毕业设计·论文**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GB/T 7714—2015 规范编排的书目</li><li>符合北京理工大学本科毕业设计论文的格式要求。</li><li>[![open in overleaf][open-in-overleaf]][undergraduate-thesis]</li></ul>                                                                                |
| <img src="https://s2.loli.net/2022/09/04/kd6PDqusBciAn7Q.png" width="300px" alt="undergraduate-thesis-en" /> | <ul><li>**本科生·毕业设计·论文（全英文专业）**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GB/T 7714—2015 规范编排的书目</li><li>符合北京理工大学本科毕业设计论文的格式要求。</li><li>[![open in overleaf][open-in-overleaf]][undergraduate-thesis-en]</li></ul>                                                               |
| <img src="https://s2.loli.net/2023/04/07/Q7H8kYbteBldENZ.png" width="300px" alt="paper-translation" />       | <ul><li>**本科生·毕业设计·外文翻译**</li><li>由毕设模板迁移而来</li><li>符合北京理工大学本科毕业设计模板的格式要求。</li><li>[![open in overleaf][open-in-overleaf]][paper-translation]</li></ul>                                                                                                                                                                             |
| <img src="https://s2.loli.net/2023/07/31/rITfyK2Le9NjJCk.png" width="300px" alt="reading-report" />          | <ul><li>**读书报告**</li><li>包括封面，BIT logo</li><li>格式为简化版本科毕业设计</li><li>适用于信息与电子学院“电磁场与电磁波”等课程和一些公选课</li><li>[![open in overleaf][open-in-overleaf]][reading-report]</li></ul>                                                                                                                                                     |
| <img src="https://s2.loli.net/2022/01/02/ezCsDZnYf2LHSIk.png" width="300px" alt="presentation-slide" />      | <ul><li>**演示文档**</li><li>包括多种文字样式变化的支持</li><li>CJK 字体高亮支持</li><li>[![open in overleaf][open-in-overleaf]][presentation-slide]</li></ul>                                                                                                                                                                                                                |
| <img src="https://i.loli.net/2020/03/08/txzGcKv9YSel3IX.png" width="300px" alt="lab-report" />               | <ul><li>**基本实验报告**</li><li>包括封面，BIT logo</li><li>适用于无格式要求的实验报告写作</li><li>[![open in overleaf][open-in-overleaf]][lab-report]</li></ul>                                                                                                                                                                                                              |

### Q：我应该选择 LaTeX 还是 Word？

如果你使用 Word 足够久，大约会遭遇种种魔幻现实主义事件：「同一份 Word 文档，在不同地方打开就变得不同」「写几个字，撤销，整段格式突然崩坏」「页码在 Word 中显示正常，导出 PDF 却变成“P A G E”」……LaTeX 适用于学术论文排版，使用者能将关注点更多放在内容质量，减少繁琐的格式调整。此外，LaTeX 在参考文献管理、公式输入方面也有更专业的设计。欢迎来尝试 LaTeX 来排版你的论文，专业高端、学界认可、开源免费。

不过，写作体验并非唯一因素，学习成本、参与文章的其他人的意愿、现有材料等也应纳入考量。网上已有大量文章就此讨论，可参考 FKY（本项目维护者之一）的[简要总结](https://blog.fkynjyq.com/should-i-choose-between-bithesis-or-word)。

### Q：我该如何使用 BIThesis？

请单击页面下方“下一页”，继续阅读[教程简介](./intro.md)。

[undergraduate-thesis-en]: https://cn.overleaf.com/docs?engine=xelatex&snip_uri=https://github.com/BITNP/BIThesis/releases/latest/download/undergraduate-thesis-en.zip
[undergraduate-thesis]: https://cn.overleaf.com/docs?engine=xelatex&snip_uri=https://github.com/BITNP/BIThesis/releases/latest/download/undergraduate-thesis.zip
[reading-report]: https://cn.overleaf.com/docs?engine=xelatex&snip_uri=https://github.com/BITNP/BIThesis/releases/latest/download/reading-report.zip
[presentation-slide]: https://cn.overleaf.com/docs?engine=xelatex&snip_uri=https://github.com/BITNP/BIThesis/releases/latest/download/presentation-slide.zip
[paper-translation]: https://cn.overleaf.com/docs?engine=xelatex&snip_uri=https://github.com/BITNP/BIThesis/releases/latest/download/paper-translation.zip
[lab-report]: https://cn.overleaf.com/docs?engine=xelatex&snip_uri=https://github.com/BITNP/BIThesis/releases/latest/download/lab-report.zip
[graduate-thesis]: https://cn.overleaf.com/docs?engine=xelatex&snip_uri=https://github.com/BITNP/BIThesis/releases/latest/download/graduate-thesis.zip
[open-in-overleaf]: https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b

[^1]: [研究生学位论文模版；北京理工大学研究生院；2025](https://grd.bit.edu.cn/xwgz/xwgz2/wjxz_xwgz/b119746.htm)
