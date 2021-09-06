import React from "react";
import DragElem from "../../DragElem";

export default [
  {
    title:'基本用法',
    code:'const dataSource = [\n' +
      '        {\n' +
      '          key: \'1\',\n' +
      '          name: \'胡彦斌\',\n' +
      '          age: 32,\n' +
      '          address: \'西湖区湖底公园1号\',\n' +
      '        },\n' +
      '        {\n' +
      '          key: \'2\',\n' +
      '          name: \'胡彦祖\',\n' +
      '          age: 42,\n' +
      '          address: \'西湖区湖底公园1号\',\n' +
      '        },\n' +
      '      ];\n' +
      '\n' +
      '      const columns = [\n' +
      '        {\n' +
      '          title: \'姓名\',\n' +
      '          field: \'name\',\n' +
      '          key: \'name\',\n' +
      '        },\n' +
      '        {\n' +
      '          title: \'年龄\',\n' +
      '          field: \'age\',\n' +
      '          key: \'age\',\n' +
      '        },\n' +
      '        {\n' +
      '          title: \'住址\',\n' +
      '          field: \'address\',\n' +
      '          key: \'address\',\n' +
      '        },\n' +
      '      ];\n' +
      '\n' +
      '      return <Table data={dataSource} columns={columns} />;',
    desc:'简单的表格',
    render:() => {
      return <div className={"test-drag-box fixed"}>
        <DragElem  className={"test-drag-elem"}>
          <div></div>
        </DragElem>
      </div>;
    },
  },
];
