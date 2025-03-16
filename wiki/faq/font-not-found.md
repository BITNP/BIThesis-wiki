---
title: 字体缺失，编译失败
tag: font
lastUpdated: 2023-04-16 09:46:14 +08:00
# commit d79fb16c39401332e4fe858a8e6b84c14da27574
---

一般情况下，如果你在编译「毕业设计论文」模板时出现了类似下面的编译报错：

```txt
Package fontspec Error: The font "STXihei" cannot be found. ...
```

这是由于你的电脑中尚未安装「华文细黑」这一字体，或你的电脑上安装的「华文细黑」字体文件名称不是 `STXIHEI.TTF`，导致 LaTeX 编译器找不到这一字体，也就导致无法正常编译模板。（毕业论文模板的封面中，中文标题要求字体为「华文细黑」。）

你可以通过下面的方法对这一问题进行排查。首先，在终端中运行：

```powershell
fc-list :lang-zh > fclist.txt
```

这一命令会将你系统中安装的字体全部列出并保存在你执行命令所在目录下的 `fclist.txt` 文件中，你可以用文本编辑器打开这一文件，全局搜索「华文细黑」：

![Font spec output on Windows](https://i.loli.net/2020/03/06/zbvhqZ4OYAE6s85.png)

如果你发现自己系统中并没有这一字体，需要手动安装，那么你需要确保安装之后字体文件的名称为 `STXIHEI.TTF`。你可以在 Windows 的 `C:\Windows\Fonts` 目录下找到你系统全局安装的字体，找到「华文细黑」并「右键 » 属性」，确认如下图所示：

<img src="https://user-images.githubusercontent.com/32114380/75876177-1f13b000-5e50-11ea-83f0-dd1595073a3d.png" alt="华文黑体字体文件" width="400px" height="auto"/>

之后，重启电脑，刷新字体缓存，确认编译状况。
