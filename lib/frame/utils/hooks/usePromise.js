"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePromise = usePromise;

var _react = require("react");

var _useMount = _interopRequireDefault(require("./useMount"));

var _promiseUtil = require("@wangct/util/lib/promiseUtil");

var _util = require("@wangct/util/lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function usePromise(promise) {
  var initValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var setCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var _useState = (0, _react.useState)(initValue),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0, _useMount["default"])(function () {
    (0, _promiseUtil.toPromise)(promise).then(function (result) {
      setData(result);
      (0, _util.callFunc)(setCb, result);
    });
  });
  return data;
}