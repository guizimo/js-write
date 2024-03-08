const myThrottle = (fn, delay) => {
  let curTime = Date.now()
  return function () {
    let context = this, nowTime = Date.now()
    if (nowTime - curTime >= delay) {
      curTime = Date.now()
      return fn.apply(context, arguments)
    }
  }
}


const mThrottle = (fn, delay) => {
  let timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      timer = null
      return fn.apply(this, arguments)
    }, delay)
  }
}