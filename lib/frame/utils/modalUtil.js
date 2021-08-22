"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModal = openModal;

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _state = require("./state");

var _util = require("@wangct/util/lib/util");

var _alert = require("./alert");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@wangct/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 打开弹窗
 * @param options
 * @returns {{close: close}}
 */
function openModal() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = _objectSpread({
    width: 400
  }, options);

  var close = function close() {
    (0, _state.removeFragment)(target);
  };

  function onOk() {
    var contentElem = getElem();

    if (!contentElem) {
      return;
    }

    var pro;

    if (contentElem.validator) {
      pro = contentElem.validator().then(options.onOk)["catch"](function (err) {
        throw Object.values(err)[0];
      });
    } else {
      var value = contentElem.getValue && contentElem.getValue();
      pro = (0, _util.callFunc)(options.onOk, value);
    }

    Promise.resolve(pro).then(close)["catch"](function (msg) {
      (0, _alert.alertErrInfo)(msg);
    });
  }

  var _options = options,
      component = _options.component,
      _options$content = _options.content,
      Com = _options$content === void 0 ? component : _options$content;
  var elem = null;

  function setElem(com) {
    elem = com;
  }

  function getElem() {
    return elem;
  }

  var content = Com ? _react["default"].createElement(Com, _extends({
    targetRef: setElem,
    contentRef: setElem,
    ref: setElem
  }, options.contentProps)) : _react["default"].createElement(_react2.Form, _extends({
    options: options.options,
    defaultValue: options.value
  }, options.contentProps, {
    ref: setElem
  }));

  var target = _react["default"].createElement(_modal["default"], _extends({
    title: options.title,
    visible: true,
    onCancel: close,
    width: options.width,
    key: (0, _util.random)(),
    onOk: options.onOk && onOk,
    className: options.className
  }, options.modalProps), content);

  (0, _state.addFragment)(target);
  return {
    close: close
  };
}