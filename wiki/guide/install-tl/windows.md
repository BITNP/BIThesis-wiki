# 🍌 Windows 安装 LaTeX 环境

## 全量安装 {#full}

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

<!--
TODO: 我觉得各平台精简安装这几段新版明显不如旧版啊。旧版有截图，有明确分步，还提示了耗时步骤大概要等多久；新版基本都没有，是没写全吗？

（要是已经写全了，我再提具体建议。）

https://github.com/BITNP/BIThesis-wiki/pull/601#discussion_r3036419745
-->

## 精简安装 {#minimal}

精简安装会只安装 BIThesis 必要的宏包，因此占用空间会大幅缩小，仅需 **1GB** 左右的磁盘容量。

::: warning ❗ 注意
由于精简安装过程仅会安装 BIThesis 使用的宏包，因此如果你需要使用其他的 LaTeX 模板包，你需要参照后文的 [日后补充安装](../getting-started.md#日后补充安装) 部分，针对你使用的新模板进行安装。
:::

先下载并运行 [`install-tl-windows.exe`](https://mirror.ctan.org/systems/texlive/tlnet/install-tl-windows.exe)，只是在安装过程中需要修改相关参数，具体步骤如下：

弹出 "TeX Live 安装程序"时，单击 `高级` 按钮。

修改界面内选项如下图：

![Windows 精简安装高级选项](../../assets/install-tl/advanced.png)

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

<!--@include: ./minimal-tip.part.md-->
