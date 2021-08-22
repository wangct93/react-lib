"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMouseWheel;

var _react = require("react");

var _util = require("@wangct/util/lib/util");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useMouseWheel() {
  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      scale = _useState2[0],
      setScale = _useState2[1];

  (0, _react.useEffect)(function () {
    var wheel = (0, _util.getThrottleFunc)(function (e) {
      var isEnlarge = e.deltaY < 0;
      var enlargeScale = isEnlarge ? 1.2 : 1 / 1.2;
      setScale(scale * enlargeScale);
    });
    elem.addEventListener('wheel', wheel);
    return function () {
      elem.removeEventListener('wheel', wheel);
    };
  });
  return scale;
}