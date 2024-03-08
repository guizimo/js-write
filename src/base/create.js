instanceof/**
 * 将传入的对象作为原型
 * @param obj
 * @returns {Fn}
 */
const myCreate = (obj) => {
  function Fn() {
  }

  Fn.prototype = obj
  return new Fn()
}

const mCreate = (obj) => {
  function Fn() {
  }

  Fn.prototype = obj
  return new Fn()
}