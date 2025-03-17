---
tag: biblatex-gb7714-2015
---

# biber 报错`syntax error: found "茂录聦"`

<!-- https://github.com/BITNP/BIThesis/discussions/455 -->

```log
syntax error: found "茂录聦", expected end of entry ("}" or ")")
```

请检查`*.bib`，应该是有 ASCII 逗号`,`误写成全宽逗号`，`了。

以下是报错如此迷惑的原因。

## 为何会出现`茂录聦`或`ï¼\x8c`？

### 显示日志

`biber main.bcf`会把日志存到`main.blg`里，这个文件中存的字节是`b'\xc3\xaf\xc2\xbc\xc2\x8c'`，它按 GB 18030 解码是`'茂录聦'`，按UTF-8解码是`'ï¼\x8c'`。因此，有些环境下报错说`found "茂录聦"`，有些则说`found "ï¼\x8c"`。

### 生成日志

那么为什么会有`b'\xc3\xaf\xc2\xbc\xc2\x8c'`呢？将全宽逗号`'，'`按UTF-8编码，然后将结果作为Unicode码位再按UTF-8编码，两次编码后即为这串字节。

```python
>>> from unicodedata import lookup, name

>>> '茂录聦'
'茂录聦'

>>> _.encode('gb18030')
b'\xc3\xaf\xc2\xbc\xc2\x8c'

>>> bytes(map(ord, _.decode('utf8')))
b'\xef\xbc\x8c'

>>> _.decode('utf8')
'，'

>>> name(_)
'FULLWIDTH COMMA'

>> '，'
'，'

>> _.encode('utf8')
b'\xef\xbc\x8c'

>> ''.join(map(chr, _))
'ï¼\x8c'
```

### 验证

往`*.bib`里写各种乱七八糟东西，发现报错都符合预期。

```bibtex
@article{Jiang2005Size,
  title = {形状记忆聚合物研究现状与发展},
  author = {姜敏 and 彭少贤 and 郦华兴},
  journal = {现代塑料加工应用},
  volume = {17},
  number = {2},
  pages = {53-56},
  year = {3001}，，©孔乙己äüïabc，，
}
```
