---
title: 无法使用代码高亮 minted 宏包
tag: package
---

在论文中不可避免的要加入「代码块」。一般我们代码高亮使用的都是[[pkg:minted]]，如果你发现插入 `minted` 环境后，编译失败，你可以尝试如下的方法解决：

## 删除 `minted` 宏包的缓存文件夹

如果你出现了类似如下的编译报错：

```txt
! Undefined control sequence.
```

则可能是由于 `minted` 缓存导致。一般如果你编译过带有 `minted` 环境的 LaTeX 项目，根目录都会有一个名称为 `_minted` 或 `_minted-{jobname}` 的缓存文件夹。你可以尝试将这一文件夹删除，重新编译，排查问题。

![minted command cache folder](https://i.loli.net/2020/03/06/D4PQKoxmtgObBN2.png)

## 排查是否正确安装 Python 与 `pygments` 包

:::tip 仅限 minted v2
该问题只可能在 minted v2 上出现。如遇到此问题，也可考虑升级到 v3。
:::

如果你出现了类似如下的编译报错：

```txt
"Package minted Error: You must have `pygmentize' installed to use this package."
```

那么是由于你的 Python 环境中缺少必要的库。`minted` 背后事实上用的是 Python 的 `pygments` 库进行代码渲染和高亮，因此你也必须安装 Python 环境和 `pygments` 库。你可以使用 Python 的官方包管理工具 pip 安装 `pygments`：

```bash
pip install pygments
```

之后，你需要确认可执行文件 `pygmentize.exe` 位于系统路径上。用如下的方法进行验证，如果出现类似输出，说明你的安装应该没有问题：

```bash
pygmentize -V
```

![Output of command pygmentize](https://i.loli.net/2020/03/07/7rbUosdGfjhpaNC.png)

## 添加额外的编译参数

:::tip 仅限 minted v2
该问题只可能在 minted v2 上出现。如遇到此问题，也可考虑升级到 v3。
:::

如果你出现了类似如下的编译报错：

```txt
Package minted Error: You must invoke LaTeX with the -shell-escape flag.
```

这是由于你的编译命令中没有添加 `-shell-escape` 参数，`minted` 宏包需要这一参数才能正确编译 LaTeX 文档。以 VS Code 的 LaTeX Workshop 为例，如果你使用 `xelatex` 编译，那么你需要将 `xelatex` 的编译参数修改如下：

```diff
{
    "name": "xelatex",
    "command": "xelatex",
    "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-pdf",
+       "-shell-escape",
        "-outdir=%OUTDIR%",
        "-cd",
        "%DOC%"
    ],
    "env": {}
}
```

如果你使用 `latexmk` 编译，那么你需要将 `latexmk` 的编译参数修改如下：

```diff
{
    "name": "latexmk",
    "command": "latexmk",
    "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-xelatex",
+       "-shell-escape",
        "-outdir=%OUTDIR%",
        "-cd",
        "%DOC%"
    ],
    "env": {}
},
```
