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

// es6的Object.assign

// {...a, ...b}

// 数组slice，concat

const mShallowCopy = (obj) => {
  if (!obj || typeof obj !== 'object') return
  let newObj = Array.isArray(obj) ? [] : {}
  for (const key in newObj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}