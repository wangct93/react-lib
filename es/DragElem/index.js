
import DefineComponent from "../DefineComponent";
import React from 'react';
import {getShakeProofFunc, getThrottleFunc} from "@wangct/util/lib/funcUtil";
import {callFunc} from "@wangct/util/lib/util";
import {classNames, elemDragStart} from "@wangct/util/lib/browserUtil";

/**
 * 拖拽缩放元素
 * @author wangchuitong
 */
export default class DragElem extends DefineComponent {
  state = {
    left:0,
    top:0,
    width:null,
    height:null,
  };

  componentDidMount() {
    super.componentDidMount();
    this.initSize();
    this.addWheelEvent()
  }

  componentWillUnmount() {
    this.removeWheelEvent();
  }

  addWheelEvent(){
    this.getElem().addEventListener('wheel',this.onWheel);
  }

  removeWheelEvent(){
    this.getElem().removeEventListener('wheel',this.onWheel);
  }

  initSize(){
    const elem = this.getElem();
    const rect = elem.getBoundingClientRect();
    this.setState({
      width:rect.width,
      height:rect.height,
    });
  }

  scaleDisabled(){
    return this.getProp('scaleDisabled') || this.isDisabled();
  }

  moveDisabled(){
    return this.getProp('moveDisabled') || this.isDisabled();
  }

  mousedown = (e) => {
    if(this.moveDisabled()){
      return;
    }
    const {left,top,width,height} = this.getStyle();
    const elem = this.getElem();

    elemDragStart(e,{
      onMove:(moveEvent,dx,dy) => {
        const newLeft = left + dx;
        const newTop = top + dy;
        elem.style.left = newLeft + 'px';
        elem.style.top = newTop + 'px';
        callFunc(this.props.onChange,{
          left:newLeft,
          top:newTop,
          width,
          height,
        });
      },
      onUp:(upEvent,dx,dy) => {
        const newLeft = left + dx;
        const newTop = top + dy;
        this.setState({
          left:newLeft,
          top:newTop,
        });
      },
    });
  };

  changeScaleSize = getShakeProofFunc((rect) => {
    this.setState(rect);
    callFunc(this.props.onChange,rect);
  });

  onWheel = (e) => {
    if(this.scaleDisabled()){
      return;
    }

    e.stopPropagation();
    e.preventDefault();
    const isEnlarge = e.deltaY < 0;
    const scale = isEnlarge ? 1.2 : 1 / 1.2;
    const elem = this.getElem();
    const rect = elem.getBoundingClientRect();
    const dx = e.clientX - rect.left;
    const dy = e.clientY - rect.top;
    const parentRect = elem.parentNode.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    const top = rect.top - parentRect.top;

    const newDx = dx * scale;
    const newDy = dy * scale;
    const newLeft = dx + left - newDx;
    const newTop = dy + top - newDy;

    const newRect = {
      left:newLeft,
      top:newTop,
      width:rect.width * scale,
      height:rect.height * scale,
    };

    Object.keys(newRect).forEach((key) => {
      elem.style[key] = newRect[key] + 'px';
    });

    this.changeScaleSize(newRect);

  };

  getStyle(){
    const left = this.getProp('left');
    const top = this.getProp('top');
    const width = this.getProp('width');
    const height = this.getProp('height');
    return {
      left,
      top,
      width,
      height,
    };
  }

  render() {
    return <div onMouseDown={this.mousedown} onTouchStart={this.mousedown} style={this.getStyle()} ref={this.setElem} className={classNames('w-drag-elem',this.props.className)}>
      {this.props.children}
    </div>;
  }
}
