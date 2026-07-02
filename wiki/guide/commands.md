# 🍖常用命令

如果您使用终端，可用以下命令补充图形界面缺失的功能。

## 清除缓存 {#latexmk-c}

编译 LaTeX 时除了生成 PDF，还可能生成`*.aux`等辅助文件和日志。

偶尔先前编译有错，缓存了错误的辅助文件，会导致下一次编译异常。这时可清除缓存从最干净的状态重试：

```shell
$ latexmk -c
…
Latexmk: Doing main (small) clean up for 'main.tex'
…
```

此命令也可用于释放磁盘空间或保持文件整洁。

更多细节请查阅[[texdoc:latexmk]]或 [tldr 太长不看版](https://tldr.inbrowser.app/pages/common/latexmk)。

## 统计字数

统计全文：

```shell
$ texcount main.tex -merge -chinese -stat -total
…
Han: 2224 👈总汉字数
…
All words: 2382 👈总词数（西文按词计，中文每个汉字计一词）
```

分章统计：

```shell
$ texcount main.tex -merge -sub=chapter
…
Subcounts:
  text+headers+captions (#headers/#floats/#inlines/#displayed)
  391+1+0 (1/0/1/0) _top_
                    👆第一章以前的部分，例如摘要
  730+68+27 (7/2/0/0) Chapter: 绪论
  👆此章正文有730字，标题有68字，图注、表注有27字
  553+6+0 (1/3/21/2) Chapter: 具体研究内容
           👆此章包括1个标题、3个浮动体、21个行内公式、2个行间公式
  …
```

:::tip 🤨 乱码怎么办
请将终端编码设为 UTF-8。对于 PowerShell，请执行：

```powershell
[console]::InputEncoding = [console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
```

:::

更多细节请查阅[[texdoc:TeXcount]]或 [tldr 太长不看版](https://tldr.inbrowser.app/pages/common/texcount)。

## 查找帮助文档 {#texdoc}

用 [texdoc](https://tug.org/texdoc/) 可按关键词查找、打开各种帮助文档。

- `texdoc biblatex-gb7714-2015`

  👆打开指定宏包的文档，这里会弹出《[[texdoc:biblatex-gb7714-2015|符合 GB/T 7714-2015 标准的 biblatex 参考文献样式]]》

- `texdoc texcount`

  👆打开指定工具的文档

- `texdoc lshort-zh-cn`

  👆打开指定参考资料，这里会弹出《[[texdoc:lshort-zh-cn|一份（不太）简短的 LaTeX2e 介绍]]》

## 补充安装缺失的包 {#tlmgr}

可使用 tlmgr（TeX Live package manager）。

```shell
# 安装某个包
$ tlmgr install minted
…

# 升级所有包
$ tlmgr update --all
…

# 按正则表达式搜索文件，确定某个文件由哪个包提供
# 其中 --global 代表搜索整个发行版，无论是否安装过
$ tlmgr search --global --file 'bit.+\.cls'
tlmgr.pl: package repository https://mirrors.cernet.edu.cn/CTAN/systems/texlive/tlnet (verified)
bithesis:
        texmf-dist/tex/latex/bithesis/bithesis.cls
        texmf-dist/tex/latex/bithesis/bitbeamer.cls
        texmf-dist/tex/latex/bithesis/bitreport.cls
fbithesis:
        texmf-dist/tex/latex/fbithesis/fbithesis.cls

# 同上，但要求完全匹配文件名开头
$ tlmgr search --global --file '/times.sty'
tlmgr.pl: package repository https://mirrors.cernet.edu.cn/CTAN/systems/texlive/tlnet (verified)
psnfss:
        texmf-dist/tex/latex/psnfss/times.sty
```

更多细节请查阅[[texdoc:tlmgr]]或 [tldr 太长不看版](https://tldr.inbrowser.app/pages/common/tlmgr)。
