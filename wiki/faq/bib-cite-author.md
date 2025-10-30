---
tag:
  - biblatex-gb7714-2015
---

# citeauthor 引用作者时，如何始终用“等”而非“et al.”？

`\citeauthor{…}`命令可带作者引用。默认情况下，它会给中文多人作者加“等”，给非中文多人作者加“et al.”，并且二者前均有空格，如下例所示。

```latex
\citeauthor{吴伟仁2017}\cite{吴伟仁2017}和\citeauthor{su2025}\cite{su2025}都研究“嫦娥”任务。
```

> 吴伟仁 等<sup>[1]</sup>和 Su et al.<sup>[2]</sup>都涉及“嫦娥”任务。

若想把“et al.”也改成“等”，请以下两方案之一操作。（两方案都只影响正文引用，不会影响文末著录格式。）

::: details 国标基本没有规定

对于我们一般采用的顺序编码制，国标没有描述如何引用作者，示例中也无相关情况。

对于著者-出版年制，国标 §10.2.2 规定：

> 正文中引用多著者文献时，对欧美著者只需标注第一个著者的姓，其后附“et al.”；对于中国著者应标注第一著者的姓名，其后附“等”字。姓氏与“et al.”“等”之间留适当空隙。

[[pkg:biblatex-gb7714-2015]]的默认样式可能是由此外推而来。

:::

## 若想始终用“等”并保留空格

请编辑`main.tex`，在导入[[pkg:biblatex]]时设置`gbcitelocal=chinese`。

```latex {5}
\usepackage[
  backend=biber,
  style=gb7714-2015,
  gbalign=gb7714-2015,
  gbcitelocal=chinese,
  …
]{biblatex}
```

> 吴伟仁 等<sup>[1]</sup>和 Su 等<sup>[2]</sup>都涉及“嫦娥”任务。

`gbcitelocal`默认为`gb7714`，会区分中英文；现改为`chinese`，会全部按中文。

## 若想始终用“等”并去除空格

请编辑`main.tex`，在导言区用以下代码修改本地化字符串。

```latex
\DefineBibliographyStrings{english}{
  andincite         = {和},
  andincitecn       = {和},
  andothersincitecn = {\unspace 等},
  andothersincite   = {\unspace 等},
}
```

> 吴伟仁等<sup>[1]</sup>和 Su 等<sup>[2]</sup>都涉及“嫦娥”任务。

更新信息请参考[[texdoc:biblatex-gb7714-2015]]。
