export function compose(){
    document.addEventListener("keydown", (event)=>{
        let eventCode = event.keyCode
        if(eventCode === 27){
            document.querySelectorAll("div").forEach((item) => {
                item.remove()
            })
        }else if(eventCode === 8){
            let removeLastChar = document.querySelectorAll("div")
            removeLastChar[removeLastChar.length-1].remove()
        }else{
            let eventKey = event.key
            let block = document.createElement("div")
            block.classList.add("note")
            let color = "#"+99+eventCode+eventCode
            block.style.background = color
            document.body.appendChild(block)
            block.innerHTML = eventKey
        }
    })
}