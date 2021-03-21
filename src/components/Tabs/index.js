import React from 'react';
import {connect} from 'react-redux';
import "./index.less";
import {callFunc, classNames, getProps, isDef, isFunc, pathJoin, strEqual} from "@wangct/util";
import DefineComponent from "../DefineComponent";
import {AntTabs} from "../utils/baseCom";

/**
 * 封装tabs组件
 */
@connect(({global}) => ({
  pathname:global.pathname,
}))
export default class Tabs extends DefineComponent{

  state = {
    options:[],
    basePath:'/',
    pathFormatter:this.pathFormatter.bind(this),
    usePath:true,
    value:this.getDefaultKey(),
    fitHeight:true,
  };

  pathFormatter(path){
    return pathJoin(this.getProp('basePath'),path);
  }

  getActiveKey(){
    const value = this.isUsePath() ? this.getKeyByPath() : this.getValue();
    return isDef(value) ? value : this.getDefaultKey();
  }

  getKeyByPath(pathname = this.props.pathname){
    const options = this.getOptions();
    const target = options.find((opt) => {
      return matchPath(this.getPath(opt),pathname)
    });
    return target && this.getKey(target);
  }

  getPathByKey(key){
    const options = this.getOptions();
    const target = options.find((opt) => {
      return strEqual(this.getKey(opt),key);
    });
    return target && this.getPath(target);
  }

  getDefaultKey(){
    const target = this.getOptions()[0];
    return target && this.getKey(target);
  }

  getPath(opt){
    const pathFormatter = this.getProp('pathFormatter');
    return pathFormatter ? pathFormatter(opt.path,opt) : opt.path;
  }

  getKey(opt){
    const {keyFormatter} = this.props;
    return keyFormatter ? keyFormatter(opt) : opt.title;
  }

  isUsePath(){
    return this.getProp('usePath');
  }

  tabChange = (key) => {
    if(this.isUsePath()){
      const path = this.getPathByKey(key);
      path && pathTo(path);
    }
    this.setState({
      value:key,
    });
    callFunc(this.props.onChange,key);
  };

  render() {
    const {props} = this;
    const options = this.getOptions();
    return <AntTabs
      {...props}
      activeKey={this.getActiveKey()}
      onChange={this.tabChange}
      className={classNames('wct-tabs',props.className,this.getProp('fitHeight') && 'wct-tabs-fit-height')}
    >
      {
        options.map((opt) => {
          const {component:Com,props:optProps = props.comProps} = opt;
          const comProps = isFunc(optProps) ? optProps(opt,options) : optProps;
          return <Tabs.TabPane key={opt.title} tab={opt.title}>
            <Com {...comProps} />
          </Tabs.TabPane>;
        })
      }
    </AntTabs>;
  }
}

function getKey(){

}
