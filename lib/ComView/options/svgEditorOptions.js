"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SvgEditor = _interopRequireDefault(require("../../SvgEditor"));

var _svg_demo = _interopRequireDefault(require("../../assets/images/svg_demo.jpg"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '线',
  desc: '线',
  render: function render() {
    var nodes = [{
      value: 'line',
      x1: 100,
      y1: 100,
      x2: 200,
      y2: 200,
      angle: 0,
      strokeWidth: 2,
      id: '1',
      strokeColor: '#ddd',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'line\',\n' + '          x1:100,\n' + '          y1:100,\n' + '          x2:200,\n' + '          y2:200,\n' + '          angle:0,\n' + '          strokeWidth:2,\n' + '          id:\'1\',\n' + '          strokeColor:\'#ddd\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '矩形',
  desc: '矩形',
  render: function render() {
    var nodes = [{
      value: 'rect',
      x: 100,
      y: 100,
      w: 100,
      h: 100,
      angle: 0,
      strokeWidth: 2,
      fillColor: 'transparent',
      strokeColor: '#ddd',
      id: '1',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'rect\',\n' + '          x:100,\n' + '          y:100,\n' + '          w:100,\n' + '          h:100,\n' + '          angle:0,\n' + '          strokeWidth:2,\n' + '          fillColor:\'transparent\',\n' + '          strokeColor:\'#ddd\',\n' + '          id:\'1\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '圆',
  desc: '圆',
  render: function render() {
    var nodes = [{
      value: 'circle',
      x: 100,
      y: 100,
      w: 100,
      h: 100,
      angle: 0,
      fillColor: 'transparent',
      strokeColor: '#ddd',
      strokeWidth: 2,
      id: '1',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'circle\',\n' + '          x:100,\n' + '          y:100,\n' + '          w:100,\n' + '          h:100,\n' + '          angle:0,\n' + '          fillColor:\'transparent\',\n' + '          strokeColor:\'#ddd\',\n' + '          strokeWidth:2,\n' + '          id:\'1\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '文本',
  desc: '文本',
  render: function render() {
    var nodes = [{
      value: 'text',
      x: 100,
      y: 100,
      angle: 0,
      text: '测试数据',
      strokeColor: '#ddd',
      id: '1',
      zIndex: 10
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'text\',\n' + '          x:100,\n' + '          y:100,\n' + '          angle:0,\n' + '          text:\'测试数据\',\n' + '          strokeColor:\'#ddd\',\n' + '          id:\'1\',\n' + '          zIndex:10,\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}, {
  title: '图片',
  desc: '图片',
  render: function render() {
    var nodes = [{
      value: 'img',
      img: _svg_demo["default"],
      x: 100,
      y: 100,
      w: 100,
      h: 100,
      angle: 0,
      zIndex: 10,
      id: '1'
    }];
    return _react["default"].createElement(_SvgEditor["default"], {
      value: nodes,
      height: 500
    });
  },
  code: 'const nodes = [\n' + '        {\n' + '          value:\'img\',\n' + '          img:SvgDemo,\n' + '          x:100,\n' + '          y:100,\n' + '          w:100,\n' + '          h:100,\n' + '          angle:0,\n' + '          zIndex:10,\n' + '          id:\'1\',\n' + '        }\n' + '      ];\n' + '      return <SvgEditor value={nodes} height={500} />;'
}];
exports["default"] = _default;