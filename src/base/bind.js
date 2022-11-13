/**
 * 手写bind
 * @returns {function(): any}
 */
Function.prototype.myBind = function () {
  // 处理函数
  let args = Array.from(arguments);
  let thisArg = args.shift();
  // 暂存this
  let thisFunc = this;
  // 因为需要构造函数，所以不能是匿名函数了
  const fBound = function () {
    const newArgs = args.concat(Array.from(arguments));
    // 判断是否为构造函数
    thisArg = this instanceof fBound ? this : thisArg;
    return thisFunc.apply(thisArg, newArgs);
  }
  // 直接将原函数的prototype赋值给绑定函数
  fBound.prototype = this.prototype;
  // 返回
  return fBound;
}
