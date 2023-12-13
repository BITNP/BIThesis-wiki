# BIThesis

## BIThesis 是什么？

BIThesis 是针对北京理工大学本科以及研究生同学毕业论文制作的一个非官方的 LaTeX 模板，BIThesis 同时也包括其他本科学习中涉及到的外文翻译、实验报告等的 LaTeX 模板。

## 重要提醒

1. _尽管已有大量往届学生使用此项目进行论文撰写，但你仍需要仔细斟酌后决定是否使用我们的项目。_
2. _本模板仍处于积极维护中，因此仍有微小可能会修改部分接口。在论文撰写的过程中，请慎重考虑是否需要同步更新模板。_
3. 请对自己的撰写内容做好备份（甚至是版本管理）。
4. 尽管本项目的排版符合学校的要求，但很多时候盲审老师会有一些「自己的想法」；这是本项目无法预料的。

## Q&A

### Q：我真的可以直接将 BIThesis 模板用于我的毕业设计吗？

**A：可以的。**

- 本项目已经经由北京理工大学教务部确认，可以用于北京理工大学本科生毕业论文、毕业设计的撰写之中。更多细节，请进入文档详细了解。
- 本项目同时也获得了 [北京理工大学教务部](https://jwb.bit.edu.cn/)、[北京理工大学计算机学院](https://cs.bit.edu.cn/) 的认可、背书与大力支持。详见：[致谢 - 官方赞助](/guide/acknowledgements.md)。

**我们正在对项目持续更新！目前，你完全可以使用现有版本开始编写毕业设计总论文；不过与此同时，我们也在持续推进代码的升级和更新（主要是不影响使用的底层逻辑）。更多开发计划请访问我们的 [Roadmap](https://github.com/BITNP/BIThesis/projects)。想帮助这个项目持续前进？参见我们的[贡献者指南](https://github.com/BITNP/BIThesis/blob/main/contributing-zh.md)**

### Q：BIThesis 都包含哪些模板？


_如果打开 Overleaf 版本略微落后于最新版本，有可能是因为此模板在最近几个版本中没有更新。_

**A：如下表。**

| 模板                                                     | 预览                                                                                                    | 特性                                                                                                                                                                                                                                                                                                                                                                                  |
| :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[研究生学位论文模板][repo-gt]**<br>                    | <img src="https://s2.loli.net/2022/03/29/MbXe7dFnDNxUuTa.png" width="300px" alt="master-thesis" />      | <ul><li>**研究生学位论文模板**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GBT7714-2015 规范编排的书目</li><li>符合研究生学位论文模版的格式[^1]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)][graduate-thesis]</li></ul>                 |
| **[本科生毕业设计论文模板][repo-ut]**<br>                | <img src="https://s2.loli.net/2023/04/07/zJBgZwrdtUQGNjp.png" width="300px" alt="grad_thesis" />        | <ul><li>**毕业设计论文模板**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GBT7714-2015 规范编排的书目</li><li>符合北京理工大学本科毕业设计论文的格式[^2]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)][undergraduate-thesis]</li></ul>    |
| **[本科生毕业设计论文模板（全英文专业）][repo-ute]**<br> | <img src="https://s2.loli.net/2022/09/04/kd6PDqusBciAn7Q.png" width="300px" alt="grad_thesis" />        | <ul><li>**毕业设计论文模板**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GBT7714-2015 规范编排的书目</li><li>符合北京理工大学本科毕业设计论文的格式[^2]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)][undergraduate-thesis-en]</li></ul> |
| **[本科生毕业设计论文外文翻译模板][repo-pt]**<br>        | <img src="https://s2.loli.net/2023/04/07/Q7H8kYbteBldENZ.png" width="300px" alt="paper_trans" />        | <ul><li>外文翻译模板</li><li>由毕设模板迁移而来</li><li>符合北京理工大学本科毕业设计模板的格式[^2]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)][paper-translation]</li></ul>                                                                                                           |
| **[本科生读书报告模板][repo-rr]**<br>                    | <img src="https://s2.loli.net/2023/07/31/rITfyK2Le9NjJCk.png" width="300px" alt="reading_report" />     | <ul><li>读书报告模板</li><li>包括封面，BIT logo</li><li>格式为简化版本科毕业设计</li><li>适用于信息与电子学院“电磁场与电磁波”等课程和一些公选课</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)][reading-report]</li></ul>                                                                       |
| **[实验报告][repo-lr]**<br>                              | <img src="https://i.loli.net/2020/03/08/txzGcKv9YSel3IX.png" width="300px" alt="lab_report" />          | <ul><li>基本实验报告模板</li><li>包括封面，BIT logo</li><li>适用于无格式要求的实验报告写作</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)][lab-report]</li></ul>                                                                                                                                |
| **[演示文档模板][repo-ps]**<br>                          | <img src="https://s2.loli.net/2022/01/02/ezCsDZnYf2LHSIk.png" width="300px" alt="presentation-slide" /> | <ul><li>演示文档模板</li><li>包括多种文字样式变化的支持</li><li>CJK 字体高亮支持</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)][presentation-slide]</li></ul>                                                                                                                                  |

### Q：我该如何使用 BIThesis？

:::tip ✅ 使用注意
请一定在阅读完毕本 BIThesis 使用 Wiki 的全部内容之后，再着手开始正式的论文写作工作。
:::

**A：两种选择。**

1. 你可以直接进入「[文档指南](/guide/intro.md)」模块进行学习参考，文档中有详细的介绍、使用方法和注意事项。
2. 你也可以直接前往「[系列视频指导](/video/intro.md)」，根据视频的介绍进行学习使用。（录制于 2020 年，与目前的模板使用方式有些许出入；仅供参考）

无论如何，BIThesis 的教程参考都几乎涵盖了全部使用 BIThesis 所需的编译环境和基础知识。请大家放心食用。

### Q：我应该选择 LaTeX 还是 Word？

网上已经有大量文章进行讨论：比如我写的[这篇](https://blog.fkynjyq.com/should-i-choose-between-bithesis-or-word)。

[undergraduate-thesis-en]: https://www.overleaf.com/read/bhnpzhxktcfx#2cf9a8
[undergraduate-thesis]: https://www.overleaf.com/read/szjwxvmbtpkk#b03b78
[reading-report]: https://www.overleaf.com/read/hmyvchvkkhdt
[presentation-slide]: https://www.overleaf.com/read/vpsqnskywftr
[paper-translation]: https://www.overleaf.com/read/kjjdwmgcbwqb#299eb2
[lab-report]: https://www.overleaf.com/read/pjqgtwvjdmhd
[graduate-thesis]: https://www.overleaf.com/read/dgrphwcybvct#9e8c8f
[repo-lr]: https://github.com/BITNP/BIThesis/tree/main/templates/lab-report
[repo-gt]: https://github.com/BITNP/BIThesis/tree/main/templates/graduate-thesis
[repo-rr]: https://github.com/BITNP/BIThesis/tree/main/templates/reading-report
[repo-pt]: https://github.com/BITNP/BIThesis/tree/main/templates/paper-translation
[repo-ps]: https://github.com/BITNP/BIThesis/tree/main/templates/presentation-slide
[repo-ut]: https://github.com/BITNP/BIThesis/tree/main/templates/undergraduate-thesis
[repo-ute]: https://github.com/BITNP/BIThesis/tree/main/templates/undergraduate-thesis-en

[^1]: [研究生学位论文模版；北京理工大学研究生院；2018-04-04](https://grd.bit.edu.cn/xwgz/xwgz2/wjxz_xwgz/b119746.htm)
[^2]: [关于开展 2023 届本科毕业设计（论文）检测、评阅、抽检及答辩相关工作的通知](https://jwb.bit.edu.cn//tzgg/44bd72939d7047bab384fdc538e8729b.htm)
