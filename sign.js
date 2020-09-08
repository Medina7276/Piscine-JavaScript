function sign(n) {
    if (n>0){
        return 1
    }
    if (n<0){
        return -1
    }else {
        return 0
    }
}
function sameSign(a,b){
    let ax = (a>0)
    let bx = (b>0)
    if ((a==0) && (b == 0)){
        return true
    }
    if ((a==0)&&(b!=0)){
        return false
    }
    if ((a!=0)&&(b==0)){
        return false
    }
    if ((ax && bx)||(!ax && !bx)){
        return true
    }else {
        return false
    }
}
console.log(sameSign(-231,0))