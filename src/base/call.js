/**
 * 自定义实现call
 * @returns {*|void}
 */
Function.prototype.myCall = function () {
  // 判断this的指向
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  // 处理参数，拿到传入的this与参数
  const args = Array.from(arguments)
  // 如果传入的this为null时，指向全局的window对象
  const newThis = args.shift() || window
  // 创建一个临时属性接受this，注意唯一性，可能会覆盖原有的属性
  newThis.fn = this
  // 将参数作为属性置入
  const res = newThis.fn(...args)
  // 删除属性，防止污染
  delete newThis.fn
  // 返回
  return res
}


/**
 * 自定义实现call，优化版
 * @returns {*}
 */
Function.prototype.myCallPlus = function () {
  // 判断this的指向
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  // 处理参数，拿到传入的this与参数
  const args = Array.from(arguments)
  // 如果传入的this为null时，指向全局的window对象
  const newThis = args.shift() || window
  // 创建一个唯一的key
  let fn = Symbol()
  // 接收临时this
  newThis[fn] = this
  // 将参数作为属性置入
  const res = newThis[fn](...args)
  // 删除属性，防止污染
  delete newThis[fn]
  // 返回
  return res
}
