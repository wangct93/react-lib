"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useInterval;

var _util = require("@wangct/util/lib/util");

var _useMount = _interopRequireDefault(require("./useMount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useInterval(func) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  (0, _useMount["default"])(function () {
    var timer = setInterval(function () {
      (0, _util.callFunc)(func);
    }, interval);
    return function () {
      clearInterval(timer);
    };
  });
}