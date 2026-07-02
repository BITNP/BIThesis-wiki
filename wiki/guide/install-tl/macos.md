# 🍌 macOS 安装 LaTeX 环境

## 全量安装 {#full}

TeX Live 在 macOS 上包装成了 [MacTeX](https://www.tug.org/mactex/)。MacTeX 以 `pkg` 文件发布。我们进入 [MacTeX 的下载页面](https://www.tug.org/mactex/mactex-download.html)，下载完整安装包 `MacTeX.pkg`（大约 6 GB），然后双击运行安装。

使用 Homebrew 包管理的同学，也可以[通过 Homebrew Cask 直接安装 MacTeX](https://formulae.brew.sh/cask/mactex)：

```bash
brew install --cask mactex
```

:::: warning ❗ 字体问题
在 macOS 上，学校要求使用的中易字库由于版权等历史原因并未预装，因此，BIThesis 会默认使用与相关字体有极小差别的开源字体。当你特别在意这些问题时，请参照 [疑难杂症 - 中文字体如何才能与 Word 模板完全相同？（换用中易字库）](../../faq/word-font.md) 进行修正。
::::

即完成了在 macOS 上的 TeX Live 全量安装。

## 精简安装 {#minimal}

精简安装会只安装 BIThesis 必要的宏包，因此占用空间会大幅缩小，仅需 **1GB** 左右的磁盘容量。

::: warning ❗ 注意
由于精简安装过程仅会安装 BIThesis 使用的宏包，因此如果你需要使用其他的 LaTeX 模板包，你需要参照后文的 [日后补充安装](../getting-started.md#日后补充安装) 部分，针对你使用的新模板进行安装。
:::

前往 [More Packages - MacTeX](https://www.tug.org/mactex/beginners.html)，下载[`BasicTeX.pkg`](https://mirror.ctan.org/systems/mac/mactex/BasicTeX.pkg)（一两百 MB）并运行，这会安装基础设施和基本宏包。

下载 [BIThesis 所需宏包列表](https://github.com/BITNP/BIThesis/raw/refs/heads/main/.github/tl_packages)，然后用 tlmgr（TeX Live package manager）安装。

```shell
curl -LO https://github.com/BITNP/BIThesis/raw/refs/heads/main/.github/tl_packages
# 下载 BIThesis 宏包列表
sudo tlmgr update --self # 更新 tlmgr 自身（BasicTeX 中的 tlmgr 版本较旧，更新后才能安装新版宏包）
sudo tlmgr install $(sed -E 's/#.*//' ./tl_packages) # 安装 BIThesis 所需宏包
```

<!--
TODO: 这里原来有段注释，是之前找人测试时收集到的反馈。
现在是刻意删除了，还是这段注释有误或过时？

>  与 Linux 相比，这里加了 sudo，因为默认安装于`/usr/local/`。
>  运行`BasicTeX.pkg`时可改安装位置，但 macOS 通常不涉及分区或多用户，一般都不动；需要动的人应该也知道自己在做什么。
>  因此不必额外说明。

IDDFS3 个月前
这段应该是被误伤了
我在写新的时候也想着找个人借台mac验证一下，但是我没有借到，看节后有没有机会去拿到吧

https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036386411
-->

:::: warning ❗ 字体问题
在 macOS 上，学校要求使用的中易字库由于版权等历史原因并未预装，因此，BIThesis 会默认使用与相关字体有极小差别的开源字体。当你特别在意这些问题时，请参照 [疑难杂症 - 中文字体如何才能与 Word 模板完全相同？（换用中易字库）](../../faq/word-font.md) 进行修正。
::::

即完成了在 macOS 上的 TeX Live 精简安装。

<!--@include: ./minimal-tip.part.md-->
