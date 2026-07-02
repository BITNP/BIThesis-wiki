---
tag:
  - bithesis
  - meta
---

<!-- 若更改本页任何标题，请同步更新`<BITSetupExample>`中的`on_this_page` -->

# 如何用`\BITSetup`设置选项？

## 代码示例

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import BITSetupExample from '../.vitepress/theme/BITSetupExample.vue'

const generated = useTemplateRef('generated')
</script>

<BITSetupExample ref="generated" />

<!-- 代码块里只有静态部分支持语法高亮 -->

```latex-vue
\documentclass[type=…]{bithesis}

\BITSetup{
{{ generated?.code }}
}
```

注意，以上只展示`\BITSetup`用法，不会验证选项是否有效；具体请参考[[texdoc:bithesis]]。

## 用法说明

> [!TIP]
> 以下删改自[[texdoc:bithesis]]“参数设置”一节。

BIThesis 模板提供了一系列选项，您（文章作者）可用`\BITSetup`命令设置它们。该命令的参数是 LaTeX3 风格的多层键值列表。

具体而言：

- `\BITSetup`的参数是用 ASCII 逗号`,`分隔的选项**列表**
  - 列表中间允许换行，也可用`%`添加注释；不过不能出现空行。
  - 最后一项之后的`,`可有可无。

- 列表中**每项**的形式基本是`⟨key⟩ = { ⟨value⟩ }`
  - `⟨key⟩`、`=`、大括号左右的空格不影响设置，可以任意缩进。
  - 若`⟨value⟩`不含`,`，也可省略大括号写为`⟨key⟩ = ⟨value⟩`。

- 大部分选项分**多层**，此时既可在`⟨value⟩`内嵌套，也可压平`⟨key⟩`

  例如设置`cover/date`、`info/author`和`info/title`，有以下两种等价方式。

  ```latex
  \BITSetup{
    cover = {
      date = 2340年1月17日,
    },
    info = {
      author = {RO Laren, Ensign},
      title = 标题,
    },
  }
  ```

  ```latex
  \BITSetup{
    cover / date = 2340年1月17日,
    info / author = {RO Laren, Ensign},
    info / title = 标题,
  }
  ```

- `\BITSetup`通常只在**导言区**使用，全局生效

  对于某些特殊需求，`\BITSetup`也可在正文使用，局部生效，例如[用`misc/tabularRowSeparation`调整表格行高](./array-stretch.md)。

  （对于一般文档，导言区是指`main.tex`中从`\documentclass`到`\begin{document}`的部分。）
