"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _frame = require("../frame");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EchartFrame = (
/**
 * echart框架
 */
_dec = (0, _frame.reduxConnect)(function () {
  return {
    resizeSign: (0, _frame.getResizeSign)()
  };
}), _dec(_class =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(EchartFrame, _DefineComponent);

  function EchartFrame() {
    _classCallCheck(this, EchartFrame);

    return _possibleConstructorReturn(this, _getPrototypeOf(EchartFrame).apply(this, arguments));
  }

  _createClass(EchartFrame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawEchart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.drawEchart();
    }
  }, {
    key: "drawEchart",
    value: function drawEchart() {
      var chart = this.getChart();

      if (!chart) {
        return;
      }

      (0, _util.callFunc)(this.props.onDraw || this.props.draw, chart, this.props.data, this.getElem());
      chart.resize();
    }
  }, {
    key: "getChart",
    value: function getChart() {
      var chart = this.chart;

      if (chart) {
        return chart;
      }

      var elem = this.getElem();
      var echarts = this.props.echarts;

      if (!echarts) {
        return;
      }

      this.chart = echarts.init(elem);
      return this.chart;
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", _extends({
        ref: this.setElem
      }, this.getDivProps()));
    }
  }]);

  return EchartFrame;
}(_DefineComponent2["default"])) || _class);
exports["default"] = EchartFrame;