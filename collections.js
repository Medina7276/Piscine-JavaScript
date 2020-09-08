// const str1 = 'hello'
// const arr1 = [ 1, 2, 1, 3 ]
// const obj1 = { x: 45, y: 75, radius: 24 }
// const set1 = new Set()
// const map1 = new Map()
// set1.add(1)
// set1.add(2)
// set1.add(1)
// set1.add(3)
// map1.set('a', 1)
// map1.set('b', 2)
// map1.set(3, 'c')
// map1.set(4, 'd')

const arrToSet = (arr) => {
    let set = new Set
    for(let i = 0;i<arr.length;i++){
        set.add(arr[i])
    }
    return set
}
const arrToStr = (arr) => {
    let str = ''
    for(let i = 0;i<arr.length;i++){
        str += arr[i]
    }
    return str
}
const setToArr = (set) => {
    let arr = Array.from(set)
    return arr
}
const setToStr = (set) => {
    let str = ''
    for (let item of set.values()) str += item;
    return str
}
const strToArr = (str) => {
    let arr = Array.from(str)
    return arr
}
const strToSet = (str) => {
    let set = new Set
    for(let i = 0;i<str.length;i++){
        set.add(str[i])
    }
    return set
}
const mapToObj = (map) => {
    let obj = {}
    for (var [key, value] of map.entries()) {
        obj[key] = value
      }
    return obj
}
const objToArr = (obj) => {
    let arr = []
    for (const [key, value] of Object.entries(obj)) {
        arr.push(value)
      }
    return arr
}
const objToMap = (obj) => {
    let map = new Map
    for (let key in obj) {
        map.set(key, obj[key])
      }
    return map
} 
const arrToObj = (arr) => {
    let obj = {}
    for(let i = 0;i<arr.length;i++){
        obj[i] = arr[i]
    }
    return obj
}
const strToObj = (str) => {
    let obj = {}
    for(let i = 0;i<str.length;i++){
        obj[i] = str[i]
    }
    return obj
}
const superTypeOf = (e) => {
    if (e=== null) return 'null'

  let instances = { Set, Map, Array, Function }

  for (let key in instances) {
    // console.log(key, instances[key])
    if (e instanceof instances[key]) return key
  }

  let types = { Number: 'number', String: 'string', Object: 'object' }
  for (let key in types) {
    if (typeof e=== types[key]) return key
  }

  return typeof e
}
// console.log(arrToSet(arr1)) // -> Set { 1, 2, 3 }
// console.log(arrToStr(arr1)) // -> '1213'
// console.log(setToArr(set1)) // -> [1, 2, 3]
// console.log(setToStr(set1)) // -> '123'
// console.log(strToArr(str1)) // -> ['h', 'e', 'l', 'l', 'o']
// console.log(strToSet(str1)) // -> Set { 'h', 'e', 'l', 'o' }
// console.log(mapToObj(map1)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
// console.log(objToArr(obj1)) // -> [45, 75, 24]
// console.log(objToMap(obj1)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
// console.log(arrToObj(arr1)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
// console.log(strToObj(str1)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

// console.log(superTypeOf(map1)) //         -> 'Map'
// console.log(superTypeOf(set1)) //         -> 'Set'
// console.log(superTypeOf(obj1)) //         -> 'Object'
// console.log(superTypeOf(str1)) //         -> 'String('
// console.log(superTypeOf(666)) //         -> 'Number'
// console.log(superTypeOf(NaN)) //         -> 'Number'
// console.log(superTypeOf(arr1)) //         -> 'Array'
// console.log(superTypeOf(null)) //        -> 'null'
// console.log(superTypeOf(undefined)) //   -> 'undefined'
// console.log(superTypeOf(superTypeOf)) // -> 'Function'
