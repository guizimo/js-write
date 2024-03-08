
const myAssgin = (target, ...source) => {
  if (!source) {
    throw new TypeError('type error')
  }
  let res = Object(target)
  source.forEach(obj => {
    if (obj !== null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = obj[key]
        }
      }
    }
  })
  return res
  
}