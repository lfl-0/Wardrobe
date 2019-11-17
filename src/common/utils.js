function debounce(func, delay = 300, immediate = false) {
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

export { debounce, throttle }