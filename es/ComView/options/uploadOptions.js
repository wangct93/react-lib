import Upload from "../../Upload";
import {message} from "antd";
import React from "react";


export default [
  {
    title:'基本用法',
    desc:'上传组件',
    render:() => {
      return <Upload onChange={(file) => message.success('收到文件，名称：' + file.name)} />
    },
    code:`<Upload onChange={(file) => message.success('收到文件，名称：' + file.name)} />`
  },
  {
    title:'显示文件列表',
    desc:'上传组件',
    render:() => {
      return <Upload showList />
    },
    code:'<Upload showList />'
  },
  {
    title:'显示文件列表 + 显示预览图',
    desc:'上传组件',
    render:() => {
      return <Upload showList showPreview />
    },
    code:'<Upload showList showPreview />'
  }
];
