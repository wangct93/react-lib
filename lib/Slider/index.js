"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _react = _interopRequireDefault(require("react"));

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _reactUtil = require("../utils/reactUtil");

var _Flex = _interopRequireDefault(require("../Flex"));

var _browserUtil = require("@wangct/util/lib/browserUtil");

var _this5 = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * 轮播图
 */
var Slider =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Slider, _DefineComponent);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      index: 1,
      interval: 3000,
      moveInterval: 500,
      animate: true,
      dots: true,
      dotPosition: 'bottom'
    };

    _this.mouseEnter = function () {
      _this.clearInterval();
    };

    _this.mouseLeave = function () {
      _this.setInterval();
    };

    _this.dotChange = function (index) {
      _this.move(index + 1);
    };

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(Slider.prototype), "componentDidMount", this).call(this);

      this.setInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
      this.clearInterval();
    }
  }, {
    key: "setInterval",
    value: function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function () {
      var _this2 = this;

      this.clearInterval();
      this.autoTimer = setInterval(function () {
        _this2.move(_this2.getProp('index') + 1);
      }, this.getProp('interval'));
    })
  }, {
    key: "clearInterval",
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.autoTimer);
    })
  }, {
    key: "getOptions",
    value: function getOptions() {
      var children = this.props.children;

      if (children) {
        return (0, _arrayUtil.toAry)(children);
      }

      return _get(_getPrototypeOf(Slider.prototype), "getOptions", this).call(this);
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var index = this.state.index;
      var elem = this.getStateElem();
      var width = elem && elem.getBoundingClientRect().width || 0;
      var animate = this.getProp('animate');
      return {
        left: -width * index,
        transition: animate ? "left ".concat(this.getProp('moveInterval'), "ms") : 'none'
      };
    }
  }, {
    key: "move",
    value: function move(targetIndex) {
      var _this3 = this;

      var options = this.getOptions();
      var length = options.length + 2;
      targetIndex = (targetIndex + length) % length;
      this.setState({
        index: targetIndex
      }, function () {
        _this3.checkIndex();
      });
    }
  }, {
    key: "checkIndex",
    value: function checkIndex() {
      var _this4 = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        var index = _this4.state.index;
        var length = _this4.getOptions().length + 2;

        if (index === 0 || index === length - 1) {
          var nextIndex = index === 0 ? length - 2 : 1;

          _this4.setState({
            animate: false
          }, function () {
            _this4.setState({
              index: nextIndex
            }, function () {
              _this4.setState({
                animate: true
              });
            });
          });
        }
      }, this.getProp('moveInterval'));
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.getOptions();

      if (options.length === 0) {
        return null;
      }

      return _react["default"].createElement("div", {
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave,
        className: (0, _browserUtil.classNames)('w-slider', this.props.className)
      }, _react["default"].createElement("div", {
        className: "w-slider-container"
      }, _react["default"].createElement(_Flex["default"], {
        divRef: this.setStateElem,
        style: this.getStyle(),
        className: "w-slider-content"
      }, this.getStateElem() && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: "w-slider-item"
      }, (0, _reactUtil.reactGetElement)(options[options.length - 1])), options.map(function (opt, index) {
        return _react["default"].createElement("div", {
          className: "w-slider-item",
          key: index
        }, (0, _reactUtil.reactGetElement)(opt));
      }), _react["default"].createElement("div", {
        className: "w-slider-item"
      }, (0, _reactUtil.reactGetElement)(options[0])))), _react["default"].createElement(DotView, {
        position: this.getProp('dotPosition'),
        options: options,
        value: (this.state.index - 1 + options.length) % options.length,
        onChange: this.dotChange
      })));
    }
  }]);

  return Slider;
}(_DefineComponent2["default"]);

exports["default"] = Slider;

var DotView = _react["default"].memo(function (props) {
  var options = (0, _arrayUtil.toAry)(props.options);
  return _react["default"].createElement("div", {
    className: (0, _browserUtil.classNames)('w-slider-dots', props.position && 'w-slider-dots-' + props.position)
  }, options.map(function (opt, index) {
    var active = props.value === index;
    return _react["default"].createElement("div", {
      onClick: props.onChange && props.onChange.bind(_this5, index),
      key: index,
      className: (0, _browserUtil.classNames)('w-slider-dot', active && 'w-slider-dot-active')
    });
  }));
});