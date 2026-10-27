function qs(s) {return document.querySelector(s)}
function qsa(s) { return document.querySelectorAll(s) }

const P = qs('#text')
const INPUT = qs('#input')
const RANGE = qs('#range')
const RED = qs('#red')
const GREEN = qs('#green')
const BLUE = qs('#blue')
const YELLOW_BG = qs('#yellow-bg')
const GREEN_BG = qs('#green-bg')
const RESET = qs('#reset')

INPUT.oninput = function() {
    P.innerHTML = this.value
}

RANGE.onchange = function() {
    P.style.fontSize = this.value + 'px'
}

RED.onclick = function() {
    P.style.color = 'red'
}

GREEN.onclick = function() {
    P.style.color = 'green'
}

BLUE.onclick = function() {
    P.style.color = 'blue'
}

YELLOW_BG.onclick = function() {
    P.style.backgroundColor = 'yellow'
}

GREEN_BG.onclick = function() {
    P.style.backgroundColor = 'green'
}

RESET.onclick = function() {
    P.innerHTML = 'Przykładowy tekst'
    P.style = ''
}