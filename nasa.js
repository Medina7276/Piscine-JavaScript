//Создайте функцию НАСА, которая принимает число N 
//в качестве параметра и возвращает строку 
//со всеми числами от 1 до N, 
//разделенными пробелами, с тремя исключениями: 
//Для чисел, кратных 3, добавьте «NA». 
//Для чисел, кратных 5, добавьте «SA». 
//Для числа, которое делится на 3 и 5, добавьте «НАСА».
function nasa(x){
    let res = ''
    for(let i = 1;i<=x;i++){
        if(i%3 ===0 && i%5 ===0){
            res += 'NASA' + ' '
        }else if(i%3 === 0 && i%5 != 0){
            res += 'NA'+' '
        }else if(i%3 != 0 && i%5 === 0){
            res += 'SA'+ ' '
        }else{
            res += String(i)+' '
        }   
    }
    res = res.slice(0,res.length-1)
    return res
}
console.log(nasa(15))