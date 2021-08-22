"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Table = _interopRequireDefault(require("../../Table"));

var _Input = _interopRequireDefault(require("../../Input"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: '基本用法',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table data={dataSource} columns={columns} />;',
  desc: '简单的表格',
  render: function render() {
    var dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    var columns = [{
      title: '姓名',
      field: 'name',
      key: 'name'
    }, {
      title: '年龄',
      field: 'age',
      key: 'age'
    }, {
      title: '住址',
      field: 'address',
      key: 'address'
    }];
    return _react["default"].createElement(_Table["default"], {
      rowSelection: {},
      data: dataSource,
      columns: columns
    });
  }
}, {
  title: '基本用法',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table data={dataSource} columns={columns} />;',
  desc: '简单的表格',
  render: function render() {
    var dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    var columns = [{
      title: '姓名',
      field: 'name',
      key: 'name'
    }, {
      title: '年龄',
      field: 'age',
      key: 'age'
    }, {
      title: '住址',
      field: 'address',
      key: 'address'
    }];
    return _react["default"].createElement(_Table["default"], {
      data: dataSource,
      columns: columns
    });
  }
}, {
  title: '固定首尾列',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '          fixed:\'left\',\n' + '          width:100,\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '          width:2000,\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '          fixed:\'right\',\n' + '          width:100,\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table data={dataSource} columns={columns} />;',
  desc: '简单的表格',
  render: function render() {
    var dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    var columns = [{
      title: '姓名',
      field: 'name',
      key: 'name',
      fixed: 'left',
      width: 100
    }, {
      title: '年龄',
      field: 'age',
      key: 'age',
      width: 2000
    }, {
      title: '住址',
      field: 'address',
      key: 'address',
      fixed: 'right',
      width: 100
    }];
    return _react["default"].createElement(_Table["default"], {
      data: dataSource,
      columns: columns
    });
  }
}, {
  title: '查询表格界面',
  code: 'const dataSource = [\n' + '        {\n' + '          key: \'1\',\n' + '          name: \'胡彦斌\',\n' + '          age: 32,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '        {\n' + '          key: \'2\',\n' + '          name: \'胡彦祖\',\n' + '          age: 42,\n' + '          address: \'西湖区湖底公园1号\',\n' + '        },\n' + '      ];\n' + '\n' + '      const columns = [\n' + '        {\n' + '          title: \'姓名\',\n' + '          field: \'name\',\n' + '          key: \'name\',\n' + '        },\n' + '        {\n' + '          title: \'年龄\',\n' + '          field: \'age\',\n' + '          key: \'age\',\n' + '        },\n' + '        {\n' + '          title: \'住址\',\n' + '          field: \'address\',\n' + '          key: \'address\',\n' + '        },\n' + '      ];\n' + '\n' + '      const filterOptions = [\n' + '        {\n' + '          title:\'姓名\',\n' + '          field:\'name\',\n' + '          component:Input,\n' + '        },\n' + '        {\n' + '          title:\'年龄\',\n' + '          field:\'age\',\n' + '          component:Input,\n' + '        },\n' + '      ];\n' + '\n' + '      return <Table.Search filterOptions={filterOptions} loadData={() => ({list:dataSource,total:dataSource.length})} columns={columns} />;',
  desc: '查询表格界面，可添加后台接口、筛选条件',
  render: function render() {
    var dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    var columns = [{
      title: '姓名',
      field: 'name',
      key: 'name'
    }, {
      title: '年龄',
      field: 'age',
      key: 'age'
    }, {
      title: '住址',
      field: 'address',
      key: 'address'
    }];
    var filterOptions = [{
      title: '姓名',
      field: 'name',
      component: _Input["default"]
    }, {
      title: '年龄',
      field: 'age',
      component: _Input["default"]
    }];
    return _react["default"].createElement(_Table["default"].Search, {
      filterOptions: filterOptions,
      loadData: function loadData() {
        return {
          list: dataSource,
          total: dataSource.length
        };
      },
      columns: columns
    });
  }
}];
exports["default"] = _default;