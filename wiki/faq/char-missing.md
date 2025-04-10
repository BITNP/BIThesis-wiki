---
tag: font
---

# 生僻字无法显示（例：彧、璟）

<!--
  commit f457206b824435442b6bba0826e2d706853733ce
  https://github.com/BITNP/BIThesis/discussions/447
-->

- **Windows 平台**预装了中易字库，字符较全，一般正常。

  如果您那儿确实有问题，请参考下文[另外定义字体](#另外定义字体)。

- **其它平台**默认用 Fandol 等字库，可能缺字。请优先参考[如何换用中易字库](./word-font.md)。

## 另外定义字体

<!-- https://github.com/BITNP/BIThesis/blob/7c37def77a9b809af1b4dcee26a04ca393df226e/templates/undergraduate-thesis/chapters/1_chapter1.tex#L67-L76 -->

1. 定义一个包含生僻字的字体`custom-font`，注意要确保你的系统存在[该字体](https://mirrors.cernet.edu.cn/font/GoogleFonts)。

   ```latex
   \setCJKfamilyfont{custom-font}{Noto Serif CJK SC}
   ```

2. 使用自己定义的字体

   ```latex
   荀{\CJKfamily{custom-font} 彧}不是苟或。
   ```

   `\CJKfamily`会切换字体，影响之后所有内容。故另套`{}`来分组，限制其作用范围。

更多解释请参考[[texdoc:lshort-zh-cn]]或[[texdoc:ctex]]。

::: warning ↕️​​ 字可能上下错位
有个别同学反映，自定义字体的字会上下错位。这是因为不同字体的基线没对齐。可以考虑用`\raisebox{<竖直位移>}{<内容>}`等方法微调，或者忽略。
:::

## 备用办法

万一您非常“幸运”，问题到这里仍未解决，可以再试试以下办法，或者咨询身边朋友。

- 关闭`\BITSetup`里`style`中的选项`windowsSimSunFakeBold = true`。（删除或修改为`false`）

- 直接设置[[pkg:ctex]]：

  ```latex
  \PassOptionsToClass{fontset=windows}{ctexbook}  % [!code ++]
  \documentclass[…]{bithesis}
  ```

- 在`\BITSetup{…}`之后再次设置字体：

  ```latex
  \setCJKmainfont{SimSun}[ItalicFont=KaiTi, AutoFakeBold]
  ```
