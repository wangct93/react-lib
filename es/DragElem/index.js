
import DefineComponent from "../DefineComponent";
import React from 'react';
import {getShakeProofFunc, getThrottleFunc} from "@wangct/util/lib/funcUtil";
import {callFunc} from "@wangct/util/lib/util";
import {classNames, elemDragStart} from "@wangct/util/lib/browserUtil";
import {toStr} from "@wangct/util/lib/stringUtil";

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
    list:[],
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

    let centerPos;
    let moveRect = {};
    let originLength = 0;


    const rectCenterPoint = getRectCenterPoint();
    const originRect = elem.getBoundingClientRect();

    elemDragStart(e,{
      onMove:getThrottleFunc((moveEvent,dx,dy) => {
        moveRect = getNewRect(moveEvent,dx,dy);
        Object.keys(moveRect).forEach((key) => {
          elem.style[key] = moveRect[key] + 'px';
        });
        callFunc(this.props.onChange,moveRect);
      },0),
      onUp:() => {
        this.setState(moveRect);
      },
    });

    function getTouchScaleRect(event){
      const {targetTouches} = event;
      let [firstPoint,secondPoint] = targetTouches;
      const elemRect = elem.getBoundingClientRect();
      const parentRect = elem.parentNode.getBoundingClientRect();
      const rect = {
        left:elemRect.left - parentRect.left,
        top:elemRect.top - parentRect.top,
        width:elemRect.width,
        height:elemRect.height,
      };
      if(!secondPoint){
        secondPoint = rectCenterPoint;
      }

      if(!centerPos){
        const pagePos = getCenterPoint(firstPoint,secondPoint);
        originLength = getDistance(firstPoint,secondPoint) || 1;
        centerPos = {
          x:pagePos.x - parentRect.left,
          y:pagePos.y - parentRect.top,
        };
        return rect;
      }

      const length = getDistance(firstPoint,secondPoint);
      const scale = length / originLength;
      return getScaleRect(originRect,scale,centerPos.x - originRect.left,centerPos.y - originRect.top);

    }

    function getNewRect(event,dx,dy){
      let rect = {};
      if(isTouchScale(event)){
        rect = getTouchScaleRect(event);
      }else{
        rect = {
          left:left + dx,
          top:top + dy,
          width,
          height,
        };
      }
      return rect;
    }

    function getRectCenterPoint(){
      const elemRect = elem.getBoundingClientRect();
      return {
        clientX:elemRect.left + elemRect.width / 2,
        clientY:elemRect.top + elemRect.height / 2,
      }
    }
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

    const newRect = getScaleRect({
      left,
      top,
      width:rect.width,
      height:rect.height,
    },scale,dx,dy);

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

/**
 * 是否为移动滑动事件
 * @author wangchuitong
 */
function isTouch(e){
  return toStr(e.type).includes('touch');
}

function getScaleRect(rect,scale,dx = rect.width / 2,dy = rect.height / 2){

  const newDx = Math.floor(dx * scale);
  const newDy = Math.floor(dy * scale);
  const newLeft = dx + rect.left - newDx;
  const newTop = dy + rect.top - newDy;
  return {
    left:newLeft,
    top:newTop,
    width:Math.floor(rect.width * scale),
    height:Math.floor(rect.height * scale),
  };
}

/**
 * 获取手指点的距离
 * @author wangchuitong
 */
function getDistance(p1, p2) {
  const x = p2.clientX - p1.clientX;
  const y = p2.clientY - p1.clientY;
  return Math.sqrt((x * x) + (y * y));
}

function getCenterPoint(p1, p2){
  return {
    x:(p1.clientX + p2.clientX) / 2,
    y:(p1.clientY + p2.clientY) / 2,
  };
}

function isTouchScale(event){
  return isTouch(event) && event.targetTouches.length > 1;
}
