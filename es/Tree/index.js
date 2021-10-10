import React from 'react';
import { getProps} from "@wangct/util";
import DefineComponent from "../frame/components/DefineComponent";
import {aryFindChild, aryFindChildren, toAry} from "@wangct/util/lib/arrayUtil";
import {toPromise} from "@wangct/util/lib/promiseUtil";
import {toStr} from "@wangct/util/lib/stringUtil";
import {AntTree} from "../utils/baseCom";
import {TreeSelect} from "../Select";
import {callFunc} from "@wangct/util/lib/util";


/**
 * 树
 */
export default class Tree extends DefineComponent {

  state = {
    options: [],
    textField: 'text',
    valueField: 'value',
    childrenField: 'children',
    checkable: false,
    selectable: true,
    expandLevel:1,
  };

  componentDidMount() {
    this.initOptions();
  }

  initOptions() {
    if(this.props.loadData){
      toPromise(this.props.loadData).then((options) => {
        this.setState({
          options: toAry(options),
        },() => {
          this.initExpandKeys();
          this.initValue();
        });
      });
    }else{
      this.initExpandKeys();
      this.initValue();
    }
  }

  initValue(){
    if(!this.getProp('initValue')){
      return;
    }
    const map = this.getOptionsMap();
    const oldValue = this.getValue();
    const newValue = oldValue.filter((item) => map[item]);
    const options = this.getOptions();
    if(!newValue.length && options.length){
      const value = this.getItemValue(options[0]);
      this.onChange(this.isCheckable() ? [value] : value);
    }
  }

  initExpandKeys = () => {
    const options = this.getOptions();
    const expandLevel = this.getProp('expandLevel');
    const keys = [];
    aryFindChildren(options,(item,parent,index) => {
      if(index < expandLevel){
        keys.push(this.getItemValue(item,parent));
      }
    });
    this.setState({
      expandedKeys:keys,
    });
  };

  getValue(){
    return toAry(super.getValue());
  }

  getOptionsMap(){
    const options = this.getOptions();
    const map = {};
    aryFindChildren(options,(item,parent) => {
      map[this.getItemValue(item,parent)] = item;
    },this.getProp('childrenField'));
    return map;
  }

  isCheckable() {
    return this.getProp('checkable');
  }

  isSelectable() {
    return this.getProp('selectable');
  }

  getItemText(item,parent) {
    const textFormatter = this.getProp('textFormatter');
    const textField = this.getProp('textField');
    return textFormatter ? textFormatter(item[textField], item, parent) : item[textField];
  }

  getItemValue(item,parent) {
    const valueFormatter = this.getProp('valueFormatter');
    const valueField = this.getProp('valueField');
    return valueFormatter ? valueFormatter(item[valueField], item, parent) : item[valueField];
  }


  getTreeNodes(list, parent = null) {
    return toAry(list).map((item) => {
      if (!item) {
        return null;
      }
      const childrenField = this.getProp('childrenField');
      const title = this.getItemText(item,parent);
      const value = this.getItemValue(item,parent);
      if (!item[childrenField]) {
        return <AntTree.TreeNode data={item} title={title} key={value}/>;
      }
      const childNodes = this.getTreeNodes(item[childrenField], item);
      return <AntTree.TreeNode data={item} title={title} key={value}>{childNodes}</AntTree.TreeNode>;
    });
  }

  getSelectedKeys() {
    return toAry(this.getProp('selectedKeys') || this.getValue()).map((item) => toStr(item));
  }

  getCheckedKeys() {
    return toAry(this.getProp('checkedKeys') || this.getValue()).map((item) => toStr(item));
  }

  getAryByField(field){
    return toAry(this.getProp(field));
  }

  getExpandedKeys(){
      return this.getAryByField('expandedKeys');
  }

  onSelect = (keys, e) => {
    this.setState({
      selectedKeys: keys,
    });
    callFunc(this.props.onSelect, keys, e);
    callFunc(this.props.onChange, keys[0], e);
  };

  onCheck = (keys, e) => {
    this.setState({
      checkedKeys: keys,
    });
    callFunc(this.props.onChange, keys, e);
    callFunc(this.props.onCheck, keys, e);
  };

  onExpand = (keys,e) => {
    this.setState({
      expandedKeys:keys,
    });
    callFunc(this.props.onExpand,keys,e);
  };

  render() {
    const options = this.getOptions();
    return <AntTree
      {...getProps(this)}
      selectedKeys={this.getSelectedKeys()}
      checkedKeys={this.getCheckedKeys()}
      expandedKeys={this.getExpandedKeys()}
      onSelect={this.onSelect}
      onCheck={this.onCheck}
      onExpand={this.onExpand}
      loadData={this.getProp('treeLoadData')}
    >
      {this.getTreeNodes(options)}
    </AntTree>;
  }
}

Tree.select = TreeSelect;
