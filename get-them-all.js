export function getArchitects() {
    let arr = []
    let res = Array.from(document.getElementsByTagName('a'))
    let res1 = Array.from(document.getElementsByTagName('span'))
    arr.push(res)
    arr.push(res1)
    return arr
} 

export function getClassical() {
    let arr =[]
    let res = Array.from(document.getElementsByClassName('classical'))
    let res1 = Array.from(document.querySelectorAll('a:not(.classical)'))
    arr.push(res)
    arr.push(res1)
    return arr
}



export function getActive() {
    let arr = []
    let res = Array.from(document.getElementsByClassName('classical active'))
    let res1 = Array.from(document.querySelectorAll('a.classical:not(.active)'))
    arr.push(res)
    arr.push(res1)
    return arr
}

export const getBonannoPisano = () =>{
    let arr = []
    let res = document.getElementById("BonannoPisano")
    let res1 = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))
    arr.push(res)
    arr.push(res1)
    return arr
}