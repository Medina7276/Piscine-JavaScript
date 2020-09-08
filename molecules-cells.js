/*
DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
 */
function DNA(RNA){
    let res = ''
    for(let i = 0;i<RNA.length;i++){
        if(RNA[i] === 'C'){
            res += 'G'
        }
        if(RNA[i] === 'G'){
            res += 'C'
        }
        if(RNA[i] === 'A'){
            res += 'T'
        }
        if(RNA[i] === 'U'){
            res += 'A'
        }
    }
    return res
}
function RNA(DNA){
    let res = ''
    for(let i = 0;i<DNA.length;i++){
        if(DNA[i] === 'G'){
            res += 'C'
        }
        if(DNA[i] === 'C'){
            res += 'G'
        }
        if(DNA[i] === 'T'){
            res += 'A'
        }
        if(DNA[i] === 'A'){
            res += 'U'
        }
    }
    return res
}
console.log(RNA('TAGC'))