const getType = (value) => {
  if (value === null) {
    return '' + null
  }
  if (typeof value === 'object') {
    const valueClass = Object.prototype.toString.call(value)
    const type = valueClass.split(" ")[1].split("")
    console.log(valueClass, type)
    type.pop()
    return type.join("").toLowerCase()
  } else {
    return typeof value
  }
}
