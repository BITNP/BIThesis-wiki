---
tag:
  - pub
  - bithesis
  - biblatex-gb7714-2015
---

# 怎么调整「攻读学位期间发表论文与研究成果清单」的顺序

> （十二）攻读学位期间发表的论文与研究成果清单
>
> 应列出攻读学位期间发表的与学位论文内容相关的学术论文和研究成果，**按发表的时间顺序列出**，研究成果可以是在学期间参加的研究项目、获得专利、获奖情况等。

学校要求「攻读学位期间发表论文与研究成果清单」中的论文按发表时间排序，但实际可能有别的需求，想自定义排序。

`\BITSetup{…}`的`publications/sorting`选项用于控制是否按照发表时间排序。您大致有以下三种选择。

- [完全按发表时间排序](#true)——保留默认的`true`即可。
- [完全手动指定顺序](#false)——修改为`false`。
- [在发表时间顺序上微调，把个别的提到最前](#sortkey)——保留默认的`true`，同时使用`sortkey`字段。

## 完全按发表时间排序（默认）{#true}

保留默认的`true`即可。（严格来说，这是按年份、姓名、标题排序。）

## 完全手动指定顺序 {#false}

编辑`main.tex`，在`\BITSetup{…}`中将`publications/sorting`设置为`false`：

```latex
\BITSetup{
  …,
  publications/sorting = {false},
}
```

这样会按照`\addpubs`或`\addpub`引用顺序来排。

## 在发表时间顺序上微调，把个别的提到最前 {#sortkey}

<!-- https://github.com/BITNP/BIThesis/discussions/407#discussioncomment-8630685 -->

[保留默认的`true`](#true)，同时在`reference/pub.bib`文件中给个别项加上`sortkey`字段：

```bibtex{6}
@article{myCiteKey2,
  title = {交联型与线形水性聚氨酯的形状记忆性能比较},
  author = {李杰 and 张三 and 罗运军},
  author+an = {2:myself="\Author[][][共同二作]"},
  date = {2007},
  sortkey = {002},
}
```

例如，上面这样可保证它在`sortkey = {001}`那项后面，且在没标`sortkey`的其它项前面。

详细解释可参考[[texdoc:biblatex-gb7714-2015]]（中文）或[[texdoc:biblatex]]（英文）。

::: details 更全面的例子

如果在`reference/pub.bib`中定义以下三项并引用（其它项不指定`sortkey`），那么可以保证`wandering-earth`、`wandering-earth-2`、`three-body`依次出现在清单开头，且其它项在后面按发表时间排序。

```bibtex
@misc{wandering-earth, …, sortkey = {1}, …}
@misc{wandering-earth-2, …, sortkey = {2}, …}
@misc{three-body, …, sortkey = {13}, …}
```

:::

::: info ♻ 有错误？清空缓存重试
注意，如果编译后编号产生错误，请使用 `latexmk -c` 或手动清空缓存后再编译，参考[如何清除缓存](./clean.md)。
:::
