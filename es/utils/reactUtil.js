import React from "react";
import {isFunc} from "@wangct/util/lib/typeUtil";

/**
 * 获取react元素
  * @param Com
 * @returns {null|*}
 */
export function reactGetElement(Com){
  if(React.isValidElement(Com)){
    return Com;
  }
  if(isFunc(Com)){
    return <Com />;
  }
  return null;
}
