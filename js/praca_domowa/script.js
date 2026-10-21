function qs(s) {return document.querySelector(s) }
function qsa(s) {return document.querySelectorAll(s) }

const BOX = qs('#box')
const HEIGHT = qs('#height')
const HEIGHT_OUTPUT = qs('#heightOutput')
const WIDTH = qs('#width')
const WIDTH_OUTPUT = qs('#widthOutput')
const BACKGROUND_COLOR = qs('#backgroundColor')
const MARGIN = qs('#margin')
const PADDING_TOP_BOT = qs('#paddingTopBot')
const PADDING_LEFT_RIGHT = qs('#paddingLeftRight')
const BORDER_THICKNESS = qs('#borderThickness')
const BORDER_TYPE = qsa('.borderType')
const BORDER_COLOR = qs('#borderColor')

HEIGHT.oninput = function() {
    const STAN = this.value + 'px'
    BOX.style.height = H
    HEIGHT_OUTPUT.innerHTML = H 
}

WIDTH.oninput = function() {
    const STAN = this.value + 'px'
    BOX.style.width = STAN
    WIDTH_OUTPUT.innerHTML = STAN
}

BACKGROUND_COLOR.oninput = function() {
    const STAN = this.value
    BOX.style.backgroundColor = STAN
}

MARGIN.oninput = function() {
    const STAN = this.value + 'px'
    BOX.style.margin = STAN
}

PADDING_TOP_BOT.oninput = function() {
    const STAN = this.value + 'px'
    BOX.style.paddingTop = STAN
    BOX.style.paddingBottom = STAN
}

PADDING_LEFT_RIGHT.oninput = function() {
    const STAN = this.value + 'px'
    BOX.style.paddingLeft = STAN
    BOX.style.paddingRight = STAN
}

BORDER_THICKNESS.oninput = function() {
    const STAN = this.value + 'px'
    BOX.style.borderWidth = STAN
}

BORDER_TYPE.forEach( (el) => {
    el.onchange = function() {
        const STAN = el.checked
        const THICKNESS = el.value

        if(STAN) {
            BOX.style.borderStyle = THICKNESS
        }
    }
})