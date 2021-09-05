"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DefineComponent2 = _interopRequireDefault(require("../DefineComponent"));

var _react = _interopRequireDefault(require("react"));

var _funcUtil = require("@wangct/util/lib/funcUtil");

var _util = require("@wangct/util/lib/util");

var _browserUtil = require("@wangct/util/lib/browserUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 拖拽缩放元素
 * @author wangchuitong
 */
var DragElem =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(DragElem, _DefineComponent);

  function DragElem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DragElem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DragElem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      left: 0,
      top: 0,
      width: null,
      height: null
    };

    _this.mousedown = function (e) {
      if (_this.moveDisabled()) {
        return;
      }

      var _this$getStyle = _this.getStyle(),
          left = _this$getStyle.left,
          top = _this$getStyle.top,
          width = _this$getStyle.width,
          height = _this$getStyle.height;

      var elem = _this.getElem();

      (0, _browserUtil.elemDragStart)(e, {
        onMove: function onMove(moveEvent, dx, dy) {
          var newLeft = left + dx;
          var newTop = top + dy;
          elem.style.left = newLeft + 'px';
          elem.style.top = newTop + 'px';
          (0, _util.callFunc)(_this.props.onChange, {
            left: newLeft,
            top: newTop,
            width: width,
            height: height
          });
        },
        onUp: function onUp(upEvent, dx, dy) {
          var newLeft = left + dx;
          var newTop = top + dy;

          _this.setState({
            left: newLeft,
            top: newTop
          });
        }
      });
    };

    _this.changeScaleSize = (0, _funcUtil.getShakeProofFunc)(function (rect) {
      _this.setState(rect);

      (0, _util.callFunc)(_this.props.onChange, rect);
    });

    _this.onWheel = function (e) {
      if (_this.scaleDisabled()) {
        return;
      }

      e.stopPropagation();
      e.preventDefault();
      var isEnlarge = e.deltaY < 0;
      var scale = isEnlarge ? 1.2 : 1 / 1.2;

      var elem = _this.getElem();

      var rect = elem.getBoundingClientRect();
      var dx = e.clientX - rect.left;
      var dy = e.clientY - rect.top;
      var parentRect = elem.parentNode.getBoundingClientRect();
      var left = rect.left - parentRect.left;
      var top = rect.top - parentRect.top;
      var newDx = dx * scale;
      var newDy = dy * scale;
      var newLeft = dx + left - newDx;
      var newTop = dy + top - newDy;
      var newRect = {
        left: newLeft,
        top: newTop,
        width: rect.width * scale,
        height: rect.height * scale
      };
      Object.keys(newRect).forEach(function (key) {
        elem.style[key] = newRect[key] + 'px';
      });

      _this.changeScaleSize(newRect);
    };

    return _this;
  }

  _createClass(DragElem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(DragElem.prototype), "componentDidMount", this).call(this);

      this.initSize();
      this.addWheelEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeWheelEvent();
    }
  }, {
    key: "addWheelEvent",
    value: function addWheelEvent() {
      this.getElem().addEventListener('wheel', this.onWheel);
    }
  }, {
    key: "removeWheelEvent",
    value: function removeWheelEvent() {
      this.getElem().removeEventListener('wheel', this.onWheel);
    }
  }, {
    key: "initSize",
    value: function initSize() {
      var elem = this.getElem();
      var rect = elem.getBoundingClientRect();
      this.setState({
        width: rect.width,
        height: rect.height
      });
    }
  }, {
    key: "scaleDisabled",
    value: function scaleDisabled() {
      return this.getProp('scaleDisabled') || this.isDisabled();
    }
  }, {
    key: "moveDisabled",
    value: function moveDisabled() {
      return this.getProp('moveDisabled') || this.isDisabled();
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var left = this.getProp('left');
      var top = this.getProp('top');
      var width = this.getProp('width');
      var height = this.getProp('height');
      return {
        left: left,
        top: top,
        width: width,
        height: height
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        onMouseDown: this.mousedown,
        onTouchStart: this.mousedown,
        style: this.getStyle(),
        ref: this.setElem,
        className: (0, _browserUtil.classNames)('w-drag-elem', this.props.className)
      }, this.props.children);
    }
  }]);

  return DragElem;
}(_DefineComponent2["default"]);

exports["default"] = DragElem;