function fold(arr,func,accumulator=0){
    for(let i = 0;i<arr.length;i++){
        accumulator = (func(accumulator,arr[i]))
    }
    return accumulator
}
function foldRight(arr,func,accumulator=0){
    for(let i = arr.length-1;i>=0;i--){
        console.log(arr[i])
        accumulator = (func(accumulator,arr[i]))
    }
    return accumulator
}
function reduce(arr,func,accumulator){
    if(typeof arr[0] === 'number'){
        accumulator = 0
    }else {
        accumulator = ''
    }
    for(let i = 0;i<arr.length;i++){
        accumulator = (func(accumulator,arr[i]))
    }
    return accumulator
}
function reduceRight(arr,func,accumulator){
    if(typeof arr[0] === 'number'){
        accumulator = 0
    }else {
        accumulator = ''
    }
    for(let i = arr.length-1;i>=0;i--){
        console.log(arr[i])
        accumulator = (func(accumulator,arr[i]))
    }
    return accumulator
}
