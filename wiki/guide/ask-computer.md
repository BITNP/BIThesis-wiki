---
outline:
  level: 2 # 屏蔽人工智能回复中的标题
---

# 🤖 询问人工智能

<!-- https://github.com/BITNP/BIThesis/discussions/579 -->

如果遇到问题，你可以——

1. 搜索本站 [🥑 疑难杂症](../faq/)（搜索栏在页面上方）
2. 查询互联网及 🤖 人工智能
3. 询问同学，可加入 [🐧 QQ 群：737548118](https://jq.qq.com/?_wv=1027&k=KYDrmS5z)

下面介绍“询问人工智能”的实例。

[[toc]]

> [!IMPORTANT] 🖖 欢迎贡献
>
> 如果你估计也能帮到别人，欢迎[增改疑难解答页面](../faq/index.md#如何贡献)甚至[修改模板本身](https://github.com/BITNP/BIThesis/blob/main/DEVELOPMENT.md)。

## 用 LaTeX 实现特定效果

直接加上“LaTeX”问通用大语言模型即可。例如：

> [LaTeX 如何把`\listoffigures`加进目录？](https://www.doubao.com/thread/we453a08700029c49)

::: details 🤖 人工智能的回复

在 LaTeX 里，要把 `\listoffigures` 加入目录，可借助 `tocbibind` 宏包或者手动添加。下面为你分别介绍这两种方法：

### 方法一：使用 `tocbibind` 宏包

`tocbibind` 宏包能够自动把目录、图目录、表目录等加入主目录。下面是示例代码：

```latex
\documentclass{article}
\usepackage{tocbibind} % 加载 tocbibind 宏包

\begin{document}
\tableofcontents % 生成目录
\listoffigures % 生成图目录

\section{示例部分}
\begin{figure}[h]
  \centering
  \rule{2cm}{2cm} % 这里用一个方块代表图形
  \caption{示例图形}
\end{figure}
\end{document}
```

在这个示例中，`tocbibind` 宏包被加载之后，`\listoffigures` 就会自动被加入到主目录里。

### 方法二：手动添加

要是不想使用宏包，也能手动把 `\listoffigures` 加到目录中。示例代码如下：

```latex
\documentclass{article}

\begin{document}
\tableofcontents % 生成目录
\addcontentsline{toc}{section}{\listfigurename} % 手动添加图目录到目录
\listoffigures % 生成图目录

\section{示例部分}
\begin{figure}[h]
  \centering
  \rule{2cm}{2cm} % 这里用一个方块代表图形
  \caption{示例图形}
\end{figure}
\end{document}
```

在这段代码里，`\addcontentsline{toc}{section}{\listfigurename}` 这行代码把图目录手动添加到了主目录中。`toc` 表示要添加到目录，`section` 表示添加的条目级别，`\listfigurename` 代表图目录的名称。

你可以把上述代码复制到 LaTeX 编辑器里进行编译，这样就能看到图目录被添加到主目录中的效果了。

:::

::: tip 🧠 分析测试

1. 回复中的方法一使用[[pkg:tocbibind]]，之前没听说过，也许不兼容我加的其它宏包，先看看方法二。

2. 回复中的方法二手动添加，按照提示编辑`main.tex`，重新编译。

3. 检查 PDF，发现确实加进目录了，但没对齐，比“第1章”靠右。

4. 仔细阅读回复，注意到“`section`表示添加的条目级别”，而新加的目录项也确实和 §1.1 对齐了。

5. 改成`chapter`重试，成功。最终设置如下。

```latex
\addcontentsline{toc}{chapter}{\listfigurename}
```

:::

## 调试错误

问通用大语言模型，并尽可能附上相关代码、报错日志。

很多在线平台已经集成。

- Overleaf 每隔一段时间免费用一次，具体限制没有明写。
- [TeXPage 免费版 5 次/天](https://www.texpage.com/zh/pricing)。

（截至2025年10月）

## 使用 BIThesis 模板

[我校智能体广场的LaTeX-BIThesis帮助](https://agent.bit.edu.cn/product/llm/chat/d05ee4rha6ps7396rueg)已导入知识库，可直接使用；不过没有那么聪明，最好看一下“回答来源”……

> 请问封面这个横线中的内容不用靠左吗？

::: details 🤖 人工智能的初次回复

封面横线中的内容对齐方式可以进行设置。你可以通过`cover/valueAlign`选项来设置封面信息中值（也就是横线中的内容）的对齐方式，该选项有`c`（居中）、`l`（左对齐）、`r`（右对齐）三种可选值。不过需要注意的是，此选项仅当`cover/autoWidth = false`时生效。你可以查阅相关文档以确保设置的准确性。

📃找到 3 个回答来源

:::

回复提到“仅当……时生效”，于是选一下推荐问题：

> `cover/autoWidth`怎么设置

::: details 🤖 人工智能的补充回复

`cover/autoWidth` 选项一般不需要用户自行修改，它可以设置为 `true` 或 `false`。设置为 `true` 时，会自动计算封面中下划线的长度；若设置为 `false`，则建议配合 `cover/labelMaxWidth = ⟨ 长度 ⟩` 和 `cover/valueMaxWidth = ⟨ 长度 ⟩` 使用，以控制下划线的长度。你可以查阅相关文档以确保设置的准确性。

📃找到 3 个回答来源（和初次回复相同）

:::

最终设置如下。

```latex {4-5}
\BITSetup{
  cover = {
    …,
    autoWidth = false,
    valueAlign = l,
  },
  …
}
```

## 使用一般模板、宏包

1. 从 [texdoc 在线版](https://texdoc.org)或其它地方[下载宏包手册](../faq/where-doc.md)
2. 将问题与手册一并发给通用大语言模型

> [请问封面这个横线中的内容不用靠左吗？](https://chatglm.cn/share/F3rJt)
>
> （同时发送`bithesis.pdf`）

::: details 🤖 人工智能的回复

根据您提供的文档内容，封面横线中的内容默认对齐方式是 **居中**，而不是靠左。
**文档中相关内容**：

- **5.3.1 封面选项** 部分的 `cover/labelAlign` 选项用于设置封面信息中标签的对齐方式，其默认值为 `c`，代表 **居中** 对齐。【P14】
- **5.3.1 封面选项** 部分的 `cover/valueAlign` 选项用于设置封面信息中值的对齐方式，其默认值为 `c`，代表 **居中** 对齐。【P14】

**结论**：

封面横线中的内容默认是居中对齐的，如果您需要将其改为靠左对齐，可以修改 `cover/labelAlign` 和 `cover/valueAlign` 选项的值为 `l`，代表 **左对齐**。

:::

然后选择页码，跳转阅读手册原文。

## 修改 BIThesis 模板

1. 在`bithesis.cls`中找到相关代码
2. 将问题与代码一并发给通用大语言模型

> [LaTeX 插图列表的编号既有一位数又有两位数，目前设置如下，编号与标题间距固定，导致标题没对齐。如何让标题左对齐？](https://yuanbao.tencent.com/bot/app/share/chat/S2RzZyfJtmeK)
>
> ```latex
> \titlecontents{figure}[0pt]{\songti\zihao{-4}}
>   {\figurename~\thecontentslabel\quad}{\hspace*{-1.5cm}}
>   {\hspace{.5em}\titlerule*{.}\contentspage}
> ```

最初未启用“深度思考”，回复太离谱，于是启用重试。

::: details 🤖 人工智能“深度思考”后的回复

要让插图列表的标题左对齐，无论编号位数如何，可以通过固定编号的显示宽度实现。修改你的 `\titlecontents` 设置如下：

```latex
\usepackage{titletoc}
% 在导言区添加以下代码：

\titlecontents{figure}[0pt]% 左缩进设为0
{\songti\zihao{-4}\filright}% 整体格式（右对齐编号部分）
{\figurename~\makebox[2em][l]{\thecontentslabel}}% 编号格式（固定2em左对齐）
{}% 无编号条目格式（通常图表都有编号）
{\titlerule*{.}\contentspage}% 填充和页码格式
```

原理解释：

1. `\makebox[2em][l]` 为编号创建固定宽度（2em）的盒子，强制编号左对齐，无论1位还是2位数字都会占满这个宽度
2. 删除原代码中破坏对齐的 `\hspace*{-1.5cm}`，改用固定宽度策略
3. `\filright` 确保编号部分右对齐，标题文本从固定位置开始

效果：

```
图 1    标题内容.............1
图 10   标题内容.............5
```

调整建议：
如果发现间距不合适，可通过修改 `2em` 的数值适配你的具体字体宽度。建议先测试 2em，如果两位数显示不全，可尝试增大到 3em。

:::

::: tip 🧠 分析测试

1. 回复中改了三处，看起来只有`\makebox`这处相关，先忽略其它两处看看。
2. 在[[texdoc:lshort-zh-cn]]中搜索`\makebox`，发现有相关介绍，看来比较可靠。
3. 编辑`main.tex`在导言区粘贴原始代码，然后按提示给`\thecontentslabel`套上`\makebox[2em][l]{…}`，重新编译。
4. 检查 PDF，效果还行。
5. 再微调下具体数值，最终设置如下。

```latex {2}
\titlecontents{figure}[0pt]{\songti\zihao{-4}}
    {\figurename~\makebox[4em][l]{\thecontentslabel}}{\hspace*{-1.5cm}}
    {\hspace{.5em}\titlerule*{.}\contentspage}
```

:::
