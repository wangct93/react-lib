"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTimeout;

var _react = require("react");

var _util = require("@wangct/util/lib/util");

function useTimeout(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      (0, _util.callFunc)(func);
    }, timeout);
    return function () {
      clearTimeout(timer);
    };
  }, []);
}