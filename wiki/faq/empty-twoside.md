---
tag: bithesis
---

# 为什么我的研究生模板开头有间隔的空白页？

根据《北京理工大学研究生学位论文撰写规范》，摘要前的页面需要单面打印，之后的内容需要双面打印。因此多出的空白页可以让你免于切换单、双面打印的烦恼——统一使用双面打印即可。

或者，你可以关闭 `twoside` 选项来去除这些空白。

```latex
\documentclass[…, twoside=false]{bithesis}
```
