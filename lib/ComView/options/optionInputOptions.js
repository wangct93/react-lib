"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _OptionInput = _interopRequireDefault(require("../../OptionInput"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  desc: '基本用法',
  render: function render() {
    return _react["default"].createElement(_OptionInput["default"], null);
  },
  code: '<OptionInput />;'
}];
exports["default"] = _default;