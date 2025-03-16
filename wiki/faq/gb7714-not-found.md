---
lastUpdated: 2023-12-13 13:47:53 +08:00
# commit 8749324e0ececc2788ef82c6e3e2a55cc3914c94
---

# 出现参考文献样式找不到的编译失败提示

毕业论文的参考文献使用了 [biblatex-gb7714-2015](https://github.com/hushidong/biblatex-gb7714-2015) 宏包生成符合《GB/T 7714-2015 信息与文献 参考文献著录规则》规定的参考文献。这一参考文献宏包仅适用于最新版本的 TeX Live 发行版（TeX Live 2019）。如果你在编译过程中出现了类似如下的报错：

```txt
Error: Style 'gb7714-2015' not found.
```

那么就是由于你的 TeX Live 发行版中没有包含这一宏包。需要你手动将 TeX Live 更新为 2019 版本，或手动下载相应的宏包。（跨版本升级 TeX Live 可能出现一些问题，推荐卸载重新安装。）

之后，在开始菜单中寻找 TeX Live Manager，点击打开，并搜索 `biblatex-gb7714-2015`，有如下输出表明你的宏包安装成功。

![Installation of biblatex-gb7714-2015](https://i.loli.net/2020/03/06/6UdnGP4jDeucfC7.png)
