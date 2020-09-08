function letterSpaceNumber(str){
    const arr = []
    const regexWord = /[a-zA-Z]\s\d\b/g
    const res = str.match(regexWord)
    console.log(res)
    if (res != null){
        for(let i = 0;i<res.length;i++){
            // res[i] = res[i].slice(0,res[i].length-1)
        }
    }else {
        const res = []
        return res
    }
    return res

}