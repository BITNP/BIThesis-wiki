---
tag:
  - meta
  - biblatex-gb7714-2015
---

# 参考文献空白，biber 报错`Can't call method "binmode"`

## 现象

若出现以下所有现象，才可能是此问题。

- 能生成 PDF，但参考文献

  - 正文引用处显示 key 而非编号
  - 文末著录列表完全空白

- biber 报错：

  ```log
  Can't call method "binmode" on an undefined value at C:\Users\中文名\AppData\Local\Temp\par-b2dcbae8eeda\cache-8f3580e5758dcf9e518781a55b95cc7413268871\inc\lib/Biber/Utils.pm line 114.
  ```

- 即使注释掉`main.tex`中所有章节和`*.bib`大部分项目，只保留单个`\cite`，也仍如此

## 应对

**原因**：Windows 用户名有 ASCII 以外的汉字，导致 biber 无法读取缓存。

**背景原因**：biber 是个 perl 程序，perl 缓存在`$env:TEMP`里，`$env:TEMP`默认在用户目录下。

**解决方法**：

1. 建议修改用户名，或者换其它设备或在线平台。

2. 如果做不到，可以考虑每次使用时在 PowerShell 里设置 `$env:TEMP`到一个纯 ASCII 路径，然后从 shell 里启动 TeXstudio 等编辑器或手动用 latexmk 编译。

   ::: warning 谨慎操作
   如果您头一次听说 shell，建议寻求有经验者帮助。
   :::
