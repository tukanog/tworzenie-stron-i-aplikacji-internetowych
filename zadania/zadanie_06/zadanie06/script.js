function qs(s) { return document.querySelector(s) }

// Zad. 1
const HEADER = qs('header')
const H1 = document.createElement('h1')
H1.innerHTML = 'Zadania'
H1.style.color = 'green'
H1.style.textDecoration = 'underline'
H1.style.fontStyle = 'italic'
HEADER.appendChild(H1)

// Zad. 2
const MAIN = qs('main')
const AKAPITY = qs('#akapity')
const TEKST = qs('#tekst')
const STYL = qs('#styl')

AKAPITY.onsubmit = function(e) {
    e.preventDefault()

    const P = document.createElement('p')
    P.innerHTML = TEKST.value
    P.classList = STYL.value
    P.style.padding = '1.2em'

    MAIN.appendChild(P)

    e.target.reset()
}

// Zad. 3
const MENU = qs('menu')
const A = qs('a')
const LI = document.createElement('li')
MENU.appendChild(LI)
LI.appendChild(A)