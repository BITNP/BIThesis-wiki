<script setup lang="ts">
import OpenInAll from './OpenInAll.vue'
</script>
<template>
  <table style="text-align: start">
    <thead>
      <tr>
        <th>预览</th>
        <th>模板及特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src="https://s2.loli.net/2022/03/29/MbXe7dFnDNxUuTa.png" width="300px" alt="graduate-thesis" />
        </td>
        <td>
          <ul>
            <li><strong>研究生·学位论文</strong></li>
            <li>包括封面，摘要，参考文献和附录等支持</li>
            <li>包括公式，表格和图片等支持</li>
            <li>按 GB/T 7714—2015 规范编排的书目</li>
            <li>符合研究生学位论文模版的格式要求。</li>
            <li>
              2025年3月末研究生院开始使用<a
                href="https://grd.bit.edu.cn/xwgz/xwgz2/wjxz_xwgz/b119746.htm"
                title="研究生学位论文模版；北京理工大学研究生院；2025"
                >新的研究生学位论文模板</a
              >，请使用BIThesis v3.8.3或更新的版本。
            </li>
            <li><OpenInAll template="graduate-thesis" /></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://s2.loli.net/2023/04/07/zJBgZwrdtUQGNjp.png" width="300px" alt="undergraduate-thesis" />
        </td>
        <td>
          <ul>
            <li><strong>本科生·毕业设计·论文</strong></li>
            <li>包括封面，摘要，参考文献和附录等支持</li>
            <li>包括公式，表格和图片等支持</li>
            <li>按 GB/T 7714—2015 规范编排的书目</li>
            <li>符合北京理工大学本科毕业设计论文的格式要求。</li>
            <li><OpenInAll template="undergraduate-thesis" /></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://s2.loli.net/2022/09/04/kd6PDqusBciAn7Q.png" width="300px" alt="undergraduate-thesis-en" />
        </td>
        <td>
          <ul>
            <li><strong>本科生·毕业设计·论文（全英文专业）</strong></li>
            <li>包括封面，摘要，参考文献和附录等支持</li>
            <li>包括公式，表格和图片等支持</li>
            <li>按 GB/T 7714—2015 规范编排的书目</li>
            <li>符合北京理工大学本科毕业设计论文的格式要求。</li>
            <li><OpenInAll template="undergraduate-thesis-en" /></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://s2.loli.net/2023/04/07/Q7H8kYbteBldENZ.png" width="300px" alt="paper-translation" />
        </td>
        <td>
          <ul>
            <li><strong>本科生·毕业设计·外文翻译</strong></li>
            <li>由毕设模板迁移而来</li>
            <li>符合北京理工大学本科毕业设计模板的格式要求。</li>
            <li><OpenInAll template="paper-translation" /></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://s2.loli.net/2023/07/31/rITfyK2Le9NjJCk.png" width="300px" alt="reading-report" />
        </td>
        <td>
          <ul>
            <li><strong>读书报告</strong></li>
            <li>包括封面，BIT logo</li>
            <li>格式为简化版本科毕业设计</li>
            <li>适用于信息与电子学院“电磁场与电磁波”等课程和一些公选课</li>
            <li><OpenInAll template="reading-report" /></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://s2.loli.net/2022/01/02/ezCsDZnYf2LHSIk.png" width="300px" alt="presentation-slide" />
        </td>
        <td>
          <ul>
            <li><strong>演示文档</strong></li>
            <li>包括多种文字样式变化的支持</li>
            <li>CJK 字体高亮支持</li>
            <li><OpenInAll template="presentation-slide" /></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://i.loli.net/2020/03/08/txzGcKv9YSel3IX.png" width="300px" alt="lab-report" />
        </td>
        <td>
          <ul>
            <li><strong>基本实验报告</strong></li>
            <li>包括封面，BIT logo</li>
            <li>适用于无格式要求的实验报告写作</li>
            <li><OpenInAll template="lab-report" /></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>
