---
tag:
  - pub
  - bithesis
  - biblatex-gb7714-2015
---

# 如何修改成果清单中的作者为“第一发明人”等（如奖项、专利、书籍、项目）

<!-- https://github.com/BITNP/BIThesis/discussions/547 -->

在盲审模式中，默认模板只会标注为“第一作者”，但是实际上专利叫“第一发明人”，奖项叫“第一完成人”，翻译的书籍叫“第一译者”。怎样才能在盲审模式正确显示？

可以自定义`\Author`。在`pub.bib`中修改：

```bibtex{4}
@article{key,
  title = {…},
  author = {我 and …},
  author+an = {1:myself="\Author[][][第一发明人]"},
}
```

具体解释请参考[`pub.bib`中的注释](https://github.com/BITNP/BIThesis/blob/424e5b851df44d42cbf26900874480b5de58484a/templates/graduate-thesis/reference/pub.bib#L32-L33)，或者[[texdoc:bithesis]]。

```latex
% 再比如，若论文作者为「李四、张三、王五、赵六」（你是共同二作），则应该写成：
% `author+an = {2:myself="\Author[][][共同二作]"}`
```

![bithesis.pdf](https://github.com/user-attachments/assets/c81bc83e-dd91-45de-b575-2f7f0735e29c)
