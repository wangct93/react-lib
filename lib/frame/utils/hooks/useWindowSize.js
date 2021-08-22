"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useWindowSize;

var _react = require("react");

var _useMount = _interopRequireDefault(require("./useMount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useWindowSize() {
  var _useState = (0, _react.useState)({
    width: window.innerWidth,
    height: window.innerHeight
  }),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  function onResize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  (0, _useMount["default"])(function () {
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  });
  return size;
}