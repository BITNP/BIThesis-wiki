# 👩‍🏫 LaTeX 学习与使用资源

## 基础

如果你之前没有接触过 LaTeX，请先阅读 Overleaf 的[「30 分钟学习 LaTeX」](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)，有大致印象。

之后若需特定功能，可再前往 [Overleaf 官方文档](https://www.overleaf.com/learn)专门阅读。下面这些你可能会首先关注。

- 结构与格式
  - [设定章节（Sections and chapters）](https://www.overleaf.com/learn/latex/Sections_and_chapters)
  - [段落格式（Paragraphs and new lines）](https://www.overleaf.com/learn/latex/Paragraphs_and_new_lines)
  - [粗体、斜体与下划线（Bold, italics and underlining）](https://www.overleaf.com/learn/latex/Bold,_italics_and_underlining)
  - [有序列表、无序列表（Lists）](https://www.overleaf.com/learn/latex/Lists)

- 插入
  - [图片（Inserting Images）](https://www.overleaf.com/learn/latex/Inserting_Images)

  - [表格（Tables）](https://www.overleaf.com/learn/latex/Tables)

    另外可用 [TablesGenerator.com](https://www.tablesgenerator.com/)、[LaTeX-Tables.com](https://www.latex-tables.com/) 等生成。

  - [数学公式（Mathematical expressions）](https://www.overleaf.com/learn/latex/Mathematical_expressions)

    此外可用 [Detexify](https://detexify.kirelabs.org/classify.html) 识别“≳”这样的特殊符号。

  - [代码及高亮（Code Highlighting with minted）](https://www.overleaf.com/learn/latex/Code_Highlighting_with_minted)

  - [算法伪代码描述（Algorithms）](https://www.overleaf.com/learn/latex/algorithms)

    其中`algorithm`+X和`algorithm2e`两种方式都适配了，不过为了按学校要求分章编号，引入`algorithm`宏包时要加上选项`chapter`，引入`algorithm2e`则要加`algochapter`。更完整的示例请在手册搜索“[如何排版算法](../faq/algorithm.md)”。

- [使用 BibLaTeX 管理参考文献（Bibliography management in LaTeX）](https://www.overleaf.com/learn/latex/Bibliography_management_in_LaTeX)

## 进阶

如欲进一步了解，可尝试搜索或阅读以下资料。

1. 手册《[**一份（不太）简短的 LaTeX2e 介绍**——或 111 分钟了解 LaTeX2e](https://mirrors.ctan.org/info/lshort/chinese/lshort-zh-cn.pdf '通常你也可在终端运行“texdoc lshort-zh-cn”获取')》
   - [[texdoc]]中文版，考虑了中文的特殊之处。

   - 有许多小技巧。

     例如写作中，可能有尚待斟酌的常用术语，§8.1.1 提示您可定义新命令。

     ```latex
     % 在 main.tex 开头定义新命令
     \newcommand*{\game}{元神}
     ```

     ```latex
     % 在正文中使用
     \game 是一款由哈米游开发并发行的开放世界玩法的冒险类角色扮演游戏。
     ```

   - 附有常见 LaTeX 错误及解决方案，还介绍了如何查找帮助文档。

     例如“Undefined control sequences”这一错误：

     > 使用了未定义的命令。拼写错误是原因之一，如把`\LaTeX`写作`\Latex`这样。也有可能是没有调用某个宏包，但用了该宏包定义的命令。

   - 持续维护，摒弃了“历史的垃圾桶”，且覆盖 LaTeX 的大多数应用。

2. 问答平台 [TeX - LaTeX **Stack Exchange**](https://tex.stackexchange.com/)

3. 网站 [**The TeX FAQ**](https://texfaq.org)

   解答“[怎样打印变量的内容？](https://texfaq.org/FAQ-printvar)”等常见问题。

或者深入特定方面：

- 幻灯片《[漫谈 LaTeX **排版常见概念误区**——别把 LaTeX 当 Word 用！](https://static.latexstudio.net/wp-content/uploads/2018/03/LianTze-presentation-0320-forReading.pdf)》
- 博客《[在 LaTeX 中使用 OpenType 字体](https://stone-zeng.site/2019-07-06-use-opentype-fonts-ii)》<!-- https://github.com/stone-zeng/stone-zeng.site/blob/10502ea5a8088711ceb90f5a1c8ce8cf8c7fb77c/src/posts/2019-07-06-use-opentype-fonts-ii/index.md# -->
- 文档 [_Tips for Writing a **Research Paper** using LaTeX_](https://github.com/guanyingc/latex_paper_writing_tips)
