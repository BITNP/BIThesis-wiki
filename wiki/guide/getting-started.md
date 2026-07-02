# 🍌 安装 LaTeX 环境

<!--
TODO!: Vue 组件不兼容搜索

通过页面上方搜索栏能搜到 Vue 组件当前隐藏的内容，但单击搜索结果并不会切换组件到显示该内容的状态。
而且由于 Vue 组件未细分章节，单击搜索结果的跳转很不精确，跳转完可能都看不到那个 Vue 组件。

例如访问网站首页，搜索 cask，会发现返回两条结果，第一条是过时视频教程，第二条是下面「macOS 全量安装」说的 homebrew cask。
若单击第二条，会发现跳转到此页「安装工作」，但下面显示「Windows 全量安装」，直接看不到 cask 相关内容。

我认为这个问题挺严重的。要不把每个 InstallPlatform 拆成单独的普通页面，存成 ./install-texlive/{installPlatform}.md 四个文件，每个文件包含 #full、#minimal 两节，然后把以下 Vue 组件改成链接跳转器？
这样修改还方便对比不同 InstallPlatform 的内容，因为直接 diff a.md b.md 就行。

如果采用这种方案，那么还可以扩展 .vitepress/config.mts 的 transformPageData，把这四页下方的「上一页」设成此页，而「下一页」设成目前此页下方的「下一页」。
-->

<!--
TODO: 唔，我有点儿倾向于只给操作系统（Windows/macOS/Linux/WSL）加切换器，而安装方式（在线全量/在线精简/离线）仍用原来的形式。

- 各个操作系统基本平等（WSL除外）。读者看到这里，正常会直接选自己的操作系统，而不会思考应该安装哪种操作系统，也不会比较哪个操作系统安装更简单（吐槽除外）。

- 各种安装方式并不平等。大部分同学选全量安装最简单，硬盘或网络受限的同学才需要考虑精简安装。

  ~~至于离线安装，你好像是我知道的第一个这么装的人……~~
  经过QQ私聊联系，原来是考虑到新装WSL2需要下载操作系统镜像，已经很大了，就没必要再精简安装；然后 WSL2 + install-tl 在线安装只是因网上缺少教程而没测试，理论上也能用。

- 「在线安装」这个概念本身读者未必熟悉。如果主要推荐其中一种，就不需要那么明显地提「在线安装」了，更不容易让读者困惑。

- macOS上的推荐安装方法可能不算在线安装。若把安装方式加进切换器，可能会导致不同操作系统推荐选的按钮不同。

   macOS上推荐用`MacTeX.pkg`安装。这个文件并不是`install-tl`那样的下载脚本，而包含了CTAN上各种包，内容更接近离线安装的`texlive*.iso`。

如果接受以上几点，那么应该重点介绍各操作系统如何全量安装，而弱化其它方法。

https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3033081323
-->

首先，在使用模板之前，你需要在本机安装 LaTeX 环境。一个完整的 LaTeX 环境包括两部分：

- 开源免费的 LaTeX **发行版**（LaTeX 编译器 + 宏包）
- 以及一个得心应手的 LaTeX **编辑器**

我们在 Windows、macOS 与 Linux 环境中均可以使用 LaTeX 进行文档撰写，该部分主要介绍 LaTeX 的编译环境安装。按照安装方式和操作系统的不同，我们分别进行介绍。

## 安装工作

:::details 🔼 要求 TeX Live 至少 2021，请尽量使用最新版（单击展开详情）

为满足我校要求，BIThesis 实现[[texdoc]]、[[texdoc]]等细节时，使用了新版特性，不支持早于 2021 的 TeX Live。

若之前安装过旧版 TeX Live，请按下文安装最新版[^multiple-texlive]，或考虑使用在线平台。

[^multiple-texlive]: 只要自行切换`$PATH`，TeX Live 支持多版本共存，MiKTeX 等其它发行版通常也支持与 TeX Live 共存。

:::

请选择你所用的平台，查看支持的安装方式。然后挑选一种，访问相应链接查看教程。

<script setup lang="ts">
import { ref } from 'vue'
import { NRadioButton, NRadioGroup } from 'naive-ui'

const PLATFORMS = ['Windows', 'Linux', 'macOS', 'WSL2'] as const
type Platform = typeof PLATFORMS[number]
const platform = ref<Platform>('Windows')
</script>

<n-radio-group v-model:value="platform">
	<n-radio-button v-for="p in PLATFORMS" :key="p" :value="p" :label="p"/>
</n-radio-group>

<p v-if="platform === 'WSL2'">
	WSL2 由于操作系统镜像很大，精简安装 TeX Live 没有意义，所以这里只介绍<a :href="`./install-tl/${platform.toLowerCase()}.html#full`">全量安装</a>。
</p>
<p v-else>
	{{ platform }}支持<a :href="`./install-tl/${platform.toLowerCase()}.html#full`">全量</a>、<a :href="`./install-tl/${platform.toLowerCase()}.html#minimal`">精简</a>两种安装方式。
</p>

<!--
TODO: 上面出现了「在线安装」
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036347615

读者未必熟悉“在线安装”这一概念。与旧版相比，新版提及“在线安装”更靠前、更明显了，也许会让读者更困惑。可能需要再斟酌一下“在线安装”这个词，或者想办法弱化。

其实我倾向于主要推荐在线安装，不把安装方式放进`<InstallGuide>`，这样就不用专门说“在线安装”这个词了。（参考[前面的评论](https://github.com/BITNP/BIThesis-wiki/pull/601/changes#r3033081323)）

everything4113 个月前
我认为应当仍然推荐使用texlive iso来安装，会快很多的。在线安装还要到里面手动选镜像，自动选择不一定会选择到比较好的位置，比如我遇到过好几次自动选择到了hit镜像，在咱们这边访问延迟还是相当大的，考虑到之前我的评论中握手相关问题，会大大增加所需时间。

👀
1
YDX-21474836473 个月前
自动选择不一定会选择到比较好的位置，比如我遇到过好几次自动选择到了hit镜像

我也遇到过自动选到北京以外，不过好像影响不大？

everything4113 个月前
我估计如果内网/同区域校园网的overhead应该在10%-20%，还好，如果选到hit可能会慢两倍，尤其是windows上本身性能就比较差，考虑更容易触发tcp慢启动机制，性能损失会比较大
-->

全量安装与精简安装的区别在于全量安装占用较多存储（8~10 GB），但只需一次性下载单个文件，省心快速；而精简安装只安装 BIThesis 必需的宏包（约 1 GB），不过初次安装时需等待下载器串行下载许多小文件，后续使用还可能要补充安装。**如果存储空间充足，推荐选择全量安装。**

## 确认安装

为了保证我们 LaTeX 发行版的安装没有问题，我们需要验证一下 LaTeX 编译工具的安装情况。我们打开终端（Windows 打开 PowerShell、macOS 打开 Terminal、Linux 打开你所使用的终端模拟器），在其中输入下面的命令：

```bash
latexmk --version # 验证 latexmk 的安装
xelatex --version # 验证 xelatex 的安装
biber --version # 验证 biber 的安装
```

![验证安装](../assets/install-tl/install-finish.png)

<!--
TODO: 为什么改了图片？若是单纯为了升级版本，我认为没必要，因为未来也做不到每个版本改一次图片。
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036426467
-->

出现类似的输出，说明我们编译器安装应该是没有问题的。

准备就绪后，我们还需要选择一个趁手的编辑器，请转到 [📃 配置编辑器](./configure-and-compile.md) 页面进行进一步的操作。
