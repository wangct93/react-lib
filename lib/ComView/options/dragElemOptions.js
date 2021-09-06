"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DragElem = _interopRequireDefault(require("../../DragElem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table data={dataSource} columns={columns} />;',
  desc: '简单的表格',
  render: function render() {
    return _react["default"].createElement("div", {
      className: "test-drag-box fixed"
    }, _react["default"].createElement(_DragElem["default"], {
      className: "test-drag-elem"
    }, _react["default"].createElement("div", null)));
  }
}];
exports["default"] = _default;