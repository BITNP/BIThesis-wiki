---
tag: meta
---

# 编译过慢，一次更改需要编译半分钟

<!-- https://github.com/BITNP/BIThesis/discussions/453 -->

::: tip ⌛ 受限于免费版 Overleaf？
如果只是受限于 [Overleaf 免费编译时长 10 s](https://cn.overleaf.com/blog/changes-to-free-compile-timeout#:~:text=timeout%20limit%20to-,10%20seconds,-.%20We%20made)，可以考虑换用[免费编译 30 s](https://www.texpage.com/zh/pricing/) 的国产 [TeXPage](https://www.texpage.com/)，或[其它平台](https://github.com/BITNP/BIThesis/discussions/536)，或者[本地编译](../guide/getting-started.md)。
<!-- 免费编译时长抄录于2025年10月 -->
:::

::: details 在线平台玄学使用技巧

LaTeX 分多步编译，每步之后会缓存文件。超时的那次编译即使没完成，也会留下缓存。此时若**再点一次编译**，LaTeX 会利用先前缓存跳过一些步骤，有时候就不超时了。

此玄学特别适用于增加文献后才超时的文档。

:::

## 减少编译步骤

- **全量编译 → latexmk**

  如果你觉得模板中 xelatex → biber → xelatex → xelatex 四步编译太慢，每次都全量编译，需要等待半分钟才能出结果，你可以尝试使用 latexmk 进行编译。latexmk 每次会根据你 LaTeX 文档的更改，增量编译，从而加快对原文档进行微小变化后（比如只修改一个字）的编译速度。

- **完整编译 → 部分编译**

  在论文写作初期，主要关注文字内容，可以先部分编译；待文章基本定型，需要精调时，再完整编译。
  - 若没有修改文献引用，只需 xelatex → xelatex。
  - 若还不关心超链接，只需单次 xelatex。

## 更换平台

有人反映编译速率与平台高度相关。

- **编辑环境**：VS Code → TeX studio

  > 从我自己使用来看，TeX studio 的编译速度一般都比 VS Code 快一些，如果你觉得 VS Code 的 LaTeX Workshop 编译太慢，可以考虑尝试使用 TeX studio。

- **操作系统**：Windows → Unix

  在 Linux、macOS 等 Unix 操作系统上编译 LaTeX 可能比 Windows 上快，有人报告 Windows 两分钟而 macOS 只需十秒。

  另外据说在 Windows 上安装 WSL（Windows Subsystem for Linux），在 WSL 里面编译 LaTeX 都比直接在 Windows 上编译快。

  ::: details 典型效果：xelatex 快两倍，biber 快三倍

  用空的`undergraduate-thesis`测试，结果如下。

  | 操作系统 |  单次xelatex用时  |   单次biber用时   |
  | :------: | :---------------: | :---------------: |
  | Windows  | 6.518 s ± 0.882 s | 4.421 s ± 1.219 s |
  |  Ubuntu  | 3.268 s ± 0.257 s | 1.437 s ± 0.155 s |
  | 改善倍数 |     2.0 ± 0.3     |     3.1 ± 0.9     |

  :::

## 禁用PDF压缩

每次 xelatex 编译结尾会调用 dvipdfmx 生成 PDF。关闭 dvipdfmx 的压缩PDF功能可以加快编译，具体有如下两种方法。

参考：[小技巧：加快LaTeX论文的编译 - 知乎](https://zhuanlan.zhihu.com/p/357926809)。

::: details 典型效果：生成PDF变快五倍（数秒），但文件增大六倍

用一份80页文档试了一下，0级比默认的9级快5倍。0级生成的PDF有 39 MB，9级则仅 5.5 MB。

```shell
$ hyperfine 'xdvipdfmx -E -o "main.pdf"  "main.xdv" -z 0' 'xdvipdfmx -E -o "main.pdf"  "main.xdv" -z 9'
Benchmark 1: xdvipdfmx -E -o "main.pdf"  "main.xdv" -z 0
  Time (mean ± σ):     774.7 ms ±  23.6 ms    [User: 530.6 ms, System: 205.3 ms]
  Range (min … max):   744.5 ms … 820.7 ms    10 runs

Benchmark 2: xdvipdfmx -E -o "main.pdf"  "main.xdv" -z 9
  Time (mean ± σ):      3.875 s ±  0.510 s    [User: 3.538 s, System: 0.255 s]
  Range (min … max):    3.411 s …  4.704 s    10 runs

Summary
  xdvipdfmx -E -o "main.pdf"  "main.xdv" -z 0 ran
    5.00 ± 0.68 times faster than xdvipdfmx -E -o "main.pdf"  "main.xdv" -z 9
```

不过 xdvipdfmx 只是编译中的一步，最终增量编译仍需要十几秒。

:::

### 修改 TeX

编辑`main.tex`，在最开头设置。

```latex {1-2}
% Set zlib compression level to 0
\special{dvipdfmx:config z 0}

\documentclass{article}

\begin{document}
hello world.
\end{document}
```

### 修改编译命令

也可不改`*.tex`，向`latexmkrc`加入下面这段，通过`-z 0`指定压缩级别。

```perl
# Disable compression for faster compilation
$xdvipdfmx = "xdvipdfmx -z 0 -E -o %D %O %S";
```

`latexmkrc`是 perl 代码，也可检测环境变量之类的。

```perl
# Disable compression for faster compilation
if (exists $ENV{'LATEX_NO_PDF_COMPRESSION'}) {
  $xdvipdfmx = "xdvipdfmx -z 0 -E -o %D %O %S";
}
```
