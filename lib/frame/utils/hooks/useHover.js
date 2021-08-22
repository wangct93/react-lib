"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHover;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useHover(elem) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  (0, _react.useEffect)(function () {
    var enterFunc = function enterFunc() {
      setHover(true);
    };

    var leaveFunc = function leaveFunc() {
      setHover(false);
    };

    if (elem) {
      elem.addEventListener('mouseenter', enterFunc);
      elem.addEventListener('mouseleave', leaveFunc);
    }

    return function () {
      if (elem) {
        elem.removeEventListener('mouseenter', enterFunc);
        elem.removeEventListener('mouseleave', leaveFunc);
      }
    };
  }, [elem]);
  return hover;
}