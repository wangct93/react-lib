import Upload from "../../Upload";
import {message} from "antd";
import React from "react";
import Slider from "../../Slider";
import Tree from "../../Tree";


export default [
  {
    title:'基本用法',
    desc:'树',
    render:() => {
      const options = [
        {
          text:'根节点',
          value:'23',
          children:[
            {
              text:'父级',
              value:'0',
              children:[
                {
                  text:'子集',
                  value:'0_0'
                },
                {
                  text:'子集2',
                  value:'0_1'
                },
              ]
            },
            {
              text:'父级1',
              value:'1',
              children:[
                {
                  text:'子集',
                  value:'1_0'
                },
                {
                  text:'子集2',
                  value:'1_1'
                },
              ]
            },
          ]
        }
      ];
      return <Tree expandLevel={0} options={options} />
    },
  },
];
