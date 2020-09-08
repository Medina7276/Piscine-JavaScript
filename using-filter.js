function filterShortStateName(obj){
    let array = obj.map(shortName =>{
        if(shortName.length<7){
            return shortName
        }
        // console.log(shortName.length)
        return null
    })
    let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
}
function filterStartVowel(obj){
    let array = obj.map(vowel=>{
        const regex = /^[aeiouAEIOU]/g
        const resRegex = new RegExp(regex)
        let str = vowel.match(resRegex)
        if(str !== null){
            return vowel
        }
        return null
})
let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
}
function filter5Vowels(obj){
    let array = obj.map(vowels5=>{
        const regex = /[aeiouAEIOU]/g
        const resRegex = new RegExp(regex)
        let str = vowels5.match(resRegex)
        if(str.length >= 5){
            return vowels5
        }
        return null
    })
    let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
}
function filter1DistinctVowel(obj){
    let array = obj.map(filter=>{
        const regex = /[aeiouAEIOU]/g
        const resRegex = new RegExp(regex)
        let str = filter.match(resRegex)
        let arr = []
        let flag = false
        Loop:
        for(let i=0;i<str.length-1;i++){
            for(let j=i+1;j<str.length;j++){
                if(str[i].toUpperCase()!==str[j].toUpperCase()){
                    flag - false
                    break Loop
                }
            }
            flag = true
        }
        if(flag){
            return filter
        }
        return null
    })
    let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
}
function multiFilter(obj){
    let array = obj.map(str=>{
        let flagCapital = false 
        let flagName = false
        let flagTag = false
        let flagRegion = false
        if(str.capital.length>=8){
            flagCapital = true
        }
        const regex = /^[aeiouAEIOU]/g
        const resRegex = new RegExp(regex)
        const regexT = /[aeiouAEIOU]/g
        const resRegexT = new RegExp(regexT)
        let res = str.name.match(resRegex)
        let resTag = str.tag.match(resRegexT)
        if(res===null){
            flagName = true
        }
        if(resTag !== null){
            flagTag = true
        }
        if(str.region !== 'South'){
            flagRegion = true
        }
        if(flagCapital&&flagName&&flagRegion&&flagTag){
            return str
        }
        return null
    })
    let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
}
// console.log(multiFilter(arr2))