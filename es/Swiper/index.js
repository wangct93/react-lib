import React from 'react';
import Slider from "../Slider";
import DefineComponent from "../frame/components/DefineComponent";

/**
 * 轮播图
 */
export default class Swiper extends DefineComponent {

  render() {
    return <Slider {...this.props} />;
  }
}
