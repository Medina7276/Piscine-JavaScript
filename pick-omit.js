function pick(obj, keys) {
    const obj2 = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key == keys) {
            obj2[key] = obj[key]
        }
    })
    return obj2
}
function omit(obj, keys) {
    const obj2 = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key != keys) {
            obj2[key] = obj[key]
        }
    })
    return obj2
} asd