/*
    *    
   ***   
  *****  
 ******* 
*********   
*/
function pyramid(str, int) {
    let res = ''
    let currentLine = 1
    for (let i = 1; i <= int; i++) {
        res += ' '.repeat(int - i).repeat(str.length)
        res += str.repeat(i * 2 - 1)
        if (i === int) {
            return res
        }
        res += '\n'
    }

    return res
}
console.log(pyramid('{}', 12))