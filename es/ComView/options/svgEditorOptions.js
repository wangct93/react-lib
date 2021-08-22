import SvgEditor from "../../SvgEditor";
import SvgDemo from "../../assets/images/svg_demo.jpg";
import React from "react";


export default [
  {
    title:'线',
    desc:'线',
    render:() => {
      const nodes = [
        {
          value:'line',
          x1:100,
          y1:100,
          x2:200,
          y2:200,
          angle:0,
          strokeWidth:2,
          id:'1',
          strokeColor:'#ddd',
          zIndex:10,
        }
      ];
      return <SvgEditor value={nodes} height={500} />;
    },
    code:'const nodes = [\n' +
      '        {\n' +
      '          value:\'line\',\n' +
      '          x1:100,\n' +
      '          y1:100,\n' +
      '          x2:200,\n' +
      '          y2:200,\n' +
      '          angle:0,\n' +
      '          strokeWidth:2,\n' +
      '          id:\'1\',\n' +
      '          strokeColor:\'#ddd\',\n' +
      '          zIndex:10,\n' +
      '        }\n' +
      '      ];\n' +
      '      return <SvgEditor value={nodes} height={500} />;'
  },
  {
    title:'矩形',
    desc:'矩形',
    render:() => {
      const nodes = [
        {
          value:'rect',
          x:100,
          y:100,
          w:100,
          h:100,
          angle:0,
          strokeWidth:2,
          fillColor:'transparent',
          strokeColor:'#ddd',
          id:'1',
          zIndex:10,
        }
      ];
      return <SvgEditor value={nodes} height={500} />;
    },
    code:'const nodes = [\n' +
      '        {\n' +
      '          value:\'rect\',\n' +
      '          x:100,\n' +
      '          y:100,\n' +
      '          w:100,\n' +
      '          h:100,\n' +
      '          angle:0,\n' +
      '          strokeWidth:2,\n' +
      '          fillColor:\'transparent\',\n' +
      '          strokeColor:\'#ddd\',\n' +
      '          id:\'1\',\n' +
      '          zIndex:10,\n' +
      '        }\n' +
      '      ];\n' +
      '      return <SvgEditor value={nodes} height={500} />;'
  },
  {
    title:'圆',
    desc:'圆',
    render:() => {
      const nodes = [
        {
          value:'circle',
          x:100,
          y:100,
          w:100,
          h:100,
          angle:0,
          fillColor:'transparent',
          strokeColor:'#ddd',
          strokeWidth:2,
          id:'1',
          zIndex:10,
        }
      ];
      return <SvgEditor value={nodes} height={500} />;
    },
    code:'const nodes = [\n' +
      '        {\n' +
      '          value:\'circle\',\n' +
      '          x:100,\n' +
      '          y:100,\n' +
      '          w:100,\n' +
      '          h:100,\n' +
      '          angle:0,\n' +
      '          fillColor:\'transparent\',\n' +
      '          strokeColor:\'#ddd\',\n' +
      '          strokeWidth:2,\n' +
      '          id:\'1\',\n' +
      '          zIndex:10,\n' +
      '        }\n' +
      '      ];\n' +
      '      return <SvgEditor value={nodes} height={500} />;'
  },
  {
    title:'文本',
    desc:'文本',
    render:() => {
      const nodes = [
        {
          value:'text',
          x:100,
          y:100,
          angle:0,
          text:'测试数据',
          strokeColor:'#ddd',
          id:'1',
          zIndex:10,
        }
      ];
      return <SvgEditor value={nodes} height={500} />;
    },
    code:'const nodes = [\n' +
      '        {\n' +
      '          value:\'text\',\n' +
      '          x:100,\n' +
      '          y:100,\n' +
      '          angle:0,\n' +
      '          text:\'测试数据\',\n' +
      '          strokeColor:\'#ddd\',\n' +
      '          id:\'1\',\n' +
      '          zIndex:10,\n' +
      '        }\n' +
      '      ];\n' +
      '      return <SvgEditor value={nodes} height={500} />;'
  },
  {
    title:'图片',
    desc:'图片',
    render:() => {
      const nodes = [
        {
          value:'img',
          img:SvgDemo,
          x:100,
          y:100,
          w:100,
          h:100,
          angle:0,
          zIndex:10,
          id:'1',
        }
      ];
      return <SvgEditor value={nodes} height={500} />;
    },
    code:'const nodes = [\n' +
      '        {\n' +
      '          value:\'img\',\n' +
      '          img:SvgDemo,\n' +
      '          x:100,\n' +
      '          y:100,\n' +
      '          w:100,\n' +
      '          h:100,\n' +
      '          angle:0,\n' +
      '          zIndex:10,\n' +
      '          id:\'1\',\n' +
      '        }\n' +
      '      ];\n' +
      '      return <SvgEditor value={nodes} height={500} />;'
  }
];
