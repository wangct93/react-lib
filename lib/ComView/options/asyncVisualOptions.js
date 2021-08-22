"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/message/style/css");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _AsyncVisual = _interopRequireDefault(require("../../AsyncVisual"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  desc: '当元素显示在可视区时加载',
  render: function render() {
    return _react["default"].createElement(_AsyncVisual["default"], {
      onShow: function onShow() {
        return _message2["default"].info('我在可视区了');
      }
    });
  },
  code: "<AsyncVisual onShow={() => message.info('\u6211\u5728\u53EF\u89C6\u533A\u4E86')} />"
}];
exports["default"] = _default;