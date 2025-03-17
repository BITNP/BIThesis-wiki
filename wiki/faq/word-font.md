---
tag: font
---

# 如何采用与 Word 相同的中文字体？

首先需要明确的是，我们所指的 Word 中的中文字体属于「中易字库」。

对于 Windows 用户，一般无需修改设置，开箱即用。

对于 Linux 和 macOS 用户，由于版权问题，系统中并不包含中易字库。因此，用户有两种选择：

- 手动在系统中安装中易字库（一般包括 SimSun、SimHei、KaiTi、FangSong 等）。**请注意，是 KaiTi 而不是 SimKai。**并通过 `\documentclass[…, ctex={fontset=windows}]{bithesis}` 选项强制使用中易字库。

- 在 Windows 系统下编译最终的 PDF 文件。

此外，对于 WSL 用户，你可以将 Windows 的字体目录软链接到 WSL 的字体目录，直接使用 Windows 下的字体文件。通过 WSL 的命令行按序执行：

```shell
sudo ln -s /mnt/c/Windows/Fonts /usr/share/fonts/win-fonts
fc-cache -fv # 刷新字体缓存
```

之后通过 `\documentclass[…, ctex={fontset=windows}]{bithesis}` 选项强制使用中易字库即可。
