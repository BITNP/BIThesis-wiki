---
tag:
  - bithesis
  - text
---

# 如何更改模板中的字符串？（例：“毕业设计”→“课程报告”，“结论”→“结论与展望”）

<!-- https://github.com/BITNP/BIThesis/discussions/580 -->

1. 常见修改需求：用选项设置

   搜索[[texdoc:bithesis]]，找到相关设置，然后编辑`main.tex`，设置`\BITSetup{…}`，例如：

   ```latex
   \BITSetup{
     const/info/major = {专业名称},
     style/headline = {本科生课程报告},
   }
   ```

   从 v3.8.4 开始，有些局部常量支持在局部设置：

   ```latex
   \begin{conclusion}[title = 结论与展望]
     ……
   \end{conclusion}
   ```

2. 不常见修改需求：编辑`bithesis.cls`

   编辑`bithesis.cls`，替换字符串。

   不过`*.cls`中有些原始字符串比较复杂，可能搜整词搜不到，必须搜单字或用正则表达式。一些原始字符串的例子如下：

   ```latex
   % 整词，最容易搜
   {symbols} {主要符号对照表} {Nomenclature},

   % 字间可能混杂空格
   {school} {学\qquad 院} {School},

   % 还有更复杂的空格——本科模板为`\quad`，而硕博模板不空格
   {conclusion} {结\label_space: 论} {Conclusions},
   ```

   ::: tip 欢迎反馈
   如果你的修改是学院、教务部或答辩老师要求的，比较普遍，欢迎[反馈](https://github.com/BITNP/BIThesis/issues/new)。模板可以更新。
   :::
