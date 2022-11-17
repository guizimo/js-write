/**
 * 手写new
 * @param Func
 * @param args
 */
function myNew(Func, ...args) {
  // 创建一个新的空对象
  const instance = {}
  // 将实例化的对象的原型指向构造函数的原型对象
  if (Func.prototype) {
    instance.__proto__ = Func.prototype
  }
  // 将构造函数的this指向实例化对象
  const res = Func.apply(instance, args)
  // 判断返回值
  if (typeof res === 'function' || (typeof res === 'object' && res !== null)) {
    return res
  }
  return instance
}

/**
 * 手写new-使用Object.create
 * @param Func
 * @param args
 * @returns {*}
 */
function myNewPlus(Func, ...args) {
  // 使用构造函数的原型对象创建一个对象
  const instance = Object.create(Func.prototype)
  // 将构造函数的this指向实例化对象
  const res = Func.apply(instance, args)
  // 判断返回值
  return typeof res === 'object' ? res : instance
}
