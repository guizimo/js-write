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


const mDeepCopy = (obj) => {
  if (!obj || typeof obj !== 'object') return
  const newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? mDeepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}