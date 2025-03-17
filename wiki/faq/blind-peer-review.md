---
tag: bithesis
lastUpdated: 2024-05-18
---

# 如何输出盲审版文章？

编辑`main.tex`，找到开头`\documentclass`，参考注释加上`blindPeerReview=true`：

```latex /blindPeerReview=true/
% 开启盲审格式 blindPeerReview=true (如：[type=bachelor,blindPeerReview=true])

\documentclass[type=bachelor]{bithesis}  % [!code --]
\documentclass[type=bachelor, blindPeerReview=true]{bithesis}  % [!code ++]
```
