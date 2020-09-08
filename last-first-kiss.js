function first(n){
    return n[0]
}
function last(n){
    return n[n.length-1]
}
function kiss(n){
    return [n[n.length-1], n[0]]
}
console.log(kiss('abc'));