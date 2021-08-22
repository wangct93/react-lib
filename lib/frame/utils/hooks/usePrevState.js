"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usePrevState;

var _react = require("react");

function usePrevState(state) {
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    ref.current = state;
  });
  return ref.current;
}