---
tag:
  - biblatex-gb7714-2015
---

# 参考文献中的 URL 没有折行

<!-- https://github.com/BITNP/BIThesis/issues/666 -->

## 通常无需 URL，删除即可

[国标](https://lib.tsinghua.edu.cn/wj/GBT7714-2015.pdf)规定“获取和访问路径”只有电子资源必备，其余有无均可。因此，删除`*.bib`中的 URL 即可。

如果你使用 Zotero，可以[安装 Better BibTeX for Zotero 插件](https://retorque.re/zotero-better-bibtex/installation/)，然后确认 [Add URLs to BibTeX export](https://retorque.re/zotero-better-bibtex/installation/preferences/export/index.html#add-urls-to-bibtex-export)（将 URL 添加到 BibTeX 导出的）已设置为 no（否），正常已默认设置。

## 如需记录 URL，请用`url`字段

如果是电子资源，确实要记录 URL，那么请用`url`字段。可参考[电子资源的示例](./bib-entry.md#电子文献)。

```bibtex {3}
@misc{key,
  …,
  url = {http://www.greenwood.com/can_b_b#abc},
}
```

不要使用`howpublished`字段。若用`howpublished`字段，URL 不含空格或`-`字符时，断行可能出现问题，必须手动处理；此外还要专门转义特殊字符。详见[[texdoc:biblatex-gb7714-2015]]。
