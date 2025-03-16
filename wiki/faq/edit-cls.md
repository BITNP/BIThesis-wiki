---
tag: bithesis
lastUpdated: 2022-03-24 09:00:26 +08:00
# commit cb928d1b23885d5f41bdcc34e24141896b4a0421
---

# 想要修改部分样式，但是找不到样式在哪里定义

将样式和内容分离是我们采用宏集的主要原因之一。

如果想要手动微调的话，可以将相应的样式文件手动拷贝到项目目录下：

```shell
# 根据模板中使用的 documentclass 选择 bitbook/bitart
# 路径仅为示例
$ kpsewhich bitbook.cls
/home/xxx/texmf/tex/latex/bithesis/bitbook.cls

$ cp /home/xxx/texmf/tex/latex/bithesis/bitbook.cls .
```

再次编译时，编译器会自动使用项目路径下的样式文件。
