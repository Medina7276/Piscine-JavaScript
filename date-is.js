function isValid(date){
    if(isNaN(date)|| date == 0){
        return false
    }else{
        return true
    }
}
function isAfter(date1,date2){
    let res = date1 - date2
    if(res>0){
        return true
    }else{
        return false
    }
}
function isBefore(date1,date2){
    let res = date1 - date2
    if(res<0){
        return true
    }else{
        return false
    }
}
function isFuture(date1){
    let date2 = new Date()
    let res = date1 - date2
    if(res>0){
        return true
    }else{
        return false
    }
}
function isPast(date1){
    if(!isValid(date1)){
        return false
    }
    let date2 = new Date()
    let res = date1 - date2
    if(res<0){
        return true
    }else{
        return false
    }
}
// console.log(isPast(''))