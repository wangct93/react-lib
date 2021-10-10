"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("../../Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  desc: '轮播图',
  render: function render() {
    return _react["default"].createElement(_Slider["default"], null, _react["default"].createElement("div", null, "1"), _react["default"].createElement("div", null, "2"));
  }
}];
exports["default"] = _default;