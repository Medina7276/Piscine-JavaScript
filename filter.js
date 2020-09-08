function filter(arr,func){
    let res =[]
    for(let i =0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}
function reject(arr,func){
    let res =[]
    for(let i =0;i<arr.length;i++){
        if(!func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}
function partition(arr,func){
    let resTrue = []
    let resFalse = []
    for(let i =0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            resTrue.push(arr[i])
        }
        if(!func(arr[i],i,arr)){
            resFalse.push(arr[i])
        }
    }
    let res2x = [resTrue,resFalse]
    return res2x
}
// console.log(partition(onlyNumbers,check1))