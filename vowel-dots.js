const vowels = /[aeiouAEIOU]/g
function vowelDots(str){
    const res = str.match(vowels)
    let ret = ''
    let j = 0
    if(res === null){
        return str
    }
    for(let i = 0;i<str.length;i++){
        if(str[i]!==res[j]){
            ret += str[i]
        }
        if(str[i]===res[j]){
            ret += str[i]+'.'
            j++
        }
        if(j === res.length){
             ret += str.slice(i+1)
             return ret
         }
     }    
    return ret
}
console.log(vowelDots('a'))