function chunk(arr,int){
    let res = []
    let arr1 = []
    for(let i =0;i<arr.length;i++){
        res.push(arr.slice(0,int))
        arr = arr.slice(int)
        if(arr.length<int && arr.length != 0){
            res.push(arr)
            return res
        }
    }
    return res
}
