function isLeapYear(data){
    const year = data;
    let flag = false
    if(year%4===0){
        flag = true
    }
    if(year%100===0){
        flag = false
    }
    if(year%400===0){
        flag =true
    }
    return flag
}
function countLeapYears(date){
    let count = 0
    const year = date.getFullYear();
    for (let i = year;i>4;i--){
        if(isLeapYear(i)){
            count++
        }
    }
    return count
}