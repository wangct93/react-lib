"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dic = require("./dic");

var _asyncVisualOptions = _interopRequireDefault(require("./options/asyncVisualOptions"));

var _tableOptions = _interopRequireDefault(require("./options/tableOptions"));

var _uploadOptions = _interopRequireDefault(require("./options/uploadOptions"));

var _optionInputOptions = _interopRequireDefault(require("./options/optionInputOptions"));

var _svgEditorOptions = _interopRequireDefault(require("./options/svgEditorOptions"));

var _selectOptions = _interopRequireDefault(require("./options/selectOptions"));

var _dragElemOptions = _interopRequireDefault(require("./options/dragElemOptions"));

var _sliderOptions = _interopRequireDefault(require("./options/sliderOptions"));

var _treeOptions = _interopRequireDefault(require("./options/treeOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '可视区懒加载 AsyncVisual',
  path: _dic.FieldsRoutePaths.asyncVisual,
  options: _asyncVisualOptions["default"]
}, {
  title: '表格 Table',
  path: _dic.FieldsRoutePaths.table,
  options: _tableOptions["default"]
}, {
  title: '上传文件 Upload',
  path: _dic.FieldsRoutePaths.upload,
  options: _uploadOptions["default"]
}, {
  title: '选项输入 OptionInput',
  path: _dic.FieldsRoutePaths.optionInput,
  options: _optionInputOptions["default"]
}, {
  title: '矢量图编辑器 SvgEditor',
  path: _dic.FieldsRoutePaths.svgEditor,
  options: _svgEditorOptions["default"]
}, {
  title: '下拉框 Select',
  path: _dic.FieldsRoutePaths.select,
  options: _selectOptions["default"]
}, {
  title: '拖拽 DragElem',
  path: _dic.FieldsRoutePaths.dragElem,
  options: _dragElemOptions["default"]
}, {
  title: '轮播图 Slider',
  path: _dic.FieldsRoutePaths.slider,
  options: _sliderOptions["default"]
}, {
  title: '树 Tree',
  path: _dic.FieldsRoutePaths.tree,
  options: _treeOptions["default"]
}];
exports["default"] = _default;