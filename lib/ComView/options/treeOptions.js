"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tree = _interopRequireDefault(require("../../Tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  desc: '树',
  render: function render() {
    var options = [{
      text: '根节点',
      value: '23',
      children: [{
        text: '父级',
        value: '0',
        children: [{
          text: '子集',
          value: '0_0'
        }, {
          text: '子集2',
          value: '0_1'
        }]
      }, {
        text: '父级1',
        value: '1',
        children: [{
          text: '子集',
          value: '1_0'
        }, {
          text: '子集2',
          value: '1_1'
        }]
      }]
    }];
    return _react["default"].createElement(_Tree["default"], {
      expandLevel: 0,
      options: options
    });
  }
}];
exports["default"] = _default;