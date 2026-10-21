function qs(s) { return document.querySelector(s) }

const GENERATOR = qs('#generator')
const GALERIA = qs('#galeria')
const HEIGHT = qs('#height')
const WIDTH = qs('#width')
const OUTPUT_WIDTH = qs('#outputWidth')
const OUTPUT_HEIGHT = qs('#outputHeight')

WIDTH.oninput = function(e) {
    updateOutput(this, '#outputWidth')
}

HEIGHT.oninput = function(e) {
    updateOutput(this, '#outputHeight')
}

function updateOutput(el, id) {
    const OUTPUT = qs(id)
    OUTPUT.innerHTML = el.value + ' px'
}

GENERATOR.onsubmit = function(e) {
    e.preventDefault()

    const HEIGHT_STAN = qs('#height').value
    const WIDTH_STAN = qs('#width').value
    const STYLE = qs('#style').value
    const MNOZNIK = qs('.mnoznik:checked')
    const DIV = document.createElement('div')
    
    if (MNOZNIK) {
        DIV.style.width = WIDTH_STAN * 2 + 'px'
        DIV.style.height = HEIGHT_STAN * 2 + 'px'
    } else {
        DIV.style.width = WIDTH_STAN + 'px'
        DIV.style.height = HEIGHT_STAN + 'px'
    }
    console.log(DIV)

    DIV.classList.add(STYLE)
    // DIV.style.backgroundColor = STYLE

    // if (STYLE === 'red') {
    //     DIV.style.border = '3px solid aqua'
    // } else if (STYLE === 'green') {
    //     DIV.style.border = `3px solid brown`
    // } else if (STYLE === 'blue') {
    //     DIV.style.border = '3px solid yellow'
    // } else if (STYLE === 'white') {
    //     DIV.style.border = '3px solid black'
    // }

    DIV.onclick = function() {
        GALERIA.removeChild(this)
    }

    OUTPUT_WIDTH.innerHTML = '50 px'
    OUTPUT_HEIGHT.innerHTML = '50 px'
    GALERIA.appendChild(DIV)
    e.target.reset()
}
