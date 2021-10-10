import Upload from "../../Upload";
import {message} from "antd";
import React from "react";
import Slider from "../../Slider";


export default [
  {
    title:'基本用法',
    desc:'轮播图',
    render:() => {
      return <Slider >
        <div>1</div>
        <div>2</div>
      </Slider>
    },
  },
];
