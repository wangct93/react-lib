"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/message/style/css");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _Upload = _interopRequireDefault(require("../../Upload"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  desc: '上传组件',
  render: function render() {
    return _react["default"].createElement(_Upload["default"], {
      onChange: function onChange(file) {
        return _message2["default"].success('收到文件，名称：' + file.name);
      }
    });
  },
  code: "<Upload onChange={(file) => message.success('\u6536\u5230\u6587\u4EF6\uFF0C\u540D\u79F0\uFF1A' + file.name)} />"
}, {
  title: '显示文件列表',
  desc: '上传组件',
  render: function render() {
    return _react["default"].createElement(_Upload["default"], {
      showList: true
    });
  },
  code: '<Upload showList />'
}, {
  title: '显示文件列表 + 显示预览图',
  desc: '上传组件',
  render: function render() {
    return _react["default"].createElement(_Upload["default"], {
      showList: true,
      showPreview: true
    });
  },
  code: '<Upload showList showPreview />'
}];
exports["default"] = _default;