// //который берет строку и разделяет ее на массив строк на пробелы.
function words(str) {
    return str.split(' ')
}
// //который берет массив строк и соединяет их пробелами.
function sentence(arr) {
    return arr.join(' ')
}
// //берут строку и возвращают ее в верхнем регистре.
function yell(str) {
    return str.toUpperCase()
}
// //которые берут строку и возвращают ее в нижнем регистре и окружают ее *
function whisper(str) {
    return '*' + str.toLowerCase() + '*'
}
// //функция, которая принимает строку и преобразует ее в верхний регистр только для первой буквы, и в нижний регистр для остальной части строки
function capitalize(str) {
    return str.toUpperCase()[0] + str.slice(1).toLowerCase()
}

// console.log(capitalize('HELLO'))   