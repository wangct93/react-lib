import AsyncVisual from "../../AsyncVisual";
import {message} from "antd";
import React from "react";

export default [
  {
    title:'基本用法',
    desc:'当元素显示在可视区时加载',
    render:() => {
      return <AsyncVisual onShow={() => message.info('我在可视区了')} />
    },
    code:`<AsyncVisual onShow={() => message.info('我在可视区了')} />`
  }
];
