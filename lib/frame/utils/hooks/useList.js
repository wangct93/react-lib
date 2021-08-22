"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useList;

var _react = require("react");

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _usePromise = require("./usePromise");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useList() {
  var initList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  (0, _usePromise.usePromise)(initList, list, setList);
  var actions = {
    set: function set(newList) {
      setList(newList);
    },
    push: function push() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      setList([list].concat(args));
    },
    update: function update(func, item) {
      var filterFunc;

      if ((0, _typeUtil.isNum)(func)) {
        filterFunc = function filterFunc(item, index) {
          return index === func;
        };
      } else if ((0, _typeUtil.isFunc)(func)) {
        filterFunc = func;
      } else {
        filterFunc = function filterFunc(item) {
          return item === func;
        };
      }

      var newList = list.slice(0);
      newList.forEach(function (forItem, index) {
        if (filterFunc(forItem, index)) {
          newList[index] = item;
        }
      });
      setList(newList);
      return newList;
    },
    sort: function sort(compareFn) {
      var newList = list.sort(compareFn);
      setList(newList);
      return newList;
    },
    filter: function filter(func) {
      var filterFunc;

      if ((0, _typeUtil.isNum)(func)) {
        filterFunc = function filterFunc(item, index) {
          return index === func;
        };
      } else if ((0, _typeUtil.isFunc)(func)) {
        filterFunc = func;
      } else {
        filterFunc = function filterFunc(item) {
          return item === func;
        };
      }

      var newList = list.filter(filterFunc);
      setList(newList);
      return newList;
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

      var newList = list.filter(function (item, index) {
        return !removeFunc(item, index);
      });
      setList(newList);
      return newList;
    },
    clear: function clear() {
      var newList = [];
      setList(newList);
      return newList;
    },
    reset: function reset() {
      setList(initList);
      return initList;
    }
  };
  return [list, actions];
}