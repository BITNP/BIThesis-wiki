---
title: 编译过慢，一次更改需要编译半分钟
tag: misc
lastUpdated: 2020-04-10 17:30:23 +08:00
# commit df2c1725fe8a02ab58e6bc0dd46ba0f635d94f01
---

如果你觉得模板中 `xelatex -> biber -> xelatex -> xelatex` 四步编译太慢，每次都全量编译，需要等待半分钟才能出结果，你可以尝试使用 `latexmk` 进行编译。`latexmk` 每次会根据你 LaTeX 文档的更改，增量编译，从而加快对原文档进行微小变化后（比如只修改一个字）的编译速度。

另外，从我自己使用来看，TeX studio 的编译速度一般都比 VS Code 快一些，如果你觉得 VS Code 的 LaTeX Workshop 编译太慢，可以考虑尝试使用 TeX studio。
