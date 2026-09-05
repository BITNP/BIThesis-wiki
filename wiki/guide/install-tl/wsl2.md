# 🍌 WSL2 安装 LaTeX 环境

## 全量安装 {#full}

使用北京理工大学校园网的同学可以直接使用我校官方 TeX Live 镜像进行安装，外网则可使用 CERNET 联合镜像站的 TeX Live 镜像进行安装。点击后面的链接即可从镜像站下载`texlive.iso`：[北理校内镜像站（校园网）](https://mirrors.bit.edu.cn/CTAN/systems/texlive/Images/texlive.iso)／[CERNET 联合镜像站（外网）](https://mirrors.cernet.edu.cn/CTAN/systems/texlive/Images/texlive.iso)。需注意，在安装过程中请使用合适的权限，必要时请以管理员身份运行安装程序。

如果你不知道 WSL，或是不知道如何安装 WSL，可以先参考[WSL 是什么？如何启用 WSL 2？](../../faq/enable-wsl2.md)来了解一下。

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
