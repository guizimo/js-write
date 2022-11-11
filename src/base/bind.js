Function.prototype.myBind = function () {
  let args = Array.from(arguments);
  let thisArg = args.shift();
  let thisFunc = this;

  // 因为需要构造函数，所以不能是匿名函数了
  let fBound = function () {
    newArgs = args.concat(Array.from(arguments));
    // 判断是否为构造函数
    thisArg = this instanceof fBound ? this : thisArg;
    return thisFunc.apply(thisArg, newArgs);
  }

  // 直接将原函数的prototype赋值给绑定函数
  fBound.prototype = this.prototype;

  return fBound;
}
