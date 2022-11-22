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
