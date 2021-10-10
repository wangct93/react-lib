import React from 'react';
import DefineComponent from "../frame/components/DefineComponent";
import {getDivProps} from "../utils/utils";
import {classNames} from "@wangct/util/lib/browserUtil";

/**
 * 布局元素
 * @author wangchuitong
 */
export default class Flex extends DefineComponent {

  state = {

  };

  render() {
    const {props} = this;
    return <div {...getDivProps(props)} className={classNames('w-flex',props.className,props.column && 'w-flex-column',props.verticalCenter && 'w-flex-vertical-center',props.center && 'w-flex-center',props.wrap && 'w-flex-wrap')} ref={props.divRef}>{props.children}</div>;
  }
}

/**
 * 自适应元素
 * @author wangchuitong
 */
export class FlexItem extends DefineComponent {
  state = {};

  render() {
    const {props} = this;
    const Com = props.flex ? Flex : 'div';
    const extProps = props.flex ? {
      divRef:props.divRef,
    } : {
      ref:props.divRef,
    };
    return <Com {...getDivProps(props)} {...extProps} className={classNames('w-flex-item',props.className)}>{props.children}</Com>;
  }
}

Flex.Item = FlexItem;
