function slice(str, start = 0, end = str.length) {
    if (start < 0) {
        start = -start
        start = str.length - start
    }
    if (end < 0) {
        end = -end
        end = str.length - end
    }
    let res = ''
    let arr = []
    for (let i = 0; i <= str.length - 1; i++) {
        if (i >= start && i < end) {
            if (typeof str == 'string') {
                res += str[i]
            } else if (Array.isArray(str)) {
                arr.push(str[i])
            }
            console.log(str[i])
        }
    }
    if (typeof str == 'string') {
        return res
    }
    return arr
}
console.log(slice('abcdef', 0, -2))