/**
 * 手写instanceof
 * @description 用于判断一个构造函数的prototype是否是出现在对象的原型链上的任何位置
 * @returns {boolean}
 * @param obj 实例对象
 * @param constructor 构造函数
 */
const myInstanceof = (obj, constructor) => {
  // 获取需要判断的对象的原型
  let proto = Object.getPrototypeOf(obj)
  // 获取构造函数的prototype
  let prototype = constructor.prototype
  // 递归判断原型链
  while (true) {
    if (!proto) return false
    if (prototype === proto) return true
    proto = Object.getPrototypeOf(proto)
  }
}

const mInstanceof = (obj, constructor) => {
  let  proto = Object.getPrototypeOf(obj)
  const prototype = constructor.prototype
  while (true) {
    if (!proto) return false
    if (prototype === proto) return true
    proto = Object.getPrototypeOf(proto)
  }
}