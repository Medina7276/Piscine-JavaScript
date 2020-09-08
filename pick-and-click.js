export function pick() {
    let div1 = document.createElement("div")
    div1.className = "text"
    div1.classList.add("hsl")
    document.body.appendChild(div1)

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'height', window.innerHeight)
    svg.setAttributeNS(null, 'width', window.innerWidth)



    let linex = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    linex.setAttributeNS(null, 'id', 'axisY')
    linex.setAttributeNS(null, 'x1', 0)
    linex.setAttributeNS(null, 'y1', 0)
    linex.setAttributeNS(null, 'x2', 0)
    linex.setAttributeNS(null, 'y2', 0)
    linex.style.stroke = "white"
    linex.style.strokeWidth = 1;

    let liney = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    liney.setAttributeNS(null, 'id', 'axisX')
    liney.setAttributeNS(null, 'x1', 0)
    liney.setAttributeNS(null, 'y1', 0)
    liney.setAttributeNS(null, 'x2', 0)
    liney.setAttributeNS(null, 'y2', 0)
    liney.style.stroke = "white"
    liney.style.strokeWidth = 1;

    svg.appendChild(liney)
    svg.appendChild(linex)


    document.body.appendChild(svg)

    addEventListener("mousemove", e => {
        document.querySelectorAll(".hue", ".hsl").forEach(e => {
            e.remove()
        })
        document.querySelectorAll(".hsl").forEach(e => {
            e.remove()
        })
        document.querySelectorAll(".luminosity").forEach(e => {
            e.remove()
        })
        let liney = document.getElementById('axisX')
        let linex = document.getElementById('axisY')

        linex.setAttributeNS(null, 'x1', 0)
        linex.setAttributeNS(null, 'y1', e.clientY)
        linex.setAttributeNS(null, 'x2', window.innerWidth)
        linex.setAttributeNS(null, 'y2', e.clientY)

        liney.setAttributeNS(null, 'x1', e.clientX)
        liney.setAttributeNS(null, 'y1', 0)
        liney.setAttributeNS(null, 'x2', e.clientX)
        liney.setAttributeNS(null, 'y2', window.innerHeight)



        let x = e.clientX / window.innerWidth * 360
        let y = e.clientY / window.innerHeight * 100
        document.body.style.background = "hsl(" + x + ",50%," + y + "%)"
        let hue = document.createElement("div")
        hue.className = "hue"
        hue.classList.add("text")
        hue.innerHTML = "hue" + "<br>" + Math.round(x)
        document.body.appendChild(hue)

        let hsl = document.createElement("div")
        hsl.className = "hsl"
        hsl.classList.add("text")
        hsl.innerHTML = "hsl(" + Math.round(x) + ", 50%, " + Math.round(y) + "%)"
        document.body.appendChild(hsl)

        let luminosity = document.createElement("div")
        luminosity.className = "luminosity"
        luminosity.classList.add("text")
        luminosity.innerHTML = Math.round(y) + "<br>luminosity"
        document.body.appendChild(luminosity)

    })
    addEventListener("click", e => {
        let val = document.getElementsByClassName('hsl')[0].innerHTML;
        let input = document.createElement('input')
        document.body.appendChild(input)
        input.value = val
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input)

    })
}   