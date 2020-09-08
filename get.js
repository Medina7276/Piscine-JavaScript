const get = (src, path) => {
    let pathArr = path.split('.')
    let cur = src
    pathArr.forEach((element) => {
        if (cur === undefined) return cur
        cur = cur[element]
    })
    return cur
}