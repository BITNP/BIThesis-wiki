---
tag: biblatex-gb7714-2015
---

# 引用会议的小技巧（魔改国标）

<!-- https://github.com/BITNP/BIThesis/discussions/477 -->

以下技巧用于满足一些个性化的引文格式要求。

## 仅去除`//`

如果仅需去除`//`双斜线，可以在下面新增选项 `gbpunctin=false`：

```latex {6}
\usepackage[
  backend=biber,
  style=gb7714-2015,
  gbalign=gb7714-2015,
  gbnamefmt=lowercase,
  gbpunctin=false,
  gbpub=false,
  doi=false,
  url=false,
  eprint=false,
  isbn=false,
]{biblatex}
```

效果如下：

```bibtex
@inproceedings{dwarkadasCashmereVLMRemoteMemory1999,
  title = {Cashmere-{{VLM}}: {{Remote}} Memory Paging for Software Distributed Shared Memory},
  shorttitle = {Cashmere-{{VLM}}},
  booktitle = {Proceedings 13th {{International Parallel Processing Symposium}} and 10th {{Symposium}} on {{Parallel}} and {{Distributed Processing}}. {{IPPS}}/{{SPDP}} 1999},
  author = {Dwarkadas, S. and Hardavellas, N. and Kontothanassis, L. and Nikhil, R. and Stets, R.},
  year = {1999},
  month = apr,
  pages = {153--159},
  doi = {10.1109/IPPS.1999.760451},
}
```

![image](https://github.com/BITNP/BIThesis/assets/28673129/fda92b9d-eb61-4d60-9fe9-732b022f58be)

## 去除`//`，同时移动`[C]`

国标要求的引用会议论文格式为

- 贾东琴,柯平.面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会.中国图书馆学会年会论文集:2011年卷. 北京:国家图书馆出版社,2011:45-52.

需要满足个性化的引文格式——“作者. 文献名. 会议名[C] 地点. 举办者. 其他信息”，即

- 贾东琴,柯平.面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会年会论文集:2011年卷.[C]北京:国家图书馆出版社,2011:45-52.

格式的，可以

- 将`@inproceedings`改为`@proceedings`，
- 然后将`booktitle`的内容挪入`title`标签内，并将`booktitle`删除，即修改题名为`面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会年会论文集:2011年卷`。

## 其它参考

还有其他需求可以参考：

- 浙江大学：[去掉参考文献中的双斜线 · Issue #117 · TheNetAdmin/zjuthesis](https://github.com/TheNetAdmin/zjuthesis/issues/117)
- 上海交通大学：[bibtex中inproceedings条目产生的“//”和\[s.n.\],\[S.l\]的问题 · Issue #337 · sjtug/SJTUThesis](https://github.com/sjtug/SJTUThesis/issues/337)
