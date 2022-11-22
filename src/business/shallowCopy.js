const shallowCopy = (obj) => {
  if (!obj || typeof obj !== 'object') return
  let newObj = Array.isArray(obj) ? [] : {}
  for (let objKey in obj) {
    if (obj.hasOwnProperty(objKey)) {
      newObj[objKey] = obj[objKey]
    }
  }
  return newObj
}
