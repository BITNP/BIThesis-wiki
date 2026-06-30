# 📁 下载与使用模板

:::warning 📖 初次使用？
若是初次使用，请先阅读本 Wiki 全部内容或快速使用指南，再开始写作。

- 阅读本 **Wiki**：[从这里开始](./intro.md)。
- **快速使用指南**：[本科][undergraduate-handbook]／[硕博][graduate-handbook]。

:::

## 选择你的写作平台

常见的写作平台有两大类：**本地平台**和**在线平台**。BIThesis 支持在所有平台上使用，且编译得到的 PDF 几乎没有差别。你可以根据自己的需求选择适合的写作平台：

- 本地平台：需配置本地编译环境和编辑器，上手较慢，但完全可控
  - Windows：上手最简单、兼容性最好，编译出的 PDF 可视为标准版本，是最稳妥的选择；
  - WSL(Windows Subsystem for Linux)：性能接近 Linux/macOS，高于 Windows 原生，对不熟悉 Linux 的人有一定门槛，属于比较平衡的选择；
  - Linux/macOS：性能最高的平台，但存在[字体问题](../faq/word-font.md#unix)需要解决，适合有一定 LaTeX 使用经验、追求高性能、自动化的用户。
- 在线平台：开箱即用，无需配置本地环境，网页端写作
  - TeXPage：国内在线平台，中文支持完善，网络稳定，与本地平台的区别是有编译时长限制，免费版使用的时长完全足够；
  - Overleaf：国外在线平台，对中文支持有限，需自行解决中文[字体问题](../faq/word-font.md#overleaf)，且免费版存在较强限制，实测很难完成模板的编译，目前不推荐使用该平台。

如果你选择在在线平台写作，点击[模板表格](./preface.md#qbithesis-都包含哪些模板)中的 `open in TeXPage`、`open in Overleaf` 按钮，在对应的在线平台中直接打开相应模板（需注册账号），开始写作。

如果你选择在本地平台写作，你需要先在本页面的给出链接中下载好你需要的模板包，在本地解压做好准备工作，再参考后续教程来完成安装配置等工作，开始写作。

<!--
TODO: 本地编译与在线平台，我该使用哪一个？
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3032966926

作为参考，《快速使用指南》有下面这段（包括脚注）。

> #### 本地编译与在线平台，我该使用哪一个？
>
> [Overleaf](https://cn.overleaf.com)、[TeXPage](https://www.texpage.com/zh/) 等在线平台在浏览器中提供了 LaTeX 编辑器，可以直接在网页上编辑预览 LaTeX。
> 选用在线平台既有优点也有缺点：
>
> - **优点**
>
>   - ​​注册即用，无需自己安装 LaTeX 发行版并配置编辑器。
>
>   - 云端同步，文档可以跨设备编辑预览。
>
>   - 协作便捷，可以共享项目，能让前辈实时批注。
>
> - **缺点**
>
>   - 依赖网络，信号一差就无法操作，且不能涉及秘密内容。
>
>   - 编译受限，特别是免费时长有限[^1]，参考文献、图片特别多时，只能[变通](https://bithesis.bitnp.net/faq/slow.html)。
>
>   - 集成困难，例如若用 [Zotero](https://www.zotero.org) 等文献管理软件，很难自动连接。
>
> 因此，需要使用者根据自己的需求进行选择。
>
> [^1]: 2026年3月，[免费版 Overleaf 是 10 s](https://cn.overleaf.com/blog/changes-to-free-compile-timeout#:~:text=timeout%20limit%20to-,10%20seconds,-.%20We%20made)，[免费版 TeXPage 是 30 s](https://www.texpage.com/zh/pricing/)。

题外话，建议整站都弱化overleaf, 具有付费版overleaf订阅的同学还是太少了，对于我们的模板，overleaf免费版已不可行。
-->

## 下载模板包并解压

👉 最新版本：[🏫 校内开源镜像站][mirror]／[👽 校外 GitHub release][latest-release]。

下载你需要的模板包，解压到本地即可使用。

- 硕博·学位论文 — `graduate-thesis.zip`
- 本科·毕业设计
  - 论文 — `undergraduate-thesis.zip`
  - 论文（全英文专业） — `undergraduate-thesis-en.zip`
  - 外文翻译 — `paper-translation.zip`
- 本科·读书报告 — `reading-report.zip`
- 演示文档 — `presentation-slide.zip`
- 实验报告 — `lab-report.zip`

![Templates from GitHub Release](../assets/templates-from-release.png)

:::tip ❓ `STXIHEI.TTF` 是什么文件？为什么会附带在压缩包里？
`STXIHEI.TTF` 是华文细黑字体文件，学校的本科毕业论文要求中用到了这一字体，部分系统可能没有预装这种字体，会导致 BIThesis 编译报错。

因此我们将这个字体附带在压缩包中，编译的时候会自动搜索并使用该字体，以确保所有用户都能顺利编译模板。

<!--
TODO: STXIHEI 移至别处
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3032932366

真的需要双击安装吗？BIThesis 用文件名指定细黑字体，所以 fontspec 宏包会搜索main.tex所在目录，应该并不需要全局安装。

如果真的需要全局安装，我们得再找人测试下 macOS。

“学校的毕业论文”这一说法欠妥，因为只有本科系列模板有细黑字体，硕博模板没有。

everything4113 个月前
不需要。

此外“双击安装”的描述不正确，对于linux, 双击行为取决于使用的桌面环境，如果是kde，是查看字体，其他桌面环境没有测试，如果是windows, 双击后安装是安装到个人目录下，兼容性一般般，如果真要安装请右键使用管理员安装。macos行为不清楚。

❤️
1
YDX-21474836473 个月前
STXIHEI.TTF 是华文细黑字体文件，学校的本科毕业论文要求中用到了这一字体，部分系统可能没有预装这种字体，会导致 BIThesis 编译报错。

因此我们将这个字体附带在压缩包中，编译的时候会自动搜索并使用该字体，以确保所有用户都能顺利编译模板。

我看现在改成了上面这样。是不是别放到 wiki，而移到模板包 README（或《快速使用指南》§3.1 认识模板组成）比较好呢？因为现在这段只是纯解释，
-->

:::

:::tip ⛔ 无须克隆仓库
若从 GitHub 下载，只从 [Releases][releases] 下载压缩包即可，不需要也不建议`git clone …`。

为了方便各位同学使用，项目已按照发布 Release 流程，将每个模板单独打包，解压即可使用。而仓库围绕开发，缺少自动生成的文件，并且包含多个模板，并不方便使用。

另外，即使您日后要更新模板，也是下载新的`*.cls`替换原有的，并非`git pull`。
:::

## 日后更新升级

BIThesis 会不时更新，主要是满足学校、同学新的细节要求，此外适配宏包、改善文档。如果使用遇到问题，可考虑升级模板：

1. 从上文地址下载新的文档类（论文`bithesis.cls`／幻灯片`bitbeamer.cls`／实验报告`bitreport.cls`）
2. 替换原有`*.cls`文件
3. 重新编译

更新说明请移步 [GitHub Releases][latest-release] 或[本站备份](../news/index.md)。

## 写作前的准备

如您确定在本地进行写作，请继续阅读本站后续教程：[🍌 安装 LaTeX 环境](./getting-started.md)和[📃 配置编辑器](./configure-and-compile.md)，成功编译示例模板、学习 LaTeX 基础后即可开始写作。

[mirror]: https://mirror.bit.edu.cn/github-release/BITNP/BIThesis/LatestRelease/ '北京理工大学开源镜像站 - BIThesis镜像'
[releases]: https://github.com/BITNP/BIThesis/releases/ 'Releases · BITNP/BIThesis'
[latest-release]: https://github.com/BITNP/BIThesis/releases/latest 'Latest Release · BITNP/BIThesis'
[undergraduate-handbook]: https://mirrors.ctan.org/macros/unicodetex/latex/bithesis/bithesis-handbook-undergraduate.pdf
[graduate-handbook]: https://mirrors.ctan.org/macros/unicodetex/latex/bithesis/bithesis-handbook-graduate.pdf
