# 🍖常用指令

## 清理缓存

latexmk -c 是 LaTeX 编译工具 latexmk 的命令选项之一。它的作用是清除 LaTeX 编译过程中生成的临时文件和编译产生的中间文件，以释放磁盘空间并保持项目文件夹的整洁。

_清除缓存能解决一些奇怪的问题_

```powershell
latexmk -c
```

## 统计字数

```powershell
[console]::InputEncoding = [console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
texcount -merge main.tex -chinese
```

其中`[console]::InputEncoding = [console]::OutputEncoding = [System.Text.UTF8Encoding]::new()`是为了避免powershell乱码。

如果要统计某个章节的字数，可以采用

```powershell
[console]::InputEncoding = [console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
texcount chapters\1_chapter1.tex -chinese
```

该指令会统计`chapters\1_chapter1.tex`的字数。
