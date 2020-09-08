function triangle(str,int){
    let res = ''
    for(let i = 1;i<=int;i++){
        for(let j = 0;j<i;j++){
            res += str
        }
        if(i === int){
            return res
        }
        res += '\n'
    }
    return res
}
console.log(triangle('*',8))