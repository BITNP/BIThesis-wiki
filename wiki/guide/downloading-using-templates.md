# 📁 下载与使用模板

:::warning 📖 初次使用？
若是初次使用，请先阅读本 Wiki 全部内容或快速使用指南，再开始写作。

- 阅读本 **Wiki**：[从这里开始](./preface.md)。
- **快速使用指南**：[本科][undergraduate-handbook]／[硕博][graduate-handbook]。

:::

## 方案1：从北京理工大学开源镜像站下载

使用北京理工大学校园网的同学可以从北京理工大学开源镜像站下载。

最新版本：👉 [北京理工大学开源镜像站 - BIThesis镜像][mirror]。

- 模板包·本科·毕业设计·论文 — `undergraduate-thesis.zip`
- 模板包·硕博·学位论文 — `graduate-thesis.zip`
- 模板包·实验报告 — `lab-report.zip`
- ……

## 方案2：到 Github Releases 下载模板包并解压

最新版本：👉 [BIThesis - Latest Release][latest-release]

前往 [GitHub Releases][releases]，下载你需要的模板包，解压到本地即可使用。

- 模板包·本科·毕业设计·论文 — `undergraduate-thesis.zip`
- 模板包·硕博·学位论文 — `graduate-thesis.zip`
- 模板包·实验报告 — `lab-report.zip`
- ……

![Templates from GitHub Release](../assets/templates-from-release.png)

:::tip ⛔ 无须克隆仓库
只从 [GitHub Releases][releases] 下载压缩包即可，不需要也不建议`git clone …`。

为了方便各位同学使用，项目已按照发布 Release 流程，将每个模板单独打包，解压即可使用。而仓库围绕开发，缺少自动生成的文件，并且包含多个模板，并不方便使用。

另外，即使您日后要更新模板，也是从 [Releases][releases] 下载`bithesis.cls`替换原有的，并非`git pull`。
:::

## 日后更新升级

BIThesis 会不时更新，主要是满足学校、同学新的细节要求，此外适配宏包、改善文档。如果使用遇到问题，可考虑升级模板：

1. 从 [北京理工大学开源镜像站 - BIThesis镜像][mirror] 或 [Releases][releases] 下载`bithesis.cls`（或其它相应文档类）
2. 替换原有文件
3. 重新编译

[mirror]: https://mirror.bit.edu.cn/github-release/BITNP/BIThesis/LatestRelease/ '北京理工大学开源镜像站 - BIThesis镜像'
[releases]: https://github.com/BITNP/BIThesis/releases/ 'Releases · BITNP/BIThesis'
[latest-release]: https://github.com/BITNP/BIThesis/releases/latest 'Latest Release · BITNP/BIThesis'
[undergraduate-handbook]: https://github.com/BITNP/BIThesis/releases/latest/download/undergraduate-handbook.pdf
[graduate-handbook]: https://github.com/BITNP/BIThesis/releases/latest/download/graduate-handbook.pdf
