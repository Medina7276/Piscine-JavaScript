function reverse(str) {

    if (typeof str === 'string') {
        let res = ''
        for (let i = str.length - 1; i >= 0; i--) {
            res += str[i]
        }
        return res

    }
    if (typeof str === 'object') {
        let arr = []
        for (let i = str.length - 1; i >= 0; i--) {
            arr.push(str[i])
            // console.log(arr[arr.length], str[i])
        }

        return arr

    }
}
console.log(reverse('pouet'))