"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMap;

var _react = require("react");

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _usePromise = require("./usePromise");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useMap() {
  var initMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      map = _useState2[0],
      setMap = _useState2[1];

  (0, _usePromise.usePromise)(initMap, map, setMap);
  var actions = {
    setAll: function setAll(newMap) {
      setMap(newMap);
    },
    set: function set(key, value) {
      var newMap = _objectSpread({}, map, _defineProperty({}, key, value));

      setMap(newMap);
      return newMap;
    },
    remove: function remove(func) {
      var removeFunc;

      if ((0, _typeUtil.isNum)(func)) {
        removeFunc = function removeFunc(item, index) {
          return index === func;
        };
      } else if ((0, _typeUtil.isFunc)(func)) {
        removeFunc = func;
      } else {
        removeFunc = function removeFunc(item) {
          return item === func;
        };
      }

      var newMap = list.filter(function (item, index) {
        return !removeFunc(item, index);
      });
      setMap(newMap);
      return newMap;
    },
    clear: function clear() {
      var newMap = {};
      setMap(newMap);
      return newMap;
    },
    reset: function reset() {
      setMap(initMap);
      return initMap;
    }
  };
  return [map, actions];
}