function longWords(arr){
    let res = arr.every(function(value){
        return value.length > 5
    })
    return res
}
function oneLongWord(arr){
    let res = arr.some(function(value){
        return value.length >=10
    })
    return res
}
function noLongWords(arr){
    let res = arr.every(function(value){
        return value.length < 7
    })
    return res
}
// let arr = ['avsdasaaa','aaaaa']
// console.log(noLongWords(arr))