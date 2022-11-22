/**
 * 手写防抖
 * @param fn
 * @param wait
 * @returns {function(): *}
 */
const myDebounce = (fn, wait) => {
  let timer = null
  return function () {
    // 处理参数
    let context = this
    let args = arguments
    // 清理定时器
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    // 设置定时器
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
    return fn
  }
}

/**
 * 防抖升级版
 * @param fn
 * @param wait
 * @param immediate
 * @returns {_debounce}
 */
const myDebouncePlus = (fn, wait, immediate = false) => {
  let timer = null
  let isInvoke = false
  const _debounce = function () {
    // 处理
    let context = this
    let args = arguments
    // 清理定时器
    if (timer) {
      clearTimeout(timer)
    }
    // 第一次立马执行
    if (!isInvoke && immediate) {
      fn.apply(context, args)
      isInvoke = true
      return
    }
    // 设置定时器
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
      isInvoke = false
    }, wait)
  }
  return _debounce
}

