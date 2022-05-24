import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

// TODO:
const items: TabItem[] = [
  {
    id: 'UT',
    label: '本科生毕业设计',
    preview_img: 'https://i.loli.net/2020/03/01/hISQql1W6oFgKsC.png',
    full_name: "",
    features: [
      "包括封面，摘要，参考文献和附录等支持",
      "包括公式，表格和图片等支持",
      "按 GBT7714-2015 规范编排的参考文献",
      "符合北京理工大学本科毕业设计论文的格式要求。"
    ],
    overleaf: "https://www.overleaf.com/read/bkpwbgcsmkcr"
  },
  {
    id: 'MT',
    label: '研究生学位论文',
    preview_img: 'https://s2.loli.net/2022/03/29/MbXe7dFnDNxUuTa.png',
    full_name: "",
    features: [],
    overleaf: "https://www.overleaf.com/read/xmtqpngsbfgh",
  },
  {
    id: 'UPR',
    label: '本科生开题报告',
    preview_img: 'https://i.loli.net/2020/02/05/HfZUaGqWSjrATbe.png',
    full_name: "",
    features: [],
    overleaf: "https://www.overleaf.com/latex/templates/bei-jing-li-gong-da-xue-ben-ke-sheng-bi-ye-lun-wen-kai-ti-bao-gao-mo-ban/dgqdjptfqtrn",
  },
  {
    id: 'PT',
    label: "本科毕设外文翻译",
    preview_img: 'https://s2.loli.net/2022/01/01/q1sxEVtorRDOFcJ.png',
    full_name: "",
    features: [],
    overleaf: "https://www.overleaf.com/latex/templates/bei-jing-li-gong-da-xue-ben-ke-sheng-bi-ye-lun-wen-kai-ti-bao-gao-mo-ban/dgqdjptfqtrn",
  },
  {
    id: 'LR',
    label: '实验报告模板',
    preview_img: 'https://i.loli.net/2020/03/08/txzGcKv9YSel3IX.png',
    full_name: "",
    features: [],
    overleaf: "https://www.overleaf.com/latex/templates/bei-jing-li-gong-da-xue-ben-ke-sheng-bi-ye-lun-wen-kai-ti-bao-gao-mo-ban/dgqdjptfqtrn",
  },
  {
    id: 'PS',
    label: '演示文档模板',
    preview_img: 'https://s2.loli.net/2022/01/02/ezCsDZnYf2LHSIk.png',
    full_name: "",
    features: [],
    overleaf: "https://www.overleaf.com/latex/templates/bei-jing-li-gong-da-xue-ben-ke-sheng-bi-ye-lun-wen-kai-ti-bao-gao-mo-ban/dgqdjptfqtrn",
  }

]

interface TabItem {
  id: string;
  label: string;
  full_name: string;
  preview_img: string;
  features: string[];
  overleaf: string;
  reference?: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            items.map((item, index) => <Tab label={item.label} {...a11yProps(index)} />)
          }
        </Tabs>
      </Box>
      {

        items.map((item, index) => <TabPanel value={value} index={index}>
          <img width="300px" src={item.preview_img} />
        </TabPanel>)
      }
    </Box>
  );
}
