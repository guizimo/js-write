const getType = (value) => {
  if (value === null) {
    return '' + null
  }
  if (typeof value === 'object') {
    const valueClass = Object.prototype.toString.call(value).slice(8, -1)
    return valueClass.toLowerCase()
  } else {
    return typeof value
  }
}
