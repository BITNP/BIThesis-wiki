# 📃 编辑器配置与模板编译

## 编译模板

与 Word 不同的是，LaTeX 模板需要我们用合适的工具进行编译，才能生成最终 PDF 文件。我们接下来介绍 BIThesis 中的模板在各个编辑器中的编译方法。

BIThesis 中的模板编译方式大同小异，我们都会使用 `xelatex`、`biber` 以及 `latexmk` 等工具来编译它们。编译 BIThesis 有两种方法：

- 直接使用 `latexmk` 进行编译：只需要使用一次 `latexmk` 即可编译整个模板，自动识别中文环境与参考文献编译器，增量编译（推荐使用，编译比较方便快速 🚀）
- 使用 `xelatex` 配合 `biber` 进行编译：需要使用「四步走」`xelatex -> biber -> xelatex -> xelatex` 的编译顺序编译模板，全量编译（编译一次可能花费较长时间 🐌）

这两种编译方式均可以用于编译我们的模板，大家可以综合自己的使用习惯来挑选工具。事实上，后面我们将要介绍的 LaTeX 编辑器，它们背后所使用的编译方法就是运行这里提到的两种编译工具。只是我们需要单独配置编辑器的编译方法，才能让编辑器正确的调用编译方式，编译我们的 LaTeX 文档。

在这里，我挑选了三种常见的 LaTeX 编写环境：

- 直接使用「命令行」徒手编写编译
- 使用 VS Code 配合 LaTeX Workshop 编写与编译
- 使用 TeXstudio 编写与编译

我会依次介绍在这三种环境下 LaTeX 编译器配置方法。

### 徒手编译

> 这里推荐作为其余方式遇到问题时的调试手段。

当然，你完全可以不借助任何编辑器，直接使用「命令行」编译 LaTeX 文档。

#### 使用 `latexmk` 编译

如果你使用 `latexmk` 编译模板，那么你只需要使用如下的命令即可编译主文件为 `main.tex` 的 LaTeX 项目：

```bash
# 只需要调用一次 latexmk 工具即可
latexmk
```

#### 使用 `xelatex` 编译

如果你使用 `xelatex` 编译项目，那么你需要按照下面的顺序依次调用 `xelatex` 与 `biber` 命令行工具：

![xelatex - biber - xelatex * 2](https://i.loli.net/2020/03/09/6x7KHDZtnwAamf4.png)

比如，编译主文档为 `main.tex` 的 LaTeX 项目，我们具体的命令为：

```bash
# 第一步 xelatex
xelatex -no-pdf --interaction=nonstopmode main
# 第二步 biber
biber main
# 第三步 xelatex
xelatex -no-pdf --interaction=nonstopmode main
# 第四步 xelatex
xelatex --interaction=nonstopmode main
```

### 使用 VS Code 撰写与编译 LaTeX 模板

> 首先请在 VS Code 的扩展商店中安装 LaTeX Workshop 插件。

VS Code 的设置项目可以通过快捷键 `ctrl/cmd + ,` 打开 UI 设置界面，之后点击右上角 `Open Settings (JSON)` 按钮即可打开相应的 JSON 格式配置文件，我们在这里即可定义 LaTeX 编译工具。其中：

- “编译工具”是在 `"latex-workshop.latex.tools": [ ... ]` 处进行定义，即我们在这里定义每次调用工具 `latexmk` 或 `xelatex` 时所执行的命令
- “编译工具链”是在 `"latex-workshop.latex.recipes": [ ... ]` 处进行定义，即我们在这里定义编译整个文档的工具链。对我们的模板使用 `xelatex` 的编译方式来说，就是定义 `xelatex -> biber -> xelatex -> xelatex`「四步走」的串联过程

:::warning
LaTeX Workshop 的默认配置无法对我们的项目进行编译。
所以请仔细阅读下文并替换相应配置（尽量不要在不清楚参数作用的情况下自行修改参数）。

一份整合了以下两种方式的配置文件可以[可供参考](https://gist.github.com/fky2015/76c8d2b358264f0cfaf80b8dcf68b3f4)。
:::

#### 在 VS Code 中使用 `latexmk` 编译

:::tip
更推荐使用此种方法。因为 `latexmk` 会自动检测编译时需要使用 LaTeX 的次数。（比如，当你尝试重复编译一个文档时，`latexmk` 会跳过所有已完成的步骤。）
:::

这种方法我们只需要使用 `latexmk` 这一个命令行工具。我们在 VS Code 的设置中添加如下的内容定义这一工具：

```json
"latex-workshop.latex.tools": [
  {
    "name": "latexmk",
    "command": "latexmk",
    "args": [
      "-synctex=1",
      "-interaction=nonstopmode",
      "-file-line-error",
      "-xelatex",
      "-outdir=%OUTDIR%",
      "-cd",
      "%DOC%"
    ],
    "env": {}
  },
]
```

之后我们再填入下面的内容定义整个工具链（只有一个 `latexmk`）：

```json
"latex-workshop.latex.recipes": [
  {
    "name": "latexmk",
    "tools": [
      "latexmk"
    ]
  },
]
```

#### 在 VS Code 中使用 `xelatex` 编译

这种方法需要调用的工具有：`xelatex` 和 `biber`。我们在 VS Code 的设置中加入如下内容定义这两个工具：

```json
"latex-workshop.latex.tools": [
  {
    "name": "xelatex",
    "command": "xelatex",
    "args": [
      "-synctex=1",
      "-interaction=nonstopmode",
      "-file-line-error",
      "-pdf",
      "-outdir=%OUTDIR%",
      "-cd",
      "%DOC%"
    ],
    "env": {}
  },
  {
    "name": "biber",
    "command": "biber",
    "args": [
        "%DOCFILE%"
    ],
    "env": {}
  }
]
```

用这一方法编译整个文档的工具链串联方法是 `xelatex -> biber -> xelatex -> xelatex` 四步走。我们在 VS Code 的设置中加入如下内容定义这个工具链：

```json
"latex-workshop.latex.recipes": [
  {
    "name": "xelatex -> biber -> xelatex * 2",
    "tools": [
      "xelatex",
      "biber",
      "xelatex",
      "xelatex"
    ]
  }
]
```

#### 调用相应的编译 recipe

最后，我们使用快捷键 `ctrl/cmd + shift + P` 打开命令执行栏，并搜索「LaTeX Workshop: Build with recipe」，并选择你所用的 recipe（即上面配置的工具链），即可编译整个 LaTeX 项目。不论用上面介绍的哪种方法，都可以正确的编译 BIThesis 的模板。

![select a recipe](https://i.loli.net/2020/03/09/2c1uEYlUFjRxJ9w.png)

### 使用 TeXstudio 撰写与编译 LaTeX 模板

TeXstudio 的编译工具大部分已经为我们配置完毕，我们只需要在 TeXstudio 的设置中定义编译所用的编译器即可。在 TeXstudio 中点击「选项 » 设置 TeXstudio」，在打开的窗口中选择「构建」，并在元命令里面将「默认编译器」设置为 `xelatex`，将默认文献工具设置为 `biber` 即可。

:::warning
尽管我们提供了 `latexmk` 编译支持，但是在 TeXstudio 中如果将「默认编译器」设置为 `latexmk`，
会出现无法编译的问题。因此建议使用 `xelatex` 选项。
:::

![texstudio selecting compilers](https://i.loli.net/2020/03/09/qYbDPjw6moLUIS3.png)

你可以使用快捷键 `F5` 一键编译与预览 LaTeX 项目。

## 继续阅读相应的模板使用指南

各个模板的使用指南分别位于相应模板的 Releases 文件夹内部。

你可以在[模板使用手册](http://mirrors.ctan.org/macros/unicodetex/latex/bithesis/bithesis.pdf)中找到如何配置参数。

也可以在示例代码的注释中找到相应的说明。

如果你觉得有任何内容缺失，欢迎到我们的[代码仓库提出建议](https://github.com/BITNP/BIThesis/issues)。
