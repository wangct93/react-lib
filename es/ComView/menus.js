import {FieldsRoutePaths} from "./dic";
import asyncVisualOptions from "./options/asyncVisualOptions";
import tableOptions from "./options/tableOptions";
import uploadOptions from "./options/uploadOptions";
import optionInputOptions from "./options/optionInputOptions";
import svgEditorOptions from "./options/svgEditorOptions";
import selectOptions from "./options/selectOptions";
import dragElemOptions from "./options/dragElemOptions";


export default [
  {
    title:'可视区懒加载 AsyncVisual',
    path:FieldsRoutePaths.asyncVisual,
    options:asyncVisualOptions,
  },
  {
    title:'表格 Table',
    path:FieldsRoutePaths.table,
    options:tableOptions,
  },
  {
    title:'上传文件 Upload',
    path:FieldsRoutePaths.upload,
    options:uploadOptions,
  },
  {
    title:'选项输入 OptionInput',
    path:FieldsRoutePaths.optionInput,
    options:optionInputOptions,
  },
  {
    title:'矢量图编辑器 SvgEditor',
    path:FieldsRoutePaths.svgEditor,
    options:svgEditorOptions,
  },
  {
    title:'下拉框 Select',
    path:FieldsRoutePaths.select,
    options:selectOptions,
  },
  {
    title:'拖拽 DragElem',
    path:FieldsRoutePaths.dragElem,
    options:dragElemOptions,
  }
];
