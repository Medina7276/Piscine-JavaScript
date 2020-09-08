export function generateLetters(){
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=1;i<=120;i++){
        let char = ''
        char += possible.charAt(Math.floor(Math.random()*possible.length))
        let elem = document.createElement('div')
        elem.innerHTML = char
        // let str =  "font-size:"+(i+10)+"px;"
        // elem.setAttribute("style",str);
        elem.style.fontSize = (i+10)+'px';
        if (i <= 40 ){
            elem.style.fontWeight = "300";
        } else if (i <= 80) {
            elem.style.fontWeight = "400";
        } else {
            elem.style.fontWeight = "600";
        }
        document.body.append(elem)
        console.log(i)
    }
}