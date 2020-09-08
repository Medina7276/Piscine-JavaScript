function round(n) {
    let ost
    let res
    let flag = false
    if (n < 0) {
        n = -n
        flag = true
    }
    ost = n % 1
    if (ost > 0.5) {
        res = n + 1 - ost
    } else {
        res = n - ost
    }
    if (flag) {
        res = -res
    }
    return res
}
function ceil(n) {
    let ost
    let res
    ost = n % 1
    if (n > 0 && ost != 0) {
        return res = n + 1 - ost
    } else {
        return res = n - ost
    }
    return n
}
function floor(n) {
    let ost
    let res
    ost = n % 1
    if (n > 0 && ost != 0) {
        return res = n - ost
    } else if (ost === 0) {
        // console.log(n)
        return n
    } else {
        let x
        x = 1 + ost
        return res = n - x
    }
    return n
}
function trunc(n) {
    let ost
    let res
    ost = n % 1
    if (n > 0 && ost != 0) {
        return res = n - ost
    } else {
        let x
        x = 1 + ost
        return res = n - ost
    }
    return n
}
