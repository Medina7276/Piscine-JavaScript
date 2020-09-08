import {colors} from './data.js';
export function generateClasses(){
    let style = document.createElement('style')
    style.innerHTML =  ''
    for(let i = 0; i < colors.length;i++){
        style.innerHTML +=  '.' + colors[i] + '{background:' + colors[i] + ';}'
    }
    document.getElementsByTagName('head')[0].appendChild(style);

}
export function generateColdShades(){
    let view = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    for(let i = 0;i<colors.length;i++){
        for(let j = 0;j<view.length;j++){
            let Regex = new RegExp(view[j])
            let bol = colors[i].match(Regex)
            if(bol !== null){
                let div = document.createElement('div')
                // document.head.classList.add(colors[i])
                div.className = colors[i]
                div.textContent = colors[i]
                document.body.append(div)
            }
        }
    }
}
export function choseShade(d){
    let elem = document.querySelectorAll('div')
    for(let i = 0;i<colors.length;i++){
        let style = elem[i].className
        let flag = elem[i].classList.contains(d)
        if(!flag){
            elem[i].classList.remove(style)
            elem[i].classList.add(d)
        } 
    }
    
}