# BIThesis 系列视频教程 <Badge type="danger" text="已不推荐" />

:::tip 🎞 视频教程
BIThesis 主创团队也联合北京理工大学「京工拾光工作室」为各位初入 LaTeX 世界的同学制作了详细周全的系列视频教程，如果文字版 BIThesis 使用教程看起来吃力乏味，同学们也可以来这里或者直接去哔哩哔哩平台在线观看 BIThesis 的系列视频教程。
:::

:::danger `v3.x.x` 观看提示
此系列视频制作于 2020 年年初，主要针对 `v1.x` 版本（2019 - 2020）的 BIThesis 进行解说。但在 `v3.x.x` 版本（2022 - 今）中，BIThesis 的使用方式与原有版本有些出入（详见下文）。我们十分建议你在观看视频的同时，也阅读相应的 [文档指南](/guide/intro) 作为补充。
:::

## BIThesis `v3.x.x`、`v2.x.x` 和 `v1.x.x` 的区别是什么？

:::warning
此部分内容更新于 2021 年，主要留存给历史用户查阅。`v1.x.x` 版本已经不再维护。
:::

**首先，推荐使用最新版本（代码托管在 Github 上）的 BIThesis。**

`v3.x.x` 版本的使用方式比较简单，在有任意 LaTeX 发行版的基础上，直接下载模板使用即可。

~~对于用户来说，V2.x 的改动 **在于要求用户使用 2021 年及以上版本的 LaTeX 环境，或者手动安装 [bithesis 宏集](https://ctan.org/pkg/bithesis?lang=en)；并使用 [V2.x 以上的最新 LaTeX 模板](https://github.com/BITNP/BIThesis/releases)** 。~~

**V3/V2 版本其实是对 V1 的重构，以提供更简介的模板和更方便的更新方式。** 如果你使用过 V1 版本，就会发现在模板开始，有较长的一段文档样式定义代码。这些代码并不需要作为使用者的你直接修改。但是随着版本的迭代，这部分的代码有可能会被开发者进行修改。为了更新本地的版本，作为使用者的你就不得不将自己的论文重新拷贝到新版本的模板中。

因此 `v2.x.x` 着力解决这一问题。为此我们将样式文件迁移到了自己的 [宏集 bithesis](https://ctan.org/pkg/bithesis?lang=en) 中。bithesis 宏集将随着 TeX 发型版一起被分发到下游，进而供我们在模板中使用。这样，每次的样式更新就只需要用户更新 bithesis 宏集，而不影响用户正在编写的 `*.tex` 文件。

另外，`v2.x.x` 版本会提升可配置性的问题，并引入最新的更新。

`v3.x.x` 重写了全部代码，引入了更多功能。

## 视频章节

- [第一节 综述](episode-1.md)
- [第二节 LaTeX 的下载和安装](episode-2.md)
- [第三节 LaTeX 基本介绍](episode-3.md)
- [第四节 模板的下载与使用](episode-4.md)
- [第五节 格式转化](episode-5.md)
- [第六节 项目介绍与疑难解惑](episode-6.md)

## BIThesis 预告片 <Badge text="大误"/>

<div id="embed-video">
  <iframe src="//player.bilibili.com/player.html?aid=925350795&bvid=BV1GT4y1V78d&cid=181709301&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" ></iframe>
</div>
