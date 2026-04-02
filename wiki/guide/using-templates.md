# 📁 下载与使用模板

:::warning 📖 初次使用？
若是初次使用，请先阅读本 Wiki 全部内容或快速使用指南，再开始写作。

- 阅读本 **Wiki**：[从这里开始](./intro.md)。
- **快速使用指南**：[本科][undergraduate-handbook]／[硕博][graduate-handbook]。

:::

## 下载模板包并解压

👉 最新版本：[🏫 校内开源镜像站][mirror]／[👽 校外 GitHub release][latest-release]。

下载你需要的模板包，解压到本地即可使用。

- 硕博·学位论文 — `graduate-thesis.zip`
- 本科·毕业设计
  - 论文 — `undergraduate-thesis.zip`
  - 论文（全英文专业） — `undergraduate-thesis-en.zip`
  - 外文翻译 — `paper-translation.zip`
- 本科·读书报告 — `reading-report.zip`
- 演示文档 — `presentation-slide.zip`
- 实验报告 — `lab-report.zip`

![Templates from GitHub Release](../assets/templates-from-release.png)

:::tip ❓ `STXIHEI.TTF` 是什么文件？为什么会附带在压缩包里？
`STXIHEI.TTF` 是华文细黑字体文件，学校的毕业论文要求中用到了这一字体，部分系统可能没有预装这种字体，会导致 BIThesis 编译报错。

如果你的系统没有预装这种字体（多见于 Linux 系统的用户），或者你无法确定你的系统里面是否有这个字体，请在使用模板前双击安装。
:::

:::tip ⛔ 无须克隆仓库
若从 GitHub 下载，只从 [Releases][releases] 下载压缩包即可，不需要也不建议`git clone …`。

为了方便各位同学使用，项目已按照发布 Release 流程，将每个模板单独打包，解压即可使用。而仓库围绕开发，缺少自动生成的文件，并且包含多个模板，并不方便使用。

另外，即使您日后要更新模板，也是下载新的`*.cls`替换原有的，并非`git pull`。
:::

:::danger 🚨 WSL 下的使用注意

请勿将模板放在 Windows 目录下而 TeX Live 安装在 WSL 下，这样会导致编译性能大打折扣甚至出现无法编译的情况。并且在现在的 VS Code 版本中，使用这种方式打开 Windows 下文件会出现相关提示，请不要忽略。
:::

## 后续指南

至此，您已完成[食用方法](./intro.md#食用方法)的三个步骤，应当可以开始写作了！注意写作需按 LaTeX 语法编辑`*.tex`文件。如您之前未接触过，可参考[先前《快速使用指南》](./intro.md)的第3章与第4章或本站 [👩‍🏫 LaTeX 学习与使用资源](./resources.md)。

如果遇到问题，可 [✋ 参考先前指引搜索本站、查询互联网或加群询问同学](./intro.md#help)；不过常见问题应已在模板中做出说明，请查看模板文件夹中的`README.md`和`*.tex`中的示例代码、注释。

如果你觉得缺失任何内容，或有其它意见建议，欢迎[到代码仓库提出](https://github.com/BITNP/BIThesis/issues)。

## 日后更新升级

BIThesis 会不时更新，主要是满足学校、同学新的细节要求，此外适配宏包、改善文档。如果使用遇到问题，可考虑升级模板：

1. 从上文地址下载新的文档类（论文`bithesis.cls`／幻灯片`bitbeamer.cls`／实验报告`bitreport.cls`）
2. 替换原有`*.cls`文件
3. 重新编译

更新说明请移步 [GitHub Releases][latest-release] 或[本站备份](../news/index.md)。

[mirror]: https://mirror.bit.edu.cn/github-release/BITNP/BIThesis/LatestRelease/ '北京理工大学开源镜像站 - BIThesis镜像'
[releases]: https://github.com/BITNP/BIThesis/releases/ 'Releases · BITNP/BIThesis'
[latest-release]: https://github.com/BITNP/BIThesis/releases/latest 'Latest Release · BITNP/BIThesis'
[undergraduate-handbook]: https://mirrors.ctan.org/macros/unicodetex/latex/bithesis/bithesis-handbook-undergraduate.pdf
[graduate-handbook]: https://mirrors.ctan.org/macros/unicodetex/latex/bithesis/bithesis-handbook-graduate.pdf
