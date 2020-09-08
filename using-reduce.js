function adder(arr,x=0){
    let result = arr.reduce(function(sum, current) {
        return sum + current;
      }, x)
      return result
    }  
function sumOrMul(arr,x=0){
    var result = arr.reduce(function(sum, current) {
        let res = 0
        if(current%2==0){
            res = sum*current
        }else{
            res = sum+current
        }
        return res
      }, x)
      return result
    }
// console.log(sumOrMul([1,2,3,4],5))
function funcExec(func,x){
    let result = func.reduce(function(sum, current) {
        return current(sum);
      }, x)
      return result
}