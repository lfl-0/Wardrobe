function debounce(func, delay = 100, immediate = false) {
  /**
 * @desc 函数防抖
 * @param func 函数
 * @param delay 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
  let timer
  if (immediate) {
    // 立即执行
    let callNow = true
    return function () {
      if (timer) clearTimeout(timer)
      if (callNow) {
        func.apply(this, arguments)
        callNow = false
      }
      timer = setTimeout(() => {
        func.apply(this, arguments)
        timer = true
      }, delay);
    }
  }
  else {
    // 非立即执行
    return function () {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, arguments)
      }, delay)
    }
  }
}

function throttle(func, delay = 500) {
  /**
* @desc 函数节流
* @param func 函数
* @param delay 延迟执行毫秒数
*/
  let previous = 0;
  return function () {
    let now = Date.now();
    if (now - previous > delay) {
      func.apply(this, arguments);
      previous = now;
    }
  }
}

function dateFormat(date, fmt) {
  let ret;
  let opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

export { debounce, throttle, dateFormat }