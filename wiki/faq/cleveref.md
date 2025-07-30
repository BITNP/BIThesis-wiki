---
tag:
  - package
  - text
  - bithesis
---

# 如何使用 cleveref 交叉引用？

<!-- https://github.com/BITNP/BIThesis/issues/593 -->

1. 在导言区**导入[[pkg:cleveref]]**

   ```latex
   \usepackage{cleveref}
   ```

   一般要在其之前导入[[pkg:cleveref]]；不过对于[[pkg:bithesis]]，模板已在最开始`\documentclass`处自动导入，无需重复。

2. **用`\label{…}`标记**要引用的内容

   <!-- 复制 lshort-zh-cn -->

   - 章节标题：在章节标题命令`\section`等之后紧接着使用。
   - 图表标题：在图表标题命令`\caption`之后紧接着使用。
   - 行间公式：单行公式在公式内任意位置使用；多行公式在每一行公式的任意位置使用。
   - 有序列表：在`enumerate`环境的每个`\item`命令之后、下一个`\item`命令之前任意位置使用。
   - 定理环境：在定理环境内部任意位置使用。

   ```latex
   \section{章节标题} \label{sec:intro}

   \begin{figure}[h]
     ……
     \caption{图表标题} \label{fig:example}
   \end{figure}
   ```

3. **用`\cref{…}`引用**

   ```latex
   由\cref{sec:intro}的\cref{fig:param}、\cref{fig:result} 可验证\cref{eq:total}。
   ```

   以上代码的结果类似`由第 1.2 节的图 3-4、图 3-5 可验证式（6-7）。`，其中编号会根据前后顺序、模板类型（本科或硕博）自动设置。

   ::: tip 🔍 数字与汉字间的空白
   [[pkg:ctex]]会自动在数字与汉字间加些许空白，但`图 3-5 可验证`的`5 可`位于宏的边界处，不会自动加。如果您介意这一点，建议手动空一格。
   :::

## 在同一处引用多项

```latex
\cref{eq:1,eq:2}  % 式（1）和（2）
\cref{eq:1,eq:3,eq:4}  % 式（1）、（3）和（4）

% 多个引用恰好连续时，会自动缩写
\cref{eq:1,eq:2,eq:3}  % 式（1）至（3）
```

## 更改引用格式 {#customize}

可以参考[[texdoc:cleveref]]更改引用格式，下列几例。

在英文模式下更换用词：

```latex
\usepackage{cleveref}
\crefname{equation}{formula}{formulae}
```

完全重置格式，将 equation 全宽括号换成 ASCII 括号：

```latex
\usepackage{cleveref}
\crefformat{equation}{式~#2(#1)#3}
\crefrangeformat{equation}{式~#3(#1)#4 至~#5(#2)#6}
\crefmultiformat{equation}{式~#2(#1)#3}{和~#2(#1)#3}{、#2(#1)#3}{和~#2(#1)#3}
```
