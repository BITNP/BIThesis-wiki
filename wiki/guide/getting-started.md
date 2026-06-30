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

<script setup lang="ts">
import { NCard, NRadioButton, NRadioGroup } from 'naive-ui'
import { computed, ref, watch } from 'vue'

type InstallPlatform = 'windows' | 'linux' | 'macos' | 'wsl'
type InstallMethod = 'full' | 'minimal'

interface Option<T extends string> {
	value: T
	label: string
	disabled?: boolean
}

const installPlatform = ref<InstallPlatform>('windows')
const installMethod = ref<InstallMethod>('full')

const platformOptions: Option<InstallPlatform>[] = [
	{ value: 'windows', label: 'Windows' },
	{ value: 'linux', label: 'Linux' },
	{ value: 'macos', label: 'macOS' },
	{ value: 'wsl', label: 'WSL' },
]

const methodOptions = computed<Option<InstallMethod>[]>(() => [
	{ value: 'full', label: '全量安装' },
	{ value: 'minimal', label: '精简安装', disabled: installPlatform.value === 'wsl' },
])

watch(installPlatform, (platform) => {
	if (platform === 'wsl' && installMethod.value === 'minimal') {
		installMethod.value = 'full'
	}
})
</script>

首先，在使用模板之前，你需要在本机安装 LaTeX 环境。一个完整的 LaTeX 环境包括两部分：

- 开源免费的 LaTeX **发行版**（LaTeX 编译器 + 宏包）
- 以及一个得心应手的 LaTeX **编辑器**

我们在 Windows、macOS 与 Linux 环境中均可以使用 LaTeX 进行文档撰写，该部分主要介绍 LaTeX 的编译环境安装。按照安装方式和操作系统的不同，我们分别进行介绍。

## 安装工作

:::details 🔼 要求 TeX Live 至少 2021，请尽量使用最新版（单击展开详情）

为满足我校要求，BIThesis 实现[[texdoc:biblatex-gb7714-2015|参考文献著录]]、[[texdoc:ctex|章节层次]]等细节时，使用了新版特性，不支持早于 2021 的 TeX Live。

若之前安装过旧版 TeX Live，请按下文安装最新版[^multiple-texlive]，或考虑使用在线平台。

[^multiple-texlive]: 只要自行切换`$PATH`，TeX Live 支持多版本共存，MiKTeX 等其它发行版通常也支持与 TeX Live 共存。

:::

这里的安装教程提供全量安装与精简安装两种方式。本教程以安装 TeX Live 2026 为例进行说明（若安装其它年份的版本，请将下文命令与路径中的 `2026` 相应替换）：

- Windows 与 Linux 的全量安装使用 TeX Live ISO 镜像安装或在线安装
- macOS 的全量安装使用 MacTeX 安装
- WSL 的全量安装使用 WSL 2 + ISO 镜像安装
- Windows、Linux 与 macOS 提供精简安装，WSL 暂不提供精简安装
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

其中，**全量安装占用空间较大**（8～10GB），因此安装前请确保硬盘有足够空间（建议预留 20GB 以上硬盘空间）。如果你的硬盘空间不足，请使用精简安装方式（约 1GB）进行安装，或是使用在线平台进行写作。

请先选择安装平台，再选择安装方式，以查看对应的安装教程。

---

<n-card>
	<div class="install-selector">
		<div class="selector-group">
			<div class="selector-label"><strong>安装平台：</strong></div>
			<n-radio-group v-model:value="installPlatform">
				<n-radio-button v-for="option in platformOptions" :key="option.value" :value="option.value">
					{{ option.label }}
				</n-radio-button>
			</n-radio-group>
		</div>
		<div class="selector-group">
			<div class="selector-label"><strong>安装方式：</strong></div>
			<n-radio-group v-model:value="installMethod">
				<n-radio-button
					v-for="option in methodOptions"
					:key="option.value"
					:value="option.value"
					:disabled="option.disabled"
				>
					{{ option.label }}
				</n-radio-button>
			</n-radio-group>
		</div>
	</div>
</n-card>

<template v-if="installPlatform === 'windows' && installMethod === 'full'">
<!-- 全量安装-Windows -->

使用北京理工大学校园网的同学可以直接使用我校官方 TeX Live 镜像进行安装，外网则可使用 CERNET 联合镜像站的 TeX Live 镜像进行安装。点击后面的链接即可从镜像站下载`texlive.iso`：[北理校内镜像站（校园网）](https://mirrors.bit.edu.cn/CTAN/systems/texlive/Images/texlive.iso)／[CERNET 联合镜像站（外网）](https://mirrors.cernet.edu.cn/CTAN/systems/texlive/Images/texlive.iso)。需注意，在安装过程中请使用合适的权限，必要时请以管理员身份运行安装程序。

对于 Windows 10 / Windows 11 及以上版本，可以直接挂载 ISO 镜像（双击即可），其余系统用合适的软件也可。之后在打开的文件夹中点击执行 `install-tl-windows.bat` ，一路点击确认，即可离线安装全部 TeX Live 组件。

::::details 也可以在线安装
参考 [Easy install](https://www.tug.org/texlive/windows.html#install)，下载并运行 [`install-tl-windows.exe`](https://mirror.ctan.org/systems/texlive/tlnet/install-tl-windows.exe)，它会在线下载所需文件并安装。

在线安装需要从镜像站拉取 TeX Live 相关文件，因此请确保整个安装过程有稳定的网络环境。

:::warning ❗ 在线安装可能耗时较久甚至失败
由于安装程序是串行地从镜像服务器上下载文件，如果网络环境不佳，或是被分配到了较慢的镜像服务器，可能会导致安装过程非常缓慢，甚至下载失败。因此建议在网络环境较好的情况下使用在线安装，或是直接使用 ISO 镜像进行安装。
:::

::::

即完成了在 Windows 上的 TeX Live 全量安装。
</template>

<template v-if="installPlatform === 'linux' && installMethod === 'full'">
<!-- 全量安装-Linux -->

::: details 💀 谨慎使用系统包管理器安装 { style="border-color: var(--vp-custom-block-warning-border); color: var(--vp-custom-block-warning-text); background-color: var(--vp-custom-block-warning-bg);" }

非滚动发行的发行版（如 Ubuntu 和 Debian 等）的系统包管理器（如 apt）提供的 TeX Live [一般较旧](https://repology.org/project/texlive/versions)（Homebrew 除外），且无法选择安装方案，通常很难使用。

如果坚持使用系统包管理器安装 TeX Live，那以后切勿随意安装、更新或移除宏包。由系统包管理器管理的软件包不应被其他包管理器同时管理，所以采用系统包管理器安装的 TeX Live 不应再使用 tlmgr 管理 TeX 宏包。

:::

使用北京理工大学校园网的同学可以直接使用我校官方 TeX Live 镜像进行安装，外网则可使用 CERNET 联合镜像站的 TeX Live 镜像进行安装。点击后面的链接即可从镜像站下载`texlive.iso`：[北理校内镜像站（校园网）](https://mirrors.bit.edu.cn/CTAN/systems/texlive/Images/texlive.iso)／[CERNET 联合镜像站（外网）](https://mirrors.cernet.edu.cn/CTAN/systems/texlive/Images/texlive.iso)。需注意，在安装过程中请使用合适的权限，必要时请以管理员身份运行安装程序。

首先在系统中挂载 ISO 镜像，使用如下命令：

```bash
sudo mkdir /mnt/texlive # 创建挂载点
sudo mount -o loop /path/to/texlive20xx.iso /mnt/texlive # 挂载 ISO 文件
```

挂载完成后，我们就可以进入挂载目录，运行安装程序来安装 TeX Live 了：

```bash
cd /mnt/texlive
sudo ./install-tl
```

::::details 也可以在线安装
参考 [Quick install](https://www.tug.org/texlive/quickinstall.html)，下载 [`install-tl-unx.tar.gz`](https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz) 并解压，运行 `install-tl`，它会在线下载所需文件并安装。

在线安装需要从镜像站拉取 TeX Live 相关文件，因此请确保整个安装过程有稳定的网络环境。

:::warning ❗ 在线安装可能耗时较久甚至失败
由于安装程序是串行地从镜像服务器上下载文件，如果网络环境不佳，或是被分配到了较慢的镜像服务器，可能会导致安装过程非常缓慢，甚至下载失败。因此建议在网络环境较好的情况下使用在线安装，或是直接使用 ISO 镜像进行安装。
:::

::::

此时进入 TeX Live 安装界面，我们输入 `I` 来开始安装，等待一段时间后（约 15 分钟），安装程序会提示我们安装完成，我们接下来需要按照安装程序的要求配置环境变量。使用文本编辑器打开 `~/.bashrc` 文件，在文件末尾添加以下内容：

```bash
export PATH=/usr/local/texlive/2026/bin/x86_64-linux:$PATH
export MANPATH=/usr/local/texlive/2026/texmf-dist/doc/man:$MANPATH
export INFOPATH=/usr/local/texlive/2026/texmf-dist/doc/info:$INFOPATH
```

保存并关闭文件后，输入以下命令使环境变量生效：

```bash
source ~/.bashrc
```

::::warning ❗ 字体问题
需要注意的是，部分 Linux 发行版（如 Debian）可能不会预装微软的 Times New Roman 字体，因此需要补装字体（注意此时需要开启 `contrib` 源），即执行如下命令：

```bash
sudo apt install ttf-mscorefonts-installer
```

按照提示确认用户协议后即可完成安装。

同时，在 Linux 上，学校要求使用的中易字库由于版权等历史原因并未预装，因此，BIThesis 会默认使用与相关字体有极小差别的开源字体。当你特别在意这些问题时，请参照 [疑难杂症 - 中文字体如何才能与 Word 模板完全相同？（换用中易字库）](../faq/word-font.md) 进行修正。
::::

即完成在 Linux 上的 TeX Live 全量安装。
</template>

<template v-if="installPlatform === 'macos' && installMethod === 'full'">
<!-- 全量安装-macOS -->

TeX Live 在 macOS 上包装成了 [MacTeX](https://www.tug.org/mactex/)。MacTeX 以 `pkg` 文件发布。我们进入 [MacTeX 的下载页面](https://www.tug.org/mactex/mactex-download.html)，下载完整安装包 `MacTeX.pkg`（大约 6 GB），然后双击运行安装。

使用 Homebrew 包管理的同学，也可以[通过 Homebrew Cask 直接安装 MacTeX](https://formulae.brew.sh/cask/mactex)：

```bash
brew install --cask mactex
```

:::: warning ❗ 字体问题
在 macOS 上，学校要求使用的中易字库由于版权等历史原因并未预装，因此，BIThesis 会默认使用与相关字体有极小差别的开源字体。当你特别在意这些问题时，请参照 [疑难杂症 - 中文字体如何才能与 Word 模板完全相同？（换用中易字库）](../faq/word-font.md) 进行修正。
::::

即完成了在 macOS 上的 TeX Live 全量安装。
</template>

<template v-if="installPlatform === 'wsl' && installMethod === 'full'">
<!-- 全量安装-WSL -->

使用北京理工大学校园网的同学可以直接使用我校官方 TeX Live 镜像进行安装，外网则可使用 CERNET 联合镜像站的 TeX Live 镜像进行安装。点击后面的链接即可从镜像站下载`texlive.iso`：[北理校内镜像站（校园网）](https://mirrors.bit.edu.cn/CTAN/systems/texlive/Images/texlive.iso)／[CERNET 联合镜像站（外网）](https://mirrors.cernet.edu.cn/CTAN/systems/texlive/Images/texlive.iso)。需注意，在安装过程中请使用合适的权限，必要时请以管理员身份运行安装程序。

如果你不知道 WSL，或是不知道如何安装 WSL，可以先参考[WSL 是什么？如何启用 WSL 2？](../faq/enable-wsl2.md)来了解一下。

请将TeX Live ISO 文件下载到 Windows 的某个没有中文路径的目录下（例如本教程中的 `D:\texlive2026.iso`）。

::::danger 🚨 注意你的内存与硬盘容量
WSL 2 默认会按宿主机内存动态占用较大比例，如果你的电脑内存不大（例如 **16GB 及以下**），WSL 2 可能占用过多内存，导致宿主机系统卡顿；内存充裕（如 32GB 及以上）则一般无须额外配置。

同时，WSL 2 的虚拟磁盘默认会随使用不断膨胀（默认存放在 C 盘），安装完 TeX Live 后虚拟磁盘大约会占用 20GB 硬盘空间，若系统盘空间紧张，可能会影响系统性能。

建议内存 16GB 及以下的同学，在安装完成后通过创建或编辑 `.wslconfig` 文件限制 WSL 2 的内存（例如限制为 6～8GB），具体方法请参考 [Microsoft 官方文档](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#configure-global-options-with-wslconfig)；若不愿折腾，也可以直接在 Windows 上安装 TeX Live。
::::

首先，我们需要将之前下载的 TeX Live ISO 文件挂载到 WSL 2 中。打开 Ubuntu 终端，输入以下命令：

```bash
sudo mkdir /mnt/texlive # 创建挂载点
sudo mount -o loop /mnt/d/texlive2026.iso /mnt/texlive # 挂载 ISO 文件
```

挂载完成后，我们就可以进入挂载目录，运行安装程序来安装 TeX Live 了：

```bash
cd /mnt/texlive
sudo ./install-tl
```

此时进入 TeX Live 安装界面，我们输入 `I` 来开始安装，等待一段时间后（约 15 分钟），安装程序会提示我们安装完成，我们接下来需要按照安装程序的要求配置环境变量。使用文本编辑器打开 `~/.bashrc` 文件，在文件末尾添加以下内容：

```bash
export PATH=/usr/local/texlive/2026/bin/x86_64-linux:$PATH
export MANPATH=/usr/local/texlive/2026/texmf-dist/doc/man:$MANPATH
export INFOPATH=/usr/local/texlive/2026/texmf-dist/doc/info:$INFOPATH
```

保存并关闭文件后，输入以下命令使环境变量生效：

```bash
source ~/.bashrc
```

接下来，我们需要将 Windows 下的字体共享给 WSL 2。首先，在 Windows 中找到字体文件夹，通常位于 `C:\Windows\Fonts`，然后在 Ubuntu 终端中创建一个软链接，并刷新字体缓存即可。具体命令如下：

```bash
sudo mkdir -p /usr/share/fonts/windows
sudo ln -s /mnt/c/Windows/Fonts /usr/share/fonts/windows
sudo fc-cache -fv
```

退出当前目录解除占用，卸载 ISO 文件，解除镜像在 WSL 中的挂载：

```bash
cd  # 退回主目录
sudo umount /mnt/texlive
```

即完成了在 WSL 2 中 TeX Live 的全量安装。
</template>

<!--
TODO: 我觉得各平台精简安装这几段新版明显不如旧版啊。旧版有截图，有明确分步，还提示了耗时步骤大概要等多久；新版基本都没有，是没写全吗？

（要是已经写全了，我再提具体建议。）

https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036419745
-->

<template v-if="installPlatform === 'windows' && installMethod === 'minimal'">
<!-- 精简安装-Windows -->

精简安装会只安装 BIThesis 必要的宏包，因此占用空间会大幅缩小，仅需 **1GB** 左右的磁盘容量。

::: warning ❗ 注意
由于精简安装过程仅会安装 BIThesis 使用的宏包，因此如果你需要使用其他的 LaTeX 模板包，你需要参照后文的 [日后补充安装](./getting-started.md#日后补充安装) 部分，针对你使用的新模板进行安装。
:::

先下载并运行 [`install-tl-windows.exe`](https://mirror.ctan.org/systems/texlive/tlnet/install-tl-windows.exe)，只是在安装过程中需要修改相关参数，具体步骤如下：

弹出 "TeX Live 安装程序"时，单击 `高级` 按钮。

修改界面内选项如下图：

![Windows 精简安装高级选项](../assets/install-tl/advanced.png)

下载 [BIThesis 所需宏包列表](https://github.com/BITNP/BIThesis/raw/refs/heads/main/.github/tl_packages)，然后打开 PowerShell，用 tlmgr（TeX Live package manager）安装。

```powershell
# 下载 BIThesis 宏包列表（命令行）
curl -LO https://github.com/BITNP/BIThesis/raw/refs/heads/main/.github/tl_packages

# 需注意在 PowerShell 中 curl 是 Invoke-WebRequest 的别名
# 因此在 PowerShell 中使用 curl 实际上是调用 Invoke-WebRequest，需按下面写法来
# 下载 BIThesis 宏包列表（PowerShell）
Invoke-WebRequest -Uri "https://github.com/BITNP/BIThesis/raw/refs/heads/main/.github/tl_packages" -OutFile "tl_packages"

tlmgr update --self # 更新 tlmgr 自身（TeX Live 中的 tlmgr 版本较旧，更新后才能安装新版宏包）
tlmgr install ((Get-Content ./tl_packages) -replace '\s*#.*', '') # 安装 BIThesis 所需宏包
```

即完成了在 Windows 上的 TeX Live 精简安装。
</template>

<template v-if="installPlatform === 'linux' && installMethod === 'minimal'">
<!-- 精简安装-Linux -->

精简安装会只安装 BIThesis 必要的宏包，因此占用空间会大幅缩小，仅需 **1GB** 左右的磁盘容量。

<!--
TODO: 原来写「Windows 六七百 MB，Linux 四五百 MB」，现在全平台都写「1GB」，是新测试过吗？
另外，建议删去「大幅缩小」。我觉得 1 GB 还是很大，就别比了……

https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036390802
-->

::: warning ❗ 注意
由于精简安装过程仅会安装 BIThesis 使用的宏包，因此如果你需要使用其他的 LaTeX 模板包，你需要参照后文的 [日后补充安装](./getting-started.md#日后补充安装) 部分，针对你使用的新模板进行安装。
:::

下载 [`install-tl-unx.tar.gz`](https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz) 并解压，使用如下命令运行 `install-tl`，并按 `I` 安装。（这里将安装目录从默认`/usr/local/texlive/`改为了`~/.texlive/`，因为前者可能需要 sudo）：

```bash
mkdir ~/.texlive/
./install-tl --texdir=~/.texlive --scheme=scheme-minimal --no-doc-install --no-src-install
```

我们接下来需要按照安装程序的要求配置环境变量。使用文本编辑器打开 `~/.bashrc` 文件，在文件末尾添加以下内容：

```bash
export PATH=~/.texlive/2026/bin/x86_64-linux:$PATH
export MANPATH=~/.texlive/2026/texmf-dist/doc/man:$MANPATH
export INFOPATH=~/.texlive/2026/texmf-dist/doc/info:$INFOPATH
```

<!--
TODO: 我记得install-tl会提示设置这些变量，而且变量具体值取决于安装过程中输入的具体信息，那是不是像旧版那样给个例子，然后说「按以上提示添加环境变量」比较好？
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036359748
-->

保存并关闭文件后，输入以下命令使环境变量生效：

```bash
source ~/.bashrc
```

这样就会得到一个只有基础宏包的 LaTeX 编译环境，接下来下载 [BIThesis 所需宏包列表](https://github.com/BITNP/BIThesis/raw/refs/heads/main/.github/tl_packages)，然后用 tlmgr（TeX Live package manager）安装，具体命令如下：

```bash
curl -LO https://github.com/BITNP/BIThesis/raw/refs/heads/main/.github/tl_packages
# 下载 BIThesis 宏包列表
tlmgr update --self # 更新 tlmgr 自身（TeX Live 中的 tlmgr 版本较旧，更新后才能安装新版宏包）
tlmgr install $(sed -E 's/#.*//' ./tl_packages) # 安装 BIThesis 所需宏包
```

::::warning ❗ 字体问题
需要注意的是，部分 Linux 发行版（如 Debian）可能不会预装微软的 Times New Roman 字体，因此需要补装字体（注意此时需要开启 `contrib` 源），即执行如下命令：

```bash
sudo apt install ttf-mscorefonts-installer
```

按照提示确认用户协议后即可完成安装。

同时，在 Linux 上，学校要求使用的中易字库由于版权等历史原因并未预装，因此，BIThesis 会默认使用与相关字体有极小差别的开源字体。当你特别在意这些问题时，请参照 [疑难杂症 - 中文字体如何才能与 Word 模板完全相同？（换用中易字库）](../faq/word-font.md) 进行修正。
::::

即完成了在 Linux 上的 TeX Live 精简安装。
</template>

<template v-if="installPlatform === 'macos' && installMethod === 'minimal'">
<!-- 精简安装-macOS -->

精简安装会只安装 BIThesis 必要的宏包，因此占用空间会大幅缩小，仅需 **1GB** 左右的磁盘容量。

::: warning ❗ 注意
由于精简安装过程仅会安装 BIThesis 使用的宏包，因此如果你需要使用其他的 LaTeX 模板包，你需要参照后文的 [日后补充安装](./getting-started.md#日后补充安装) 部分，针对你使用的新模板进行安装。
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
在 macOS 上，学校要求使用的中易字库由于版权等历史原因并未预装，因此，BIThesis 会默认使用与相关字体有极小差别的开源字体。当你特别在意这些问题时，请参照 [疑难杂症 - 中文字体如何才能与 Word 模板完全相同？（换用中易字库）](../faq/word-font.md) 进行修正。
::::

即完成了在 macOS 上的 TeX Live 精简安装。
</template>

<template v-if="installMethod === 'minimal'">

:::: tip 日后补充安装 {#日后补充安装}

::: details 📦 补充宏包

若用别的宏包时遇到 File not found 错误，可按需[使用 tlmgr 补装](./commands.md#tlmgr)，例如：

```shell
$ latexmk
…
! LaTeX Error: File `upquote.sty' not found.
Type X to quit …
👆 发现缺失 upquote.sty，先输入“X”中止编译

👇 然后补装 https://ctan.org/pkg/upquote
$ tlmgr install upquote
…
```

:::

::: details 📖 补充本地宏包手册

以上“精简”了本地宏包手册，一般用 [texdoc 在线版](https://texdoc.org) 替代即可。

若希望在 TeX Live 安装目录保存宏包手册，可指定`--with-doc`，例如：

```shell
# 新装宏包并保存文档（若已装过，会放弃并提示 package already present）
tlmgr install --with-doc minted algorithm2e …

# 重装已有宏包，并补充文档
tlmgr install --reinstall --with-doc --no-depends ctex biblatex-gb7714-2015 …
```

::::

</template>

## 确认安装

为了保证我们 LaTeX 发行版的安装没有问题，我们需要验证一下 LaTeX 编译工具的安装情况。我们打开终端（Windows 打开 PowerShell、macOS 打开 Terminal、Linux 打开你所使用的终端模拟器），在其中输入下面的命令：

```bash
latexmk --version # 验证 latexmk 的安装
xelatex --version # 验证 xelatex 的安装
biber --version #验证 biber 的安装
```

![验证安装](../assets/install-tl/install-finish.png)

<!--
TODO: 为什么改了图片？若是单纯为了升级版本，我认为没必要，因为未来也做不到每个版本改一次图片。
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036426467
-->

出现类似的输出，说明我们编译器安装应该是没有问题的。

准备就绪后，我们还需要选择一个趁手的编辑器，请转到 [📃 配置编辑器](./configure-and-compile.md) 页面进行进一步的操作。

<style scoped>
.install-selector {
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	align-items: center;
}

.selector-group {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex-wrap: wrap;
}

.selector-label {
	flex-shrink: 0;
}

@media (max-width: 768px) {
	.install-selector {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>

<!--
TODO: 可暂缓或忽略的小问题：我记得用 naive ui 好像不需要单独写`<style>`，写的话未来升级需要检查样式，略微麻烦一点。
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3033116156
-->

<!--
TODO: 可以暂缓或忽略的小问题：这个`gap: 1.5rem`有什么依据吗？若有，最好写到注释里，方便未来维护；若无，建议删掉，保留 naive ui 默认。
https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3033101284
-->
