import DefineComponent from "../frame/components/DefineComponent";
import React, {useState} from "react";
import Btn from "../Btn";
import {toAry} from "@wangct/util/lib/arrayUtil";
import {reactGetElement} from "../utils/reactUtil";
import Flex from "../Flex";
import {classNames} from "@wangct/util/lib/browserUtil";

/**
 * 轮播图
 */
export default class Slider extends DefineComponent {

  state = {
    index:1,
    interval:3000,
    moveInterval:500,
    animate:true,
    dots:true,
    dotPosition:'bottom',
  };

  componentDidMount() {
    super.componentDidMount();
    this.setInterval();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.clearInterval();
  }

  autoTimer;
  setInterval(){
    this.clearInterval();
    this.autoTimer = setInterval(() => {
      this.move(this.getProp('index') + 1);
    },this.getProp('interval'));
  }

  clearInterval(){
    clearInterval(this.autoTimer);
  }

  getOptions(){
    const {children} = this.props;
    if(children){
      return toAry(children);
    }
    return super.getOptions();
  }

  getStyle(){
    const {index} = this.state;
    const elem = this.getStateElem();
    const width = elem && elem.getBoundingClientRect().width || 0;
    const animate = this.getProp('animate');
    return {
      left:-width * index,
      transition: animate ? `left ${this.getProp('moveInterval')}ms` : 'none',
    };
  }

  move(targetIndex){
    const options = this.getOptions();
    const length = options.length + 2;
    targetIndex = (targetIndex + length) % length;
    this.setState({
      index:targetIndex,
    },() => {
      this.checkIndex();
    });
  }

  timer;
  checkIndex(){
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const {index} = this.state;
      const length = this.getOptions().length + 2;
      if(index === 0 || index === length - 1){
        const nextIndex = index === 0 ? length - 2 : 1;
        this.setState({
          animate:false,
        },() => {
          this.setState({
            index:nextIndex,
          },() => {
            this.setState({
              animate:true,
            });
          });
        });
      }
    },this.getProp('moveInterval'));
  }

  mouseEnter = () => {
    this.clearInterval();
  };

  mouseLeave = () => {
    this.setInterval();
  };

  dotChange = (index) => {
    this.move(index + 1);
  };

  render() {
    const options = this.getOptions();
    if(options.length === 0){
      return null;
    }
    return <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={classNames('w-slider',this.props.className)}>
      <div className="w-slider-container">
        <Flex divRef={this.setStateElem} style={this.getStyle()} className="w-slider-content">
          {
            this.getStateElem() && <React.Fragment>
              <div className="w-slider-item">{reactGetElement(options[options.length - 1])}</div>
              {
                options.map((opt,index) => {
                  return <div className="w-slider-item" key={index}>{reactGetElement(opt)}</div>
                })
              }
              <div className="w-slider-item">{reactGetElement(options[0])}</div>
            </React.Fragment>
          }
        </Flex>
        <DotView position={this.getProp('dotPosition')} options={options} value={(this.state.index - 1 + options.length) % options.length} onChange={this.dotChange} />
      </div>
    </div>;
  }
}

const DotView = React.memo((props) => {
  const options = toAry(props.options);
  return <div className={classNames('w-slider-dots',props.position && 'w-slider-dots-' + props.position)}>
    {
      options.map((opt,index) => {
        const active = props.value === index;
        return <div onClick={props.onChange && props.onChange.bind(this,index)} key={index} className={classNames('w-slider-dot',active && 'w-slider-dot-active')} />
      })
    }
  </div>;
});
