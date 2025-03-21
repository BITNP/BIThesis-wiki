---
tag: font
---

# 生僻字无法显示（例：彧、璟）

<!--
  commit f457206b824435442b6bba0826e2d706853733ce
  https://github.com/BITNP/BIThesis/discussions/447
-->

## 使用 Windows 字体

本地编译：

- Windows 用户一般正常。如果您那儿确实有问题，请参考下文[另外定义字体](#另外定义字体)。

- 如果您使用 Linux、macOS 或 WSL，请参考[如何采用与 Word 相同的中文字体](./word-font.md)。

在线平台：

- 如果您使用 [TeXPage](https://www.texpage.com)，那么已经装了 Windows 字体，只要调用即可。

  请编辑`main.tex`，在开头如下设置，让[[pkg:ctex]]跳过操作系统检测，直接使用 Windows 字体。

  ```latex
  \documentclass[…]{bithesis}  % [!code --]
  \documentclass[…, ctex={fontset=windows}]{bithesis}  % [!code ++]
  ```

- 如果您使用 [Overleaf](https://cn.overleaf.com)，由于这个环境就是没有字体，请参考下文[另外定义字体](#另外定义字体)。

## 另外定义字体

请参考[`1_chapter1.tex`中的注释](https://github.com/BITNP/BIThesis/blob/7c37def77a9b809af1b4dcee26a04ca393df226e/templates/undergraduate-thesis/chapters/1_chapter1.tex#L67-L76)。

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
