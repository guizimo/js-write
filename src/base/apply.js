/**
 * 自定义实现apply
 * @param thisArg
 * @param args
 * @returns {*|void}
 */
Function.prototype.myApply = function (thisArg, args) {
  // 判断this的指向
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  // 处理外部传递过来的this，如果this为null时，指向全局的window对象
  const newThis = thisArg || window
  // 创建一个Null对象，用作返回的载体
  let res = null
  // 创建一个临时属性接受this，注意唯一性，可能会覆盖原有的属性
  newThis.fn = this
  // 将参数作为属性置入
  res = newThis.fn(...args)
  // 删除属性，防止污染
  delete newThis.fn
  // 返回
  return res
}

/**
 * 自定义实现apply，进阶版
 * @param thisArg
 * @param args
 * @returns {*}
 */
Function.prototype.myApplyPlus = function (thisArg, args) {
  // 判断this的指向
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  // 处理外部传递过来的this，如果this为null时，指向全局的window对象
  const newThis = thisArg || window
  // 创建一个唯一的key
  const fn = Symbol()
  // 接收临时this
  newThis[fn] = this
  // 传入参数，调用新属性
  const res = newThis[fn](...args)
  // 删除属性，防止污染
  delete newThis[fn]
  // 返回
  return res
}
