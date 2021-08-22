"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mousedown = mousedown;
exports.importFile = importFile;
exports.blobToBase64 = blobToBase64;
exports.base64ToBlob = base64ToBlob;

var _util = require("@wangct/util/lib/util");

/**
 * 鼠标按下事件
  * @param e
 * @param options
 */
function mousedown(e) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ox = e.clientX;
  var oy = e.clientY;
  var _options$moveLimit = options.moveLimit,
      moveLimit = _options$moveLimit === void 0 ? 10 : _options$moveLimit;
  var isMove = false;
  var mousemove = (0, _util.getThrottleFunc)(function (event) {
    if (isMove) {
      var dx = event.clientX - ox;
      var dy = event.clientY - oy;
      (0, _util.callFunc)(options.onMove, e, dx, dy);
    } else if (Math.abs(event.clientX - ox) > moveLimit || Math.abs(event.clientY - oy) > moveLimit) {
      isMove = true;
      (0, _util.callFunc)(options.onBeforeMove, e);
    }
  }, 30);

  var mouseup = function mouseup(e) {
    if (!isMove) {
      (0, _util.callFunc)(options.onClick, e);
    } else {
      (0, _util.callFunc)(options.onUp, e, e.clientX - ox, e.clientY - oy);
    }

    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  };

  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
}
/**
 * 打开文件上传
 * @author wangchuitong
 */


function importFile() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var input = document.querySelector('.w-input-temp-hide');

  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.style.position = 'absolute';
    input.style.left = '-1000px';
    input.style.top = '-1000px';
    input.style.opacity = '0';
    input.className = 'w-input-temp-hide';
    var inputProps = options.inputProps || {};
    Object.keys(inputProps).forEach(function (key) {
      input.setAttribute(key, inputProps[key]);
    }); // input.setAttribute('accept','image/*');

    document.body.appendChild(input);
  }

  return new Promise(function (cb) {
    function onChange(e) {
      var elem = e.target;
      var files = Array.from(elem.files);
      var result = options.multiple ? files : files[0];
      cb(result);
      elem.value = null;
      elem.removeEventListener('change', onChange);
    }

    var _input = input,
        prevChangeFunc = _input.prevChangeFunc;

    if (prevChangeFunc) {
      input.removeEventListener('change', prevChangeFunc);
    }

    input.addEventListener('change', onChange);
    input.prevChangeFunc = onChange;
    input.click();
  });
}

function blobToBase64(blob) {
  if (!blob) {
    return null;
  }

  return new Promise(function (cb, eb) {
    var reader = new FileReader();

    reader.onload = function (e) {
      cb(e.target.result);
    };

    reader.onerror = eb;
    reader.readAsDataURL(blob);
  });
}

function base64ToBlob(base64, filename) {
  var arr = base64.split(',');

  if (arr.length < 2) {
    return base64;
  }

  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: mime
  });
}