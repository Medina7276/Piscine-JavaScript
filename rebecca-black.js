function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}
function isFriday(date){
    let friday = getWeekDay(date)
    // console.log(friday)
    if(friday === 'Friday'){
        return true
    }else {
        return false
    }
}
function isWeekend(date){
    let friday = getWeekDay(date)
    console.log(friday)
    if(friday === 'Saturday'||friday ==='Sunday'){
        return true
    }else {
        return false
    }
}
function isLeapYear(date){
    let year = date.getFullYear()
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
function isLastDayOfMonth(date){
    let month = date.getMonth()
    date.setHours(30)
    let getMonth = date.getMonth()
    // console.log(getMonth)
    if(month!=getMonth){
        return true
    }else{
        return false
    }
    // return month
}
// console.log(isLastDayOfMonth(new Date('2020-05-12')))