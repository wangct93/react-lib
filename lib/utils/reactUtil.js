"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactGetElement = reactGetElement;

var _react = _interopRequireDefault(require("react"));

var _typeUtil = require("@wangct/util/lib/typeUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 获取react元素
  * @param Com
 * @returns {null|*}
 */
function reactGetElement(Com) {
  if (_react["default"].isValidElement(Com)) {
    return Com;
  }

  if ((0, _typeUtil.isFunc)(Com)) {
    return _react["default"].createElement(Com, null);
  }

  return null;
}