const deepCopy = (obj) => {
  if (typeof obj !== 'object') return

  const newObj = Array.isArray(obj) ? [] : {}

  for (let objKey in obj) {
    if (obj.hasOwnProperty(objKey)) {
      newObj[objKey] = typeof obj[objKey] === 'object' ? deepCopy(obj[objKey]) : obj[objKey]
    }
  }
  return newObj
}
