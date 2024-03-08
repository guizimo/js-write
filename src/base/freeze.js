const myDeepFreeze = (obj) => {
	if (obj instanceof Object) {
		Object.seal(obj)
		for (const arrayKey in obj) {
			if (obj.hasOwnProperty(arrayKey)) {
				Object.defineProperty(obj, arrayKey, {
					writable: false
				})
				myDeepFreeze(obj[arrayKey])
			}
		}
	}
	
}