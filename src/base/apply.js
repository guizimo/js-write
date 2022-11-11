
Function.prototype.myApply = function (thisArg, args) {
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  const newThis = thisArg || window
  let res = null
  newThis.fn = this
  res = newThis.fn(...args)
  delete newThis.fn
  return res
}
