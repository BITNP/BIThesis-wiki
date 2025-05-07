---
tag:
  - pub
  - bithesis
  - biblatex-gb7714-2015
---

# 博士论文的学术成果清单部分，如何进一步细分？

<!-- https://github.com/BITNP/BIThesis/discussions/451 -->

例如细分SCI、EI论文，已授权、实审中专利等。

可以通过`keyword`/`keywords`区分。

[`misc/4_pub.tex`](https://github.com/BITNP/BIThesis/blob/743c8a7340f8697d75f69c843b80ef397e80fc44/templates/graduate-thesis/misc/4_pub.tex#L46):

```latex
\printbibliography[…, keyword=dummy, …]{}
\printbibliography[…, keyword=sci, …]{}
```

[`reference/pub.bib`](https://github.com/BITNP/BIThesis/blob/743c8a7340f8697d75f69c843b80ef397e80fc44/templates/graduate-thesis/reference/pub.bib#L88):

```bibtex
@article{
  …
  keywords = {dummy},
  …
}
@article{
  …
  keywords = {sci},
  …
}
```

此外`printbibliography`还支持`notkeyword=<keyword>`、`subtype=<subtype>`等筛选选项，详情请参考[[texdoc:biblatex]]。
