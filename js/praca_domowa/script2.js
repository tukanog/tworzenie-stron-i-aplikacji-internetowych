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
    BOX.style.height = STAN
    HEIGHT_OUTPUT.innerHTML = STAN
}