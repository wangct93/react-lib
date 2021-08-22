import Select from "../../Select";
import React from "react";

export default [
  {
    title:'基本用法',
    desc:'基本用法',
    render:() => {
      const options = [
        {
          text:'Jack',
          value:'Jack',
        },
        {
          text:'Lucy',
          value:'Lucy',
        },
        {
          text:'yiminghe',
          value:'yiminghe',
        }
      ];
      return <Select options={options} initValue />;
    },
    code:'const options = [\n' +
      '        {\n' +
      '          text:\'Jack\',\n' +
      '          value:\'Jack\',\n' +
      '        },\n' +
      '        {\n' +
      '          text:\'Lucy\',\n' +
      '          value:\'Lucy\',\n' +
      '        },\n' +
      '        {\n' +
      '          text:\'yiminghe\',\n' +
      '          value:\'yiminghe\',\n' +
      '        }\n' +
      '      ];\n' +
      '      return <Select options={options} initValue />;',
  }
];
