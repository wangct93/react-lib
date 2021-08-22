"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMount;

var _react = require("react");

function useMount(effect) {
  return (0, _react.useEffect)(effect, []);
}