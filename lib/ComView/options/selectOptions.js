"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Select = _interopRequireDefault(require("../../Select"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  desc: '基本用法',
  render: function render() {
    var options = [{
      text: 'Jack',
      value: 'Jack'
    }, {
      text: 'Lucy',
      value: 'Lucy'
    }, {
      text: 'yiminghe',
      value: 'yiminghe'
    }];
    return _react["default"].createElement(_Select["default"], {
      options: options,
      initValue: true
    });
  },
  code: 'const options = [\n' + '        {\n' + '          text:\'Jack\',\n' + '          value:\'Jack\',\n' + '        },\n' + '        {\n' + '          text:\'Lucy\',\n' + '          value:\'Lucy\',\n' + '        },\n' + '        {\n' + '          text:\'yiminghe\',\n' + '          value:\'yiminghe\',\n' + '        }\n' + '      ];\n' + '      return <Select options={options} initValue />;'
}];
exports["default"] = _default;