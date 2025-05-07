---
tag:
  - par
  - package
---

# 如何让 subsubsection 显示在书签和目录中？

<!-- https://github.com/BITNP/BIThesis/discussions/581 -->

`\subsubsection{…}`是第四级标题，编号形如 0.0.0.0。正文之前的目录和 PDF 的`/Outline`默认只收录到第三级，不包含它。

如需包含，请编辑 `main.tex`，在`\documentclass[…]{bithesis}`与`\MakeTOC`之间的任意地方，加上下面这行。

```latex
\ctexset{tocdepth = subsubsection}
```

更多用法请参考[[texdoc:ctex]]。

如需进一步调整目录样式，请使用[[pkg:titletoc]]的`\titlecontents`命令。

- 用法

  ```latex
  \titlecontents{⟨section⟩}[⟨left⟩]{⟨above-code⟩}
    {⟨numbered-entry-format⟩}{⟨numberless-entry-format⟩}
    {⟨filler-page-format⟩}[⟨below-code⟩]
  ```

- [[pkg:bithesis]]示例

  - 硕博模板
  
    ```latex
    \titlecontents{subsection}[6\ccwd]{\songti \zihao{-4}}
      {\thecontentslabel\hspace{\ccwd}}{}
      {\hspace{.5em}\titlerule*{.}\contentspage}
    ```

  - 本科和其它模板

    ```latex
    \titlecontents{subsection}[3\ccwd]{\songti \zihao{-4}}
      {\thecontentslabel\hspace{\ccwd}}{}
      {\hspace{.5em}\titlerule*{.}\contentspage}
    ```

  学校没有规定目录如何收录 subsubsection，以上样式由 section、subsection 类推而来，可以再根据实际情况调整，例如减小`⟨left⟩`缩进的汉字字宽`\ccwd`倍数。
