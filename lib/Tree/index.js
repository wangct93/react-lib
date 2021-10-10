"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _promiseUtil = require("@wangct/util/lib/promiseUtil");

var _stringUtil = require("@wangct/util/lib/stringUtil");

var _baseCom = require("../utils/baseCom");

var _Select = require("../Select");

var _util2 = require("@wangct/util/lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * 树
 */
var Tree =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Tree, _DefineComponent);

  function Tree() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tree)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      options: [],
      textField: 'text',
      valueField: 'value',
      childrenField: 'children',
      checkable: false,
      selectable: true,
      expandLevel: 1
    };

    _this.initExpandKeys = function () {
      var options = _this.getOptions();

      var expandLevel = _this.getProp('expandLevel');

      var keys = [];
      (0, _arrayUtil.aryFindChildren)(options, function (item, parent, index) {
        if (index < expandLevel) {
          keys.push(_this.getItemValue(item, parent));
        }
      });

      _this.setState({
        expandedKeys: keys
      });
    };

    _this.onSelect = function (keys, e) {
      _this.setState({
        selectedKeys: keys
      });

      (0, _util2.callFunc)(_this.props.onSelect, keys, e);
      (0, _util2.callFunc)(_this.props.onChange, keys[0], e);
    };

    _this.onCheck = function (keys, e) {
      _this.setState({
        checkedKeys: keys
      });

      (0, _util2.callFunc)(_this.props.onChange, keys, e);
      (0, _util2.callFunc)(_this.props.onCheck, keys, e);
    };

    _this.onExpand = function (keys, e) {
      _this.setState({
        expandedKeys: keys
      });

      (0, _util2.callFunc)(_this.props.onExpand, keys, e);
    };

    return _this;
  }

  _createClass(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initOptions();
    }
  }, {
    key: "initOptions",
    value: function initOptions() {
      var _this2 = this;

      if (this.props.loadData) {
        (0, _promiseUtil.toPromise)(this.props.loadData).then(function (options) {
          _this2.setState({
            options: (0, _arrayUtil.toAry)(options)
          }, function () {
            _this2.initExpandKeys();

            _this2.initValue();
          });
        });
      } else {
        this.initExpandKeys();
        this.initValue();
      }
    }
  }, {
    key: "initValue",
    value: function initValue() {
      if (!this.getProp('initValue')) {
        return;
      }

      var map = this.getOptionsMap();
      var oldValue = this.getValue();
      var newValue = oldValue.filter(function (item) {
        return map[item];
      });
      var options = this.getOptions();

      if (!newValue.length && options.length) {
        var value = this.getItemValue(options[0]);
        this.onChange(this.isCheckable() ? [value] : value);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return (0, _arrayUtil.toAry)(_get(_getPrototypeOf(Tree.prototype), "getValue", this).call(this));
    }
  }, {
    key: "getOptionsMap",
    value: function getOptionsMap() {
      var _this3 = this;

      var options = this.getOptions();
      var map = {};
      (0, _arrayUtil.aryFindChildren)(options, function (item, parent) {
        map[_this3.getItemValue(item, parent)] = item;
      }, this.getProp('childrenField'));
      return map;
    }
  }, {
    key: "isCheckable",
    value: function isCheckable() {
      return this.getProp('checkable');
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      return this.getProp('selectable');
    }
  }, {
    key: "getItemText",
    value: function getItemText(item, parent) {
      var textFormatter = this.getProp('textFormatter');
      var textField = this.getProp('textField');
      return textFormatter ? textFormatter(item[textField], item, parent) : item[textField];
    }
  }, {
    key: "getItemValue",
    value: function getItemValue(item, parent) {
      var valueFormatter = this.getProp('valueFormatter');
      var valueField = this.getProp('valueField');
      return valueFormatter ? valueFormatter(item[valueField], item, parent) : item[valueField];
    }
  }, {
    key: "getTreeNodes",
    value: function getTreeNodes(list) {
      var _this4 = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return (0, _arrayUtil.toAry)(list).map(function (item) {
        if (!item) {
          return null;
        }

        var childrenField = _this4.getProp('childrenField');

        var title = _this4.getItemText(item, parent);

        var value = _this4.getItemValue(item, parent);

        if (!item[childrenField]) {
          return _react["default"].createElement(_baseCom.AntTree.TreeNode, {
            data: item,
            title: title,
            key: value
          });
        }

        var childNodes = _this4.getTreeNodes(item[childrenField], item);

        return _react["default"].createElement(_baseCom.AntTree.TreeNode, {
          data: item,
          title: title,
          key: value
        }, childNodes);
      });
    }
  }, {
    key: "getSelectedKeys",
    value: function getSelectedKeys() {
      return (0, _arrayUtil.toAry)(this.getProp('selectedKeys') || this.getValue()).map(function (item) {
        return (0, _stringUtil.toStr)(item);
      });
    }
  }, {
    key: "getCheckedKeys",
    value: function getCheckedKeys() {
      return (0, _arrayUtil.toAry)(this.getProp('checkedKeys') || this.getValue()).map(function (item) {
        return (0, _stringUtil.toStr)(item);
      });
    }
  }, {
    key: "getAryByField",
    value: function getAryByField(field) {
      return (0, _arrayUtil.toAry)(this.getProp(field));
    }
  }, {
    key: "getExpandedKeys",
    value: function getExpandedKeys() {
      return this.getAryByField('expandedKeys');
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.getOptions();
      return _react["default"].createElement(_baseCom.AntTree, _extends({}, (0, _util.getProps)(this), {
        selectedKeys: this.getSelectedKeys(),
        checkedKeys: this.getCheckedKeys(),
        expandedKeys: this.getExpandedKeys(),
        onSelect: this.onSelect,
        onCheck: this.onCheck,
        onExpand: this.onExpand,
        loadData: this.getProp('treeLoadData')
      }), this.getTreeNodes(options));
    }
  }]);

  return Tree;
}(_DefineComponent2["default"]);

exports["default"] = Tree;
Tree.select = _Select.TreeSelect;