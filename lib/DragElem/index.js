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

var _stringUtil = require("@wangct/util/lib/stringUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      height: null,
      list: []
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

      var centerPos;
      var moveRect = {};
      var originLength = 0;
      var rectCenterPoint = getRectCenterPoint();
      var originRect = elem.getBoundingClientRect();
      (0, _browserUtil.elemDragStart)(e, {
        onMove: (0, _funcUtil.getThrottleFunc)(function (moveEvent, dx, dy) {
          moveRect = getNewRect(moveEvent, dx, dy);
          Object.keys(moveRect).forEach(function (key) {
            elem.style[key] = moveRect[key] + 'px';
          });
          (0, _util.callFunc)(_this.props.onChange, moveRect);
        }, 0),
        onUp: function onUp() {
          _this.setState(moveRect);
        }
      });

      function getTouchScaleRect(event) {
        var targetTouches = event.targetTouches;

        var _targetTouches = _slicedToArray(targetTouches, 2),
            firstPoint = _targetTouches[0],
            secondPoint = _targetTouches[1];

        var elemRect = elem.getBoundingClientRect();
        var parentRect = elem.parentNode.getBoundingClientRect();
        var rect = {
          left: elemRect.left - parentRect.left,
          top: elemRect.top - parentRect.top,
          width: elemRect.width,
          height: elemRect.height
        };

        if (!secondPoint) {
          secondPoint = rectCenterPoint;
        }

        if (!centerPos) {
          var pagePos = getCenterPoint(firstPoint, secondPoint);
          originLength = getDistance(firstPoint, secondPoint) || 1;
          centerPos = {
            x: pagePos.x - parentRect.left,
            y: pagePos.y - parentRect.top
          };
          return rect;
        }

        var length = getDistance(firstPoint, secondPoint);
        var scale = length / originLength;
        return getScaleRect(originRect, scale, centerPos.x - originRect.left, centerPos.y - originRect.top);
      }

      function getNewRect(event, dx, dy) {
        var rect = {};

        if (isTouchScale(event)) {
          rect = getTouchScaleRect(event);
        } else {
          rect = {
            left: left + dx,
            top: top + dy,
            width: width,
            height: height
          };
        }

        return rect;
      }

      function getRectCenterPoint() {
        var elemRect = elem.getBoundingClientRect();
        return {
          clientX: elemRect.left + elemRect.width / 2,
          clientY: elemRect.top + elemRect.height / 2
        };
      }
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
      var newRect = getScaleRect({
        left: left,
        top: top,
        width: rect.width,
        height: rect.height
      }, scale, dx, dy);
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
/**
 * 是否为移动滑动事件
 * @author wangchuitong
 */


exports["default"] = DragElem;

function isTouch(e) {
  return (0, _stringUtil.toStr)(e.type).includes('touch');
}

function getScaleRect(rect, scale) {
  var dx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rect.width / 2;
  var dy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : rect.height / 2;
  var newDx = Math.floor(dx * scale);
  var newDy = Math.floor(dy * scale);
  var newLeft = dx + rect.left - newDx;
  var newTop = dy + rect.top - newDy;
  return {
    left: newLeft,
    top: newTop,
    width: Math.floor(rect.width * scale),
    height: Math.floor(rect.height * scale)
  };
}
/**
 * 获取手指点的距离
 * @author wangchuitong
 */


function getDistance(p1, p2) {
  var x = p2.clientX - p1.clientX;
  var y = p2.clientY - p1.clientY;
  return Math.sqrt(x * x + y * y);
}

function getCenterPoint(p1, p2) {
  return {
    x: (p1.clientX + p2.clientX) / 2,
    y: (p1.clientY + p2.clientY) / 2
  };
}

function isTouchScale(event) {
  return isTouch(event) && event.targetTouches.length > 1;
}