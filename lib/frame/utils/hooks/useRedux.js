"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useRedux;

var _react = require("react");

var _util = require("@wangct/util");

var _util2 = require("@wangct/util/lib/util");

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _state = require("../state");

var _useMount = _interopRequireDefault(require("./useMount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useRedux(resultFunc) {
  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _state.getStore)();

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      refresh = _useState2[0],
      setRefresh = _useState2[1];

  (0, _useMount["default"])(function () {
    return store.subscribe(function () {
      var newResult = getResult();

      if (!(0, _util.equal)(result, newResult)) {
        setRefresh((0, _util2.random)());
      }
    });
  });

  function getResult() {
    var state = store.getState();
    return (0, _typeUtil.isFunc)(resultFunc) ? resultFunc(state) : resultFunc ? state[resultFunc] : state;
  }

  var result = getResult();
  return result;
}