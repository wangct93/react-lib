"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSearch = exports["default"] = void 0;

var _DefineComponent3 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _Form = _interopRequireDefault(require("../Form"));

var _BtnList = _interopRequireDefault(require("../BtnList"));

var _frame = require("../frame");

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _util2 = require("@wangct/util/lib/util");

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Table = (
/**
 * 表格组件
 * @author wangchuitong
 */
_dec = (0, _frame.reduxConnect)(function () {
  return {
    resizeSign: (0, _frame.getResizeSign)()
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_DefineComponent2) {
  _inherits(Table, _DefineComponent2);

  function Table() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, Table);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Table)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this3.state = {
      columns: [],
      // data:getTestData(columns),
      hasScrollX: false,
      hasScrollY: false,
      fontSize: 14,
      scrollLeftMin: true,
      scrollLeftMax: true,
      rowSelection: {},
      rowClick: true,
      hoverIndex: null
    };

    _this3.doTest = function () {
      return;

      _this3.setState({
        data: getTestData(_this3.state.columns, Math.floor(Math.random() * 40))
      });
    };

    _this3.bodyScroll = function (e) {
      var target = e.target;

      var header = _this3.getElem().querySelector('.w-table-tr');

      header.scrollLeft = target.scrollLeft;

      _this3.updateFixedScroll();
    };

    _this3.setSelectedKeys = function (keys, rows) {
      _this3.setState({
        selectedKeys: keys,
        selectedRows: rows
      });

      (0, _util2.callFunc)(_this3.props.onSelect, keys, rows);

      var rowSelection = _this3.getProp('rowSelection');

      if (rowSelection && rowSelection.onChange) {
        rowSelection.onChange(keys, rows);
      }
    };

    _this3.allCheckChange = function (checked) {
      if (checked) {
        var data = _this3.getData();

        _this3.setSelectedKeys(data.map(function (item, index) {
          return _this3.getRowKey(item, index);
        }), data);
      } else {
        _this3.setSelectedKeys([], []);
      }
    };

    _this3.checkChange = function (key, checked) {
      var selectedKeys = _this3.getSelectedKeys();

      if (checked) {
        _this3.setSelectedKeys([].concat(_toConsumableArray(selectedKeys), [key]));
      } else {
        _this3.setSelectedKeys(selectedKeys.filter(function (sKey) {
          return sKey != key;
        }));
      }
    };

    return _this3;
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkScroll();
      this.initFontSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.checkScroll();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      this.setState({
        hasScrollX: this.hasScrollX(),
        hasScrollY: this.hasScrollY()
      });
      this.updateFixedScroll();
    }
  }, {
    key: "initFontSize",
    value: function initFontSize() {
      this.setState({
        fontSize: (0, _util.toNum)(getComputedStyle(this.getElem()).fontSize)
      });
    }
  }, {
    key: "hasScrollY",
    value: function hasScrollY() {
      var bodyElem = this.getElem().querySelector('.w-table-body');
      var tableElem = bodyElem && bodyElem.children[0];

      if (!tableElem) {
        return false;
      } // console.log(tableElem,bodyElem,tableElem.getBoundingClientRect().height, bodyElem.getBoundingClientRect().height);


      return tableElem.getBoundingClientRect().height > bodyElem.getBoundingClientRect().height;
    }
  }, {
    key: "hasScrollX",
    value: function hasScrollX() {
      var bodyElem = this.getElem().querySelector('.w-table-body');
      var trElem = bodyElem.querySelector('.w-table-tr');

      if (!trElem) {
        return false;
      }

      var tdSumWidth = Array.from(trElem.children || []).reduce(function (pv, item) {
        return pv + item.offsetWidth;
      }, 0);
      return tdSumWidth > trElem.getBoundingClientRect().width;
    }
  }, {
    key: "getData",
    value: function getData() {
      return (0, _util.toAry)(this.getProp('data'));
    }
  }, {
    key: "getTdStyle",
    value: function getTdStyle(col) {
      var hasFitColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var style = {};
      var width = this.getColWidth(col);

      if (col.fitWidth === false || col.fixed != null) {
        style.flex = "0 0 ".concat(getCssValue(width));
      } else if (col.width === false) {
        style.flex = "1 0 ".concat(getCssValue(width));
      } else {
        if (hasFitColumn) {
          style.flex = "0 0 ".concat(getCssValue(width));
        } else {
          style.flex = "1 0 ".concat(getCssValue(width));
        }
      }

      return style;
    }
  }, {
    key: "isFit",
    value: function isFit() {
      return this.getProp('fit');
    }
  }, {
    key: "updateFixedScroll",
    value: function updateFixedScroll() {
      var bodyElem = this.getElem().querySelector('.w-table-body'); // 更新右固定的滚动条

      var rightScrollElem = this.getElem().querySelector('.w-table-fixed-right .w-table-body');

      if (rightScrollElem) {
        rightScrollElem.scrollTop = bodyElem.scrollTop;
      } // 更新左固定的滚动条


      var leftScrollElem = this.getElem().querySelector('.w-table-fixed-left .w-table-body');

      if (leftScrollElem) {
        leftScrollElem.scrollTop = bodyElem.scrollTop;
      }

      var scrollLeft = bodyElem.scrollLeft;
      var trElem = bodyElem.querySelector('.w-table-tr');

      if ((leftScrollElem || rightScrollElem) && trElem) {
        var tdSumWidth = Array.from(trElem.children || []).reduce(function (pv, item) {
          return pv + item.offsetWidth;
        }, 0);
        var scrollLeftMaxValue = Math.max(tdSumWidth - bodyElem.children[0].offsetWidth, 0);
        this.setState({
          scrollLeftMin: scrollLeft === 0,
          scrollLeftMax: scrollLeft === scrollLeftMaxValue
        });
      }
    }
  }, {
    key: "getColWidth",
    value: function getColWidth(col) {
      var title = col.title,
          width = col.width;
      return width ? width : (0, _util.toStr)(title).length * this.getFontSize() + 20;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      return this.getProp('fontSize') || 14;
    }
  }, {
    key: "getTrProps",
    value: function getTrProps(row, index) {
      var _this4 = this;

      var onRow = this.getProp('onRow');
      var tdProps = {};

      if ((0, _util.isFunc)(onRow)) {
        tdProps = onRow(row, index);
      } else {
        tdProps = onRow || {};
      }

      var rowSelection = this.getProp('rowSelection');

      if (rowSelection && this.getProp('rowClick')) {
        var tempClick = tdProps.onClick;

        tdProps.onClick = function (e) {
          (0, _util2.callFunc)(tempClick, e);

          if (!e.isPropagationStopped()) {
            var key = _this4.getRowKey(row, index);

            var checked = _this4.getSelectedKeys().includes(key);

            _this4.checkChange(key, !checked);
          }
        };
      }

      var tempMouseEnter = tdProps.onMouseEnter;

      tdProps.onMouseEnter = function (e) {
        _this4.setState({
          hoverIndex: index
        });

        (0, _util2.callFunc)(tempMouseEnter, e);
      };

      var tempMouseLevel = tdProps.onMouseLeave;

      tdProps.onMouseLeave = function (e) {
        _this4.setState({
          hoverIndex: null
        });

        (0, _util2.callFunc)(tempMouseLevel, e);
      };

      var hoverIndex = this.state.hoverIndex;
      var hover = hoverIndex === index;

      if (hover) {
        tdProps.className = (0, _util.classNames)(tdProps, 'w-table-tr-hover');
      }

      return tdProps;
    }
  }, {
    key: "getSelectedKeys",
    value: function getSelectedKeys() {
      var rowSelection = this.getProp('rowSelection');
      var keys = rowSelection && rowSelection.selectedKeys;

      if (keys) {
        return keys;
      }

      return (0, _util.toAry)(this.getProp('selectedKeys'));
    }
  }, {
    key: "getRowKey",
    value: function getRowKey(row, index) {
      return index + '';
    }
  }, {
    key: "getColumns",
    value: function getColumns() {
      var _this5 = this;

      var columns = _get(_getPrototypeOf(Table.prototype), "getColumns", this).call(this);

      var rowSelection = this.getProp('rowSelection');

      if (rowSelection) {
        var isRadio = rowSelection.type === 'radio';
        var selectedKeys = this.getSelectedKeys();
        var data = this.getData();
        var map = (0, _util.aryToObject)(selectedKeys, function (key) {
          return key;
        }, function () {
          return true;
        });
        var isAllChecked = data.length && data.every(function (item, index) {
          return map[_this5.getRowKey(item, index)];
        });
        return [{
          title: isRadio ? '' : _react["default"].createElement(_Checkbox["default"], {
            value: isAllChecked,
            onChange: this.allCheckChange
          }),
          field: '__select',
          fitWidth: false,
          width: 60,
          fixed: 'left',
          render: function render(v, row, index) {
            var key = _this5.getRowKey(row, index);

            var props = rowSelection.getCheckboxProps ? rowSelection.getCheckboxProps(row, index) : {};
            return _react["default"].createElement(_Checkbox["default"], _extends({}, props, {
              value: map[key],
              onChange: _this5.checkChange.bind(_this5, key)
            }));
          }
        }].concat(_toConsumableArray(columns));
      }

      return columns;
    }
  }, {
    key: "getFixedContent",
    value: function getFixedContent() {
      var _this6 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var hasFitColumn = options.hasFitColumn,
          _options$isLeft = options.isLeft,
          isLeft = _options$isLeft === void 0 ? true : _options$isLeft;
      var columns = this.getColumns().filter(function (col) {
        return col.fixed === (isLeft ? 'left' : 'right');
      });

      var getFixedWidth = function getFixedWidth(columns) {
        return columns.reduce(function (pv, item) {
          return _this6.getColWidth(item) + pv;
        }, 0);
      };

      var className = isLeft ? 'w-table-fixed-left' : 'w-table-fixed-right';

      if (!columns.length) {
        return null;
      }

      return _react["default"].createElement("div", {
        className: className,
        style: {
          width: getFixedWidth(columns)
        }
      }, _react["default"].createElement("div", {
        className: "w-table-header"
      }, this.getHeaderTr(columns, hasFitColumn)), _react["default"].createElement("div", {
        className: "w-table-body"
      }, _react["default"].createElement("div", {
        className: "w-table-content"
      }, this.getBodyContent(columns, hasFitColumn))));
    }
  }, {
    key: "getHeaderTr",
    value: function getHeaderTr() {
      var _this7 = this;

      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getColumns();
      var hasFitColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _react["default"].createElement("div", {
        className: "w-table-tr"
      }, columns.map(function (col, index) {
        return _react["default"].createElement("div", {
          style: _this7.getTdStyle(col, hasFitColumn),
          className: "w-table-td w-table-header-td",
          key: index
        }, _react["default"].createElement("div", {
          className: "w-table-td-content"
        }, col.title));
      }));
    }
  }, {
    key: "getBodyContent",
    value: function getBodyContent(columns, hasFitColumn) {
      var _this8 = this;

      return this.getData().map(function (row, rowIndex) {
        var trProps = _this8.getTrProps(row, rowIndex);

        return _react["default"].createElement("div", _extends({}, trProps, {
          className: (0, _util.classNames)('w-table-tr', trProps.className),
          key: rowIndex
        }), columns.map(function (col, index) {
          var render = col.render;
          var value = row[col.field];
          value = render ? render(value, row, rowIndex) : value;
          return _react["default"].createElement("div", {
            style: _this8.getTdStyle(col, hasFitColumn),
            className: "w-table-td",
            key: index
          }, _react["default"].createElement("div", {
            className: "w-table-td-content"
          }, value));
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.state);
      var columns = this.getColumns();
      var state = this.state;
      var hasFitColumn = columns.some(function (col) {
        return col.width === false;
      });
      return _react["default"].createElement("div", {
        onClick: this.doTest,
        ref: this.setElem,
        className: (0, _util.classNames)('w-table', this.isFit() && 'w-table-fit', state.hasScrollX && 'w-table-scroll-x', state.hasScrollY && 'w-table-scroll-y')
      }, _react["default"].createElement("div", {
        className: "w-table-header"
      }, this.getHeaderTr(columns, hasFitColumn)), _react["default"].createElement("div", {
        onScroll: this.bodyScroll,
        className: "w-table-body"
      }, _react["default"].createElement("div", {
        className: "w-table-content"
      }, this.getBodyContent(columns, hasFitColumn))), _react["default"].createElement("div", {
        className: (0, _util.classNames)('w-table-fixed', state.scrollLeftMin && 'w-table-fixed-scroll-left-min', state.scrollLeftMax && 'w-table-fixed-scroll-left-max')
      }, this.getFixedContent({
        isLeft: true,
        hasFitColumn: hasFitColumn
      }), this.getFixedContent({
        isLeft: false,
        hasFitColumn: hasFitColumn
      })));
    }
  }]);

  return Table;
}(_DefineComponent3["default"]), _temp)) || _class);
exports["default"] = Table;

function getTestData(columns) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return new Array(length).fill(1).map(function (a, index) {
    return (0, _util.aryToObject)(columns, 'field', function (item) {
      return item.title;
    });
  });
}
/**
 * 获取css值
 * @author wangchuitong
 */


function getCssValue(value) {
  value = (0, _util.toStr)(value);
  return value.includes('%') ? value : value + 'px';
}
/**
 * 查询表格
 */


var TableSearch =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(TableSearch, _DefineComponent);

  function TableSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      pageNumField: 'page_num',
      pageSizeField: 'page_size',
      totalField: 'total',
      dataField: 'list',
      fit: true,
      pagination: _objectSpread({
        current: 1,
        pageSize: 20,
        total: 0,
        pageSizeOptions: ['10', '20', '50', '100', '1000'],
        showQuickJumper: true,
        showSizeChanger: true
      }, _this.props.defaultPagination),
      loading: true
    };

    _this.doSearch = function () {
      var extParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.getForm().validator().then(function (params) {
        params = _objectSpread({}, params, {}, extParams);
        var beforeLoad = _this.props.beforeLoad;

        var pagination = _this.getProp('pagination');

        params = beforeLoad ? beforeLoad(params) : params;

        if (!params) {
          return;
        }

        _this.pageChange(1, pagination.pageSize, params);
      })["catch"](function (err) {
        var msg = (0, _util.objFind)(err, function (value) {
          return !!value;
        });
        (0, _frame.alertErrInfo)((0, _util.toStr)(msg));
      });
    };

    _this.doReload = function () {
      return _this.loadData();
    };

    _this.doReset = function () {
      _this.setState({
        list: []
      });

      _this.formChange({});

      _this.updatePagination({
        total: 0
      });
    };

    _this.pageChange = function (pageNum, pageSize) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state.oldParams;

      _this.updatePagination({
        current: pageNum,
        pageSize: pageSize
      });

      _this.loadData(_objectSpread({}, params, {}, _this.getPageParams(pageNum, pageSize)));
    };

    return _this;
  }

  _createClass(TableSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initSearch();
    }
  }, {
    key: "initSearch",
    value: function initSearch() {
      if (this.props.defaultSearch) {
        this.doSearch();
      }
    }
  }, {
    key: "getBtnOptions",
    value: function getBtnOptions() {
      var _this$props$btnOption = this.props.btnOptions,
          btnOptions = _this$props$btnOption === void 0 ? ['search', 'reset'] : _this$props$btnOption;
      var mapData = {
        search: {
          title: '查询',
          onClick: this.doSearch.bind(this, {}),
          type: 'primary',
          auth: this.getProp('searchAuth')
        },
        reset: {
          title: '重置',
          onClick: this.doReset,
          type: 'primary',
          auth: this.getProp('resetAuth')
        }
      };
      return (0, _util.toAry)(btnOptions).map(function (opt) {
        return mapData[opt] || opt;
      });
    }
  }, {
    key: "getPageParams",
    value: function getPageParams(pageNum, pageSize) {
      var _ref;

      return _ref = {}, _defineProperty(_ref, this.getProp('pageNumField'), pageNum), _defineProperty(_ref, this.getProp('pageSizeField'), pageSize), _ref;
    }
  }, {
    key: "updatePagination",
    value: function updatePagination(pagination) {
      this.setState({
        pagination: _objectSpread({}, this.getPagination(), {}, pagination)
      });
    }
  }, {
    key: "getPagination",
    value: function getPagination() {
      return this.getProp('pagination');
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.oldParams;
      var pro = (0, _util.toPromise)(this.props.loadData, params).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var afterLoad = _this2.props.afterLoad;

        var pagination = _this2.getPagination();

        var current = pagination.current,
            pageSize = pagination.pageSize;
        data = (0, _util.isFunc)(afterLoad) ? afterLoad(data) : data;

        var total = data[_this2.getProp('totalField')];

        var list = (0, _util.toAry)(data[_this2.getProp('dataField')]);
        var maxPage = Math.ceil(total / pageSize);

        if (current > maxPage && maxPage) {
          _this2.pageChange(maxPage, pageSize);
        } else {
          _this2.updatePagination({
            total: total
          });

          _this2.setState({
            oldParams: params,
            list: list
          });

          _this2.getTable().setSelectedKeys([], []);

          if (_this2.getProp('alertInfo') !== false) {
            (0, _frame.alertSucInfo)("\u67E5\u8BE2\u5230".concat(list.length, "\u6761\u6570\u636E"));
          }
        }
      });

      if (this.getProp('loading')) {
        pro = (0, _frame.showLoading)(pro);
      }

      return pro;
    }
  }, {
    key: "isFit",
    value: function isFit() {
      return this.getProp('fit');
    }
  }, {
    key: "hasPagin",
    value: function hasPagin() {
      return (0, _util.toNum)(this.getPagination().total) > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return _react["default"].createElement("div", {
        className: (0, _util.classNames)('w-table-search', this.isFit() && 'w-table-search-fit', this.props.className)
      }, _react["default"].createElement("div", {
        className: "w-header"
      }, _react["default"].createElement(_Form["default"], {
        className: "w-table-form",
        itemWidth: "50%",
        ref: this.setForm,
        options: this.props.filterOptions,
        value: this.getFormValue(),
        onChange: this.formChange
      }), _react["default"].createElement(_BtnList["default"], {
        options: this.getBtnOptions()
      })), _react["default"].createElement("div", {
        className: "w-body"
      }, _react["default"].createElement(Table, _extends({}, props.tableProps, {
        columns: this.getColumns(),
        data: this.getList(),
        fit: this.isFit(),
        ref: this.setTable,
        onSelect: props.onSelect,
        onRow: props.onRow
      }))), _react["default"].createElement("div", {
        className: "w-footer"
      }, this.hasPagin() && _react["default"].createElement(_Pagination["default"], _extends({}, this.getPagination(), {
        onChange: this.pageChange,
        onShowSizeChange: this.pageChange
      }))));
    }
  }]);

  return TableSearch;
}(_DefineComponent3["default"]);

exports.TableSearch = TableSearch;
Table.Search = TableSearch;