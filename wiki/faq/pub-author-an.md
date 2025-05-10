---
tag:
  - pub
  - bithesis
---

# 成果清单`pub.bib`怎么标`author+an`？

## 生成代码

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import PubAuthorAnnotation from '../.vitepress/theme/PubAuthorAnnotation.vue'

const generated = useTemplateRef('generated')
</script>

<!-- 为方便复制，牺牲语法高亮 -->

```bibtex-vue {2}
{{ generated?.code }}
```

<PubAuthorAnnotation ref="generated" />

## 用法说明

> [!TIP]
> 以下摘自[[texdoc:bithesis]]。

### `author+an`字段

```bibtex {4}
@article{key,
  title = {标题},
  author = {张三 and 李杰 and 罗运军},
  author+an = {1:myself="\Author"},
}
```

以上这样的`author+an`字段用于标注（annotate）论文作者的位置，其中

- `1`——论文作者的位置，即论文作者的位置是第1个。
- `myself`——[[pkg:bithesis]]固定标记，不需要修改。
- `\Author`——[[pkg:bithesis]]提供的 LaTeX 命令，普通模式显示作者姓名，盲审模式显示`第一作者`，更多用法见下。

### `\Author`和`\AuthorEn`命令

```latex
\Author[⟨n（表示第几作者，默认为 1）⟩][⟨覆盖普通模式下内容⟩][⟨覆盖盲审模式下内容⟩]
```

#### 使用示例

| 命令                      | 普通模式下 | 盲审模式下      |
| ------------------------- | ---------- | --------------- |
| `\Author`                 | 作者姓名   | `第一作者`      |
| `\Author[][][第一发明人]` | 作者姓名   | `第一发明人`    |
| `\Author[2]`              | 作者姓名   | `第二作者`      |
| `\Author[][][共同二作]`   | 作者姓名   | `共同二作`      |
| `\AuthorEn`               | 作者姓名   | `First Author`  |
| `\AuthorEn[2]`            | 作者姓名   | `Second Author` |

#### 详细解释

- **普通模式**

  - 默认输出作者姓名。

    （作者姓名由用户在`info/author`中配置。）

  - 如果指定了覆盖普通模式下内容，则输出该覆盖内容。

- **盲审模式**

  - 默认输出「第n作者」。

    （具体情况：`\Author`输出中文，如`第一作者`；`\AuthorEn`输出英文，如`First Author`。）

  - 如果指定了覆盖盲审模式下内容，则输出覆盖内容。
