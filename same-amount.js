function sameAmount(str,reg1,reg2){
    const regex1 = new RegExp(reg1,'g')
    const regex2 = new RegExp(reg2,'g')
    // console.log(regex1,'-',regex2)
    const resRegex1 = str.match(regex1)
    const resRegex2 = str.match(regex2)
    console.log(resRegex1,'---',resRegex2)
    if((resRegex1 != null&&resRegex2!=null)&&(resRegex1.length === resRegex2.length)){
        return true
    }
    return false
}
// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
// console.log(sameAmount(data, /q /, /qqqqqqq/))