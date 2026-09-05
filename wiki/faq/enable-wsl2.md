---
tag: meta
---

# WSL 是什么？如何启用 WSL 2？

WSL（Windows Subsystem for Linux）是 Windows 10 和 Windows 11 中的一个功能，允许用户在 Windows 上运行 Linux 环境。WSL 2 是 WSL 的第二个版本，提供了更好的性能和兼容性，适合用于安装和运行 TeX Live 等 Linux 软件。

:::tip 💡 更简单的方式：一键安装
在较新的 Windows 10（版本 2004 及以上）与 Windows 11 上，可以以管理员身份打开 PowerShell 或命令提示符，运行下列命令一步完成 WSL 2 与默认 Ubuntu 发行版的安装（安装完成后按提示重启电脑即可）：

```powershell
wsl --install
```

若该命令执行失败（例如系统版本较旧、或 Windows 功能启用异常），再按下方步骤手动启用。
:::

:::: details 💀 确保你已经开启 CPU 虚拟化 { style="border-color: var(--vp-custom-block-warning-border); color: var(--vp-custom-block-warning-text); background-color: var(--vp-custom-block-warning-bg);" }

CPU的虚拟化是开启 WSL 2 的前提条件之一，如果没有开启虚拟化，WSL 2 将无法正常运行。你可以通过任务管理器界面来检查 CPU 虚拟化是否已经开启：

![CPU 虚拟化检查](../assets/install-tl/wsl-vt.png)

如果你的红框处内容为“已启用”，说明你的 CPU 虚拟化已经开启，可以继续安装 WSL 2 和 TeX Live。如果显示为“未启用”，你需要进入 BIOS 设置界面来开启 CPU 虚拟化。不同品牌的电脑进入 BIOS 的方式可能不同，请根据你的电脑品牌和型号搜索相关教程来进入 BIOS 设置界面，找到 CPU 虚拟化选项并启用它。启用后保存设置并重启电脑，然后再次检查 CPU 虚拟化是否已经开启。
::::

:::warning 不要使用 WSL 1 来安装 TeX Live
WSL 1 的内核过于老旧，可能会导致 TeX Live 无法正常运行，甚至无法完成编译。因此强烈建议使用 WSL 2 来安装 TeX Live。

启用 WSL 2 需要 Windows 10 版本 2004 或更高，并且需要启用 Hyper-V 功能。如果你的系统不满足这些要求，可能无法成功启用 WSL 2。
:::

首先需要打开 Windows 功能，启用“适用于 Linux 的 Windows 子系统”和“Hyper-V”两个功能，然后按要求重启电脑。具体位置如下图所示：

![启用 WSL 和 Hyper-V](../assets/install-tl/wsl-enable.png)

接着，打开命令提示符，输入如下代码以强制启用 WSL 2：

```powershell
wsl --set-default-version 2
```

安装 WSL 2 后，我们需要安装一个 Linux 发行版，推荐使用 Ubuntu。我们可以在 Microsoft Store 中搜索“Ubuntu”，选择一个版本进行安装，或直接选择默认的 Ubuntu 24.04.1 LTS 版本，如下图。安装完成后，打开 Ubuntu 应用程序，按照提示设置用户名和密码。

![安装 Ubuntu](../assets/install-tl/wsl-install.png)

以上即为成功安装 WSL 2 虚拟机。
