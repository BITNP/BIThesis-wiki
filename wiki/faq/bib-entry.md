---
tag:
  - biblatex-gb7714-2015
---

# 参考文献书写示例

<!--
  https://github.com/BITNP/BIThesis/commit/cf34b13442542834a3e24ce36a235a00a39383fa
  https://github.com/BITNP/BIThesis/blob/main/templates/reading-report/misc/2_reference.tex
  https://github.com/BITNP/BIThesis/blob/main/templates/reading-report/misc/ref.bib
-->

利用以下代码，可以生成北京理工大学本科Word模板中“不同类别文献书写规范要求”的示例。

更多例子与说明请参考：

- [GB/T 7714—2015《信息与文献　参考文献著录规则》](https://lib.tsinghua.edu.cn/wj/GBT7714-2015.pdf)
- [[texdoc:biblatex-gb7714-2015]]

## 期刊

主要责任者. 文献题名[J]. 刊名, 出版年份, 卷号(期号): 起止页码.

- 余雄庆. 飞机总体多学科设计优化的现状与发展方向[J]. 南京航空航天大学学报, 2008(04): 417-426.
- Hajela P, Bloebaum C L, Sobieszczanski-Sobieski J. Application of Global Sensitivity Equations in Multidisciplinary Aircraft Synthesis[J]. Journal of Aircraft, 1990, 27(12): 1002-110.

```bibtex
@article{yuFeiJiZongTiDuoXueKeSheJiYouHuaDeXianZhuangYuFaZhanFangXiang2008,
  title = {飞机总体多学科设计优化的现状与发展方向},
  author = {余, 雄庆},
  date = {2008},
  journaltitle = {南京航空航天大学学报},
  pages = {417--426},
  issn = {1005-2615},
  url = {https://kns.cnki.net/kcms/detail/detail.aspx?filename=NJHK200804000&dbcode=CJFQ&dbname=CJFD2008&v=},
  urldate = {2020-02-29},
  keywords = {aircraft design,multidisciplinary design optimization,optimization,优化,多学科设计优化,飞行器设计},
  langid = {中文;},
  number = {04}
}
@article{Hajela2012Application,
  title={Application of Global Sensitivity Equations in Multidisciplinary Aircraft Synthesis},
  author={Hajela, P. and Bloebaum, C. L. and Sobieszczanski-Sobieski, Jaroslaw},
  journal={Journal of Aircraft},
  volume={27},
  number={12},
  pages = {1002-110},
  year={1990},
}
```

## 普通图书

主要责任者. 文献题名[M]. 出版地: 出版者, 出版年: 起止页码.

- 张伯伟. 全唐五代诗格会考[M]. 南京: 江苏古籍出版社, 2002.
- O’BRIEN J A. Introduction to information systems[M]. 7th ed. Burr Ridge, III: Irwin, 1994.

```bibtex
@book{张伯伟2002全唐五代诗格会考,
  title={全唐五代诗格会考},
  author={张伯伟},
  publisher={江苏古籍出版社},
  location={南京},
  year={2002},
  language={zh},
  keywords={book},
}
@book{OBRIEN1994Aircraft,
  title={Introduction to information systems},
  author={O'BRIEN, James A},
  location={$\text{7}^\text{th}$ ed. Burr Ridge, III},
  publisher={Irwin},
  year={1994},
  keywords={book},
}
```

## 会议论文集

主要责任者．题名:其他题名信息[C]. 出版地: 出版者, 出版年.

- 雷光春. 综合湿地管理: 综合湿地管理国际研讨会论文集[C]. 北京: 海洋出版社, 2012.

```bibtex
@proceedings{雷光春2012,
  author = {雷光春},
  title = {综合湿地管理: 综合湿地管理国际研讨会论文集},
  location = {北京},
  publisher = {海洋出版社},
  year = {2012},
}
```

## 专著中析出的文献

析出文献主要责任者. 析出题名[M]//专著主要责任者. 专著题名. 出版地: 出版者, 出版年: 起止页码.

- 白书农. 植物开花研究[M]//李承森. 植物科学进展. 北京: 高等教育出版社, 1998: 146-163.

```bibtex
@inbook{白书农,
  title={植物开花研究},
  author={白书农},
  location = {北京},
  publisher={高等教育出版社},
  year={1998},
  pages = {146-163},
  editor = {李承森},
  booktitle = {植物科学进展},
}
```

## 学位论文

主要责任者. 文献题名[D]. 保存地: 保存单位, 年份.

- 张和生. 嵌入式单片机系统设计[D]. 北京: 北京理工大学, 1998.
- Sobieski I P. Multidisciplinary Design Using Collaborative Optimization[D]. United States – California: Stanford University, 1998.

```bibtex
@phdthesis{zhanghesheng,
  author = {张和生},
  title = {嵌入式单片机系统设计},
  location = {北京},
  school = {北京理工大学},
  year = {1998},
  language={zh},
  keywords={thesis},
}
@phdthesis{Sobieski,
  author = {Sobieski, I. P.},
  title = {Multidisciplinary Design Using Collaborative Optimization},
  location = {United States -- California},
  school = {Stanford University},
  year = {1998},
  keywords={thesis},
}
```

## 报告

主要责任者. 文献题名[R]. 报告地: 报告会主办单位, 年份.

- 冯西桥. 核反应堆压力容器的 LBB 分析[R]. 北京: 清华大学核能技术设计研究院, 1997.
- Sobieszczanski-Sobieski J. Optimization by Decomposition: A Step from Hierarchic to Non-Hierarchic Systems[R]. NASA CP-3031, 1989.

```bibtex
@techreport{fengxiqiao,
  author = {冯西桥},
  title = {核反应堆压力容器的LBB分析},
  address = {北京},
  institution = {清华大学核能技术设计研究院},
  year = {1997},
  language={zh},
  keywords={techreport},
}
@techreport{Sobieszczanski,
  author = {Sobieszczanski-Sobieski, J.},
  title = {Optimization by Decomposition: A Step from Hierarchic to Non-Hierarchic Systems},
  institution = {NASA CP-3031},
  year = {1989},
  keywords={techreport},
}
```

## 专利文献

专利所有者. 专利题名:专利号[P]. 公告日期或公开日期[引用日期]. 获取和访问路径. 数字对象唯一标识符.

- 姜锡洲. 一种温热外敷药制备方案: 881056078[P]. 1983-08-12.

```bibtex
@patent{jiangxizhou,
  author = {姜锡洲},
  title = {一种温热外敷药制备方案},
  number = {881056078},
  date = {1983-08-12},
}
```

::: tip 加空格换行

如果专利号太长，想提前换行，请直接加空格。

<!-- https://github.com/BITNP/BIThesis/discussions/566 -->

:::

::: tip quirks 模式

以上`@patent`默认按国标格式；而目前北理工官方示例的专利格式如下。

- 姜锡洲. 一种温热外敷药制备方案[P], 881056078, 1983-08-12.

考虑到二者差异不大，并且[本科教务部反馈不一致处以国标为准](https://github.com/BITNP/BIThesis/discussions/401)，模板默认按国标处理。若需按学校示例，请编辑`main.tex`，设置`quirks=true`：

```latex
\documentclass[…]{bithesis} % [!code --]
\documentclass[…, quirks=true]{bithesis} % [!code ++]
```

:::

## 国际、国家标准

主要责任人. 题名: 其他题名信息[S]. 出版地: 出版者, 出版年: 引文页码.

- 全国信息与文献标准化技术委员会. 文献著录: 第 4 部分 非书资料: GB/T 3792.4-2009[S]. 北京: 中国标准出版社, 2010: 3.

```bibtex
@standard{GB/T3792.4-2009,
  publisher ={中国标准出版社},
  title={全国信息与文献标准化技术委员会. 文献著录: 第4部分$\,$非书资料: GB/T 3792.4-2009},
  location = {北京},
  year={2010},
  language={zh},
  pages = {3},
  keywords={standard},
}
```

## 报纸文章

主要责任者. 文献题名[N]. 报纸名, 年(期): 页码.

- 谢希德. 创造学习的思路[N]. 人民日报, 1998-12-25(10).

```bibtex
@newspaper{xiexide,
  author = {谢希德},
  title={创造学习的思路},
  date={1998-12-25},
  number = {10},
  journal = {人民日报},
  keywords = {newspaper},
}
```

## 电子文献

主要责任者. 电子文献题名[文献类型/载体类型]. (发表或更新日期) [引用日期]. 获取和访问路径. 数字对象唯一标识符.

- 姚伯元. 毕业设计（论文）规范化管理与培养学生综合素质[EB/OL]. 中国高等教育网教学研究. (2005-02-02) [2013-03-26]. https://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680.

```bibtex
@online{yaoboyuan,
  author = {姚伯元},
  title = {毕业设计（论文）规范化管理与培养学生综合素质},
  organization = {中国高等教育网教学研究},
  date = {2005-02-02},
  url     = {https://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680},
  urldate = {2013-03-26},
  keywords = {online},
}
```
