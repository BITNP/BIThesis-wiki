---
home: true
heroImage: /img/bithesis.png
heroText: null
tagline: 北京理工大学非官方本科生、研究生学位论文 LaTeX 模板与更多
actionText: 进入文档 →
actionLink: /Guide/
features:
  - title: 📝 专业的排版格式
    details: LaTeX 样式与内容分离的设计，一次撰写、处处开花
  - title: 🔣 畅快的公式插入
    details: 极具学术风范的专业公式书写，让理工同学直呼厉害
  - title: 🚀 稳健的参考文献管理
    details: 用 BibTeX 管理文献库，妈妈再也不用担心参考文献格式问题了
footer: 2022 ©BITNP. Released under the LaTeX Project Public License.
---

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
- 本项目同时也获得了 [北京理工大学教务部](http://jwc.bit.edu.cn/)、[北京理工大学计算机学院](http://cs.bit.edu.cn/) 的认可、背书与大力支持。详见：[致谢 - 官方赞助](/Guide/5-Acknowledgements/Acknowledgements)。

**我们正在对项目持续更新！目前，你完全可以使用现有的版本开始你的毕业设计开题报告的写作；不过与此同时，我们也在持续推进代码的升级和更新（主要是不影响使用的底层逻辑）。更多开发计划请访问我们的 [Roadmap](https://github.com/BITNP/BIThesis/projects)。想帮助这个项目持续前进？参见我们的[贡献者指南](./contributing-zh.md)**

### Q：BIThesis 都包含哪些模板？

**A：如下表。**

| 模板                                        | 预览                                                                                            | 特性                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------ | :---------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[本科生毕设开题报告][repo-UPR]**<br>   | <img src="https://i.loli.net/2020/02/05/HfZUaGqWSjrATbe.png" width="300px" alt="proposal" />    | <ul><li>毕业设计开题报告</li><li>毕设第一部分内容</li><li>包括封面（不可编辑）和评审表</li><li>包括参考文献和相关样式</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)](https://www.overleaf.com/read/pyhnxbytgxym)</li></ul>                                                                                               |
| **[研究生学位论文模板][repo-MT]**<br> | <img src="https://s2.loli.net/2022/03/29/MbXe7dFnDNxUuTa.png" width="300px" alt="master-thesis" />| <ul><li>**研究生学位论文模板**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GBT7714-2015 规范编排的书目</li><li>符合研究生学位论文模版的格式[^1]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)](https://www.overleaf.com/read/rpyxsmzmsgkr)</li></ul> |
| **[本科生毕业设计论文模板][repo-UT]**<br> | <img src="https://i.loli.net/2020/03/01/hISQql1W6oFgKsC.png" width="300px" alt="grad_thesis" /> | <ul><li>**毕业设计论文模板**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GBT7714-2015 规范编排的书目</li><li>符合北京理工大学本科毕业设计论文的格式[^2]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)](https://www.overleaf.com/read/jycjrjjrfgbp)</li></ul> |
| **[本科生毕业设计论文模板（全英文专业）][repo-UTE]**<br> | <img src="https://s2.loli.net/2022/09/04/kd6PDqusBciAn7Q.png" width="300px" alt="grad_thesis" /> | <ul><li>**毕业设计论文模板**</li><li>包括封面，摘要，参考文献和附录等支持</li><li>包括公式，表格和图片等支持</li><li>按 GBT7714-2015 规范编排的书目</li><li>符合北京理工大学本科毕业设计论文的格式[^2]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)](https://www.overleaf.com/read/cwknynbykvzb)</li></ul> |
| **[本科生毕业设计论文外文翻译模板][repo-PT]**<br>            | <img src="https://s2.loli.net/2022/09/04/e2jxBskFQ5Sfpqa.png" width="300px" alt="paper_trans" />  | <ul><li>外文翻译模板</li><li>由毕设模板迁移而来</li><li>符合北京理工大学本科毕业设计模板的格式[^2]要求。</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)](https://www.overleaf.com/read/ghfyrrrwxpjm)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **[实验报告][repo-LR]**<br>            | <img src="https://i.loli.net/2020/03/08/txzGcKv9YSel3IX.png" width="300px" alt="lab_report" />  | <ul><li>基本实验报告模板</li><li>包括封面，BIT logo</li><li>适用于无格式要求的实验报告写作</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)](https://www.overleaf.com/read/rjwhwrcbksrw)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **[演示文档模板][repo-PS]**<br>            | <img src="https://s2.loli.net/2022/01/02/ezCsDZnYf2LHSIk.png" width="300px" alt="presentation-slide" />  | <ul><li>演示文档模板</li><li>包括多种文字样式变化的支持</li><li>CJK 字体高亮支持</li><li>[![open in overleaf](https://img.shields.io/badge/open%20in-Overleaf-46a247?logo=overleaf&logoColor=white&labelColor=2b2b2b)](https://www.overleaf.com/read/qzwtxywhzwyg)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Q：我该如何使用 BIThesis？

:::tip ✅ 使用注意
请一定在阅读完毕本 BIThesis 使用 Wiki 的全部内容之后，再着手开始正式的论文写作工作。
:::

**A：两种选择。**

1. 你可以直接进入「[文档指南](/Guide/)」模块进行学习参考，文档中有详细的介绍、使用方法和注意事项。
2. 你也可以直接前往「[系列视频指导](/Video/)」，根据视频的介绍进行学习使用。（录制于 2020 年，与目前的模板使用方式有些许出入；仅供参考）

无论如何，BIThesis 的教程参考都几乎涵盖了全部使用 BIThesis 所需的编译环境和基础知识。请大家放心食用。

### Q：我应该选择 LaTeX 还是 Word？

网上已经有大量文章进行讨论：比如我写的[这篇](https://blog.fkynjyq.com/should-i-choose-between-bithesis-or-word)。

[repo-LR]: https://github.com/BITNP/BIThesis/tree/main/templates/lab-report
[repo-MT]: https://github.com/BITNP/BIThesis/tree/main/templates/master-thesis
[repo-PT]: https://github.com/BITNP/BIThesis/tree/main/templates/paper-translation
[repo-PS]: https://github.com/BITNP/BIThesis/tree/main/templates/presentation-slide
[repo-UPR]: https://github.com/BITNP/BIThesis/tree/main/templates/undergraduate-proposal-report
[repo-UT]: https://github.com/BITNP/BIThesis/tree/main/templates/undergraduate-thesis
[repo-UTE]: https://github.com/BITNP/BIThesis/tree/main/templates/undergraduate-thesis-en

[^2]: [关于2022届本科生毕业设计（论文）工作安排的通知；北京理工大学教务部；2021-10-12](https://jwc.bit.edu.cn/sjjx/bysj/e06605ca60ec480d80bd6497560f70f7.htm)
[^1]: [研究生学位论文模版；北京理工大学研究生院；2018-04-04](https://grd.bit.edu.cn/xwgz/xwgz2/wjxz_xwgz/b119746.htm)
