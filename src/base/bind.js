
/**
 * 来写写伪代码
 * 1、处理接收的参数，thisArg, ...args
 * 2、返回的参数是一个函数，注意将内层和外层的参数一起返回
 */

// es6写法
const myBind = (thisArg, ...args) => {

}


Function.prototype.myBind = function () {
  let args = Array.from(arguments)
  let thisArg = args.shift()

  return function () {
    arguments
  }
  //
}
