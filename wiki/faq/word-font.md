---
tag: font
---

# 中文字体如何才能与 Word 模板完全相同？（换用中易字库）

首先明确，Word 模板中的中文字体属于「中易字库」，包括`simsun.ttc`（宋体，SimSun）等。

- **Windows**——这是默认设置，无需修改，开箱即用。
- **其它平台**——需强制 LaTeX 使用中易字库，并确保字体文件可用，详见下文。

## 强制 LaTeX 使用中易字库 {#ctex-fontset}

请编辑`main.tex`，在开头如下设置：

```latex
\documentclass[…]{bithesis}  % [!code --]
\documentclass[…, ctex={fontset=windows}]{bithesis}  % [!code ++]
```

这会让[[pkg:ctex]]跳过操作系统检测，直接使用 Windows 平台默认的中易字库。

::: details 其它 LaTeX 文档怎么办？

以上方法仅限[[pkg:bithesis]]。自己直接用[[pkg:ctex]]请如下设置：

```latex
\documentclass{ctexbook}  % [!code --]
\documentclass[fontset=windows]{ctexbook}  % [!code ++]
```

其它模板请如下设置：

```latex
\PassOptionsToClass{fontset=windows}{ctexbook}  % [!code ++]
\documentclass[…]{任何基于ctexbook的文档类}
```

:::

如上设置后，若[[pkg:fontspec]]报错`The font "SimSun" cannot be found`，说明您的平台并无中易字库，需补充准备字体文件，请继续操作。

## 准备字体文件

各平台最简方法不同，以下由易到难介绍。（📥表示需在本地[下载 LaTeX 发行版](../guide/getting-started.md)）

### [TeXPage](https://www.texpage.com) 等国产在线平台（难度：😀）{#texpage}

已预装中易字库，如上强制 LaTeX 使用即可，无此问题。

### WSL (Windows Subsystem for Linux)（难度：🙂+📥）{#wsl}

直接使用外面 Windows 的字体文件。

请通过 WSL 的命令行按序执行：

```shell
# 将 Windows 的字体目录软链接到 WSL 的字体目录，
sudo ln -s /mnt/c/Windows/Fonts /usr/share/fonts/win-fonts

# 刷新字体缓存
fc-cache -fv
```

### Linux、macOS 等其它本地平台（难度：🤨+📥）{#unix}

在系统中安装中易字库，通常双击字体文件即可。

中易字库包括 SimSun、SimHei、KaiTi、FangSong 等。然而由于版权和历史原因，它不太有正经下载渠道……

- 若是 **macOS 且安装了 Word**，可切换到以下目录，找到`Simsun.ttc`、`SimHei.ttf`、`Kaiti.ttf`（注意并非 SimKai）、`Fangsong.ttf`，双击安装。

   <!-- https://github.com/BITNP/BIThesis-wiki/issues/527 -->

  ```log
  /Applications/Microsoft Word.app/Contents/Resources/DFonts/
  ```

  然后打开“字体册”，确认有新安装的字体。

- 若是**其它情况**，建议找个 Windows 系统，从`C:/Windows/Fonts/`拷贝`sim{sun,hei,kai,fang}*.{ttf,ttc}`，双击安装。

### [Overleaf](https://www.overleaf.com/) 等在线平台（难度：🤨😥😖）{#overleaf}

上传字体到 LaTeX 项目，同时用`ctex-fontset-windows.def`定义字体。

::: details 原因

[[pkg:ctex]]使用[[pkg:fontspec]]调用字体，调用时按**字体名**（如 SimSun），而非**文件名**（如`simsun.ttc`）。这可能是考虑到文件名能随意更改，不反映文件中的实际字体。

根据[[texdoc:fontspec]] §2 Font selection，按字体名调用时，只支持 XeTeX/LuaTeX 已知的系统字体（≈ 操作系统字体目录的字体）；按文件名调用时，才会搜索当前工作目录（≈ LaTeX 项目）中的字体文件。

然而在线平台上，我们没有权限添加系统字体。于是只好绕过[[pkg:ctex]]默认机制，自己按文件名调用字体。

:::

1. 找个 Windows 系统，在`C:/Windows/Fonts/`找到`simsun.ttc`和`sim{hei,kai,fang}.ttf`，上传到 LaTeX 项目，与`main.tex`并列。

2. 创建`ctex-fontset-windows.def`，与`main.tex`并列，内容如下。

   :::: details `ctex-fontset-windows.def`（单击展开）

   <<< ../assets/word-font-ctex-fontset-windows.def{latex}

   ::: warning 📅 最后检查于2025年4月
   以上内容修改自[[pkg:ctex]] 2.5.10 2022-07-14 的`ctex-fontset-windows.def`，以后可能需要参考 [CTeX-org/ctex-kit 源代码](https://github.com/CTeX-org/ctex-kit/blob/1ee66c6f130802d3400f893db01fd6a6701ab164/ctex/ctex.dtx#L11065-L11172)更新。
   :::

   ::::

3. 如果您之前没有操作，请[强制 LaTeX 使用中易字库](#ctex-fontset)。

### 自行部署的 [Overleaf Community 版](https://github.com/overleaf/toolkit/)（难度：😀+📥👷‍♀️🚧）{#overleaf-community}

如果您[采用北大 LCPU 版 Overleaf 自行部署](https://github.com/lcpu-club/overleaf/wiki/快速开始)，可以使用以下镜像替换原有的`ghcr.io/lcpu-club/sharelatex-base`，它们已经包含了中易字库。

- `docker.io/everything411/sharelatex-base:2024.1`
- `docker.io/everything411/sharelatex-base:2022.1`
- `docker.io/everything411/sharelatex-base:2020.1`

::: warning 📅 最后检查于2025年4月
这些镜像违反了[微软的再分发规则][ms-font-faq]，有潜在失效风险。
:::

另见：[提供自建Overleaf实例的教程 · Issue #445 · BITNP/BIThesis-wiki](https://github.com/BITNP/BIThesis-wiki/issues/445#issuecomment-2728226319)

::: info 也许能更简单
也许可以修改[`services/clsi/app/js/DockerRunner.js`](https://github.com/lcpu-club/overleaf/blob/3ebfd0a523adfef3164a1b14419eb9e2c968c78f/services/clsi/app/js/DockerRunner.js#L4)中的 docker 调用规则，允许创建容器时额外挂载，从而添加字体。待测试补充。
:::

::: tip 🏃‍♀️ 树挪死，人挪活
可以考虑换到容易的平台，甚至请同学帮忙在 Windows 上编译最终版 PDF。
:::

## 参考

- [[texdoc:ctex]]
- [[texdoc:xeCJK]]
- [[texdoc:fontspec]]
- [Overleaf 中的 CJK 字体设置 | sikouhjw.github.io](https://sikouhjw.github.io/2021/02/14/2021-02-14-fontset-overleaf/)
- [SimSun font family - Typography | Microsoft Learn](https://learn.microsoft.com/zh-cn/typography/font-list/simsun)
- [字体重新分发常见问题解答 - Typography | Microsoft Learn][ms-font-faq]

[ms-font-faq]: https://learn.microsoft.com/zh-cn/typography/fonts/font-faq
