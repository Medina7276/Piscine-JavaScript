function every(arr,func){
    let counter = 0
    for(let i = 0;i<arr.length;i++){
        if(!func(arr[i],i,arr)){
            return false
        }
    }
    return true
}
function some(arr,func){
    let counter = 0
    for(let i = 0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            return true
        }
    }
    return false
}
function none(arr,func){
    let counter = 0
    for(let i = 0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            return false
        }
    }
    return true
}
