# 🔁 将 LaTeX 格式的文档转换为 Word

:::warning ❗ 请注意：很难完全自动转换
由于 Word 文档的封闭性，LaTeX 几乎无法保留完整格式地转到 Word。因此我们强烈建议在任何场合提交 PDF 或 LaTeX 相关代码，而不是 Word。
:::

如果你决定使用 LaTeX 进行论文撰写，但是你的导师希望你提供 Word 版本的论文进行方便的批注等，你可以使用下面的方法来将你的 LaTeX 论文转换为 Word 格式的文档。需要注意的是，这种方式的转换并不能完整的将 LaTeX 论文的全部格式进行转换，**仅能保证正文部分内容的不丢失**，其余包括「论文封面」、「表格」等等部分的内容，在转换的过程中都可能丢失。这些部分需要你后期手动进行添加。

大致有两类思路：

- LaTeX 正常编译成 PDF，然后 **PDF → Word**（[在线](#online-pdf)／[本地](#offline-pdf)）
- 直接 **LaTeX → Word**（[本地](#offline-latex)）

一般前者整体效果好，后者公式效果好。

## 在线转换 PDF → Word {#online-pdf}

<!--
  https://github.com/BHOSC/BUAAthesis/blob/e969b76e9e4668e7e6a1ecd7cbc1c98d19b91342/README.md?plain=1#L86-L103
  GPLv3 / LPPL
-->

::: danger ⚠ 注意安全
将未发表论文上传至网络有风险，请注意安全，谨慎使用。
:::

无需注册的：

- [iLovePDF](https://www.ilovepdf.com/pdf_to_word)：整体效果好，包括页眉和页脚；公式支持差。

- [Adobe Acrobat online tools](https://www.adobe.com/acrobat/online/pdf-to-word.html)：效果与 iLovePDF 类似；虽然是大公司，但访问性差，可能超时或提示“Access Denied”。

需要注册的：

- [nitro](https://cloud.gonitro.com/)：对超链接、目录、段落格式和字体等支持较好；公式支持差。

## 本地转换 PDF → Word {#offline-pdf}

- 用 **Adobe Acrobat** 打开 PDF，转换为 Word 文档：可以保持大体的文档结构；但公式之类依旧会比较凌乱；实测知网可以查重。

- 直接用 **MS Word** 打开 PDF：效果一般。

## 本地转换 LaTeX → Word {#offline-latex}

图形化界面：未知。

命令行界面：

- [Pandoc](https://pandoc.org)（详见[后文](#pandoc)）：通用工具，可以结合 Word 模板达到较好效果；不支持多级嵌套表格。

- [Mingzefei/latex2word](https://github.com/Mingzefei/latex2word)：pandoc + [pandoc-crossref](https://lierdakil.github.io/pandoc-crossref/) + [python 包](https://pypi.org/project/tex2docx/)，据称支持公式转换、多子图导入、交叉引用；2023年国人新创，但只有单个开发者，稳定性存疑。

## 使用 Pandoc 本地转换 {#pandoc}

::: details 准备工作：安装 Pandoc 命令行工具

Pandoc 是一个支持几乎所有 Markup 格式文档的「通用文档转换器」，是一个命令行工具，支持所有常用操作系统。我们可以借助 pandoc 进行格式转换。

Pandoc 详细的安装说明请见官方文档：[Installing pandoc](https://pandoc.org/installing.html).

简单来说：

- 在 Windows 上你可以使用 scoop 包管理工具安装 pandoc（为了方便设置命令行工具的环境变量，推荐使用 scoop 进行安装）：

  ```powershell
  scoop install pandoc
  ```

  **关联阅读：**[「一行代码」搞定软件安装卸载，用 Scoop 管理你的 Windows 软件](https://sspai.com/post/52496)

  当然你也可以直接在 [Pandoc 的 GitHub Release 页面](https://github.com/jgm/pandoc/releases/latest) 下载 Windows MSI 安装文件手动安装。

- 在 macOS 上你可以使用 Homebrew 包管理工具安装 pandoc：

  ```bash
  brew install pandoc
  ```

- 在 Linux 上你可以使用你所用发行版的包管理工具安装 pandoc，比如：

  ```bash
  sudo apt install pandoc
  ```

之后，在终端中输入：

```powershell
pandoc --version
```

如果出现类似下面的输出，说明你的 pandoc 安装成功。

![pandoc output](https://i.loli.net/2020/03/03/urCP6RnKvsdXHLj.png)

:::

### 完善 Word 格式的模板文件

为了保证导出的 Word 文档格式和学校提供的模板大体一致，我们需要确认 Word 版本的模板**已经准确定义了各级标题、正文等部分的格式。**

![Word predefined styles](https://i.loli.net/2020/03/03/PZxjSAEguz1pyf2.png)

之后，我们需要将这一文件（`doc` 或 `docx`）保存，**留作 pandoc 的格式参考。**

### 进行格式转换

最后，我们进行格式的转换。

:::warning ❗ 特别强调
Pandoc 格式转换功能有限，无法处理 LaTeX 多级嵌套表格（本模板的「毕业论文」使用了多级嵌套表格，直接调用 pandoc 默认情况下会报错。需要删掉 LaTeX 文档中的表格，并后期手动录入 Word 之中），也无法保证格式与 LaTeX 原文档 **完全一致**，都需要我们后期手动进行调整。
:::

#### 朴素格式转换

如果你只希望将文本内容导出为 Word，不在意格式或其他内容的正确性，你可以直接使用下面的命令进行最普通的文本转换：

```bash
pandoc {LaTeX 文档文件} -o {输出 Word 文档}
```

比如：

```bash
pandoc main.tex -o main.docx
```

没有特别指明模板 Word 文档格式与参考文献文档的情况下，pandoc 仅会处理你 LaTeX 文档中的文字内容，按照标题、正文的格式整理进入 Word。

#### 含有目标模板 Word 文档的格式转换

如果你希望按照模板 Word 文档的规定格式进行转换，那么你可以直接使用下面的命令进行格式转换：

```bash
pandoc {LaTeX 文档文件} --reference-doc={参考模板 Word 文档} -o {输出 Word 文档}
```

比如，我们的 LaTeX 文档文件名称为 `main.tex`，参考模板 Word 文档名称为 `template.docx`，希望输出名为 `main.docx` 的 Word 文档，我们即可如下组织 pandoc 转换命令：

```bash
pandoc main.tex --reference-doc=template.docx -o main.docx
```

#### 含有参考文献文档的格式转换

如果你的 LaTeX 文档中包含有参考文献的引用，那么你需要特别明确参考文献 BibTeX 文件，将文件以 `--bibliography={参考文献文件}` 的参数告知 pandoc，从而让 pandoc 正确处理你的参考文献。比如：

```bash
pandoc main.tex --bibliography=refs.bib --reference-doc=template.docx -o main.docx
```

## 另可参阅

- [日经问题：LaTeX 如何转为 Word？ · Issue #22 · CTeX-org/forum](https://github.com/CTeX-org/forum/issues/22)
  - [msword - How to convert a scientific manuscript from LaTeX to Word using Pandoc? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/111886/how-to-convert-a-scientific-manuscript-from-latex-to-word-using-pandoc)
  - [LaTeX（XeLaTeX）写的文档如何一键转为word？ - 知乎](https://www.zhihu.com/question/31850346)
- [文件格式相关 - README - BUAAthesis: 北航毕设论文LaTeX模板](https://github.com/BHOSC/BUAAthesis/tree/master?tab=readme-ov-file#文件格式相关)
