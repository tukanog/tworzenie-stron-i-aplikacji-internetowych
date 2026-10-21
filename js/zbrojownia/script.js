function qs(s) { return document.querySelector(s) }

const NOWA_BRON = qs('#nowaBron')

const BRONIE = qs('#bronie')

NOWA_BRON.onsubmit = function(e) {
    e.preventDefault()

    const NAZWA = qs('#nazwa').value
    const RODZAJ = qs('#rodzaj').value
    const WZMOCNIENIE = qs('.wzmocnienie:checked').value

    const DIV = document.createElement('div')
    DIV.style.width = '220px'
    DIV.classList.add('rel')

    /* obrazek */
    const IMG = document.createElement('img')
    IMG.src = 'img/' + RODZAJ + '_' + WZMOCNIENIE + '.jpg'
    IMG.alt = NAZWA
    IMG.style.width = '100%'

    /* nazwa */
    const P = document.createElement('p')
    P.innerHTML = NAZWA

    /* usuwanie */
    const X = document.createElement('div')
    X.innerHTML = 'X'
    X.classList.add('x')
    X.onclick = function() {
        BRONIE.removeChild(DIV)
    }

    DIV.appendChild(IMG)
    DIV.appendChild(P)
    DIV.appendChild(X)

    BRONIE.appendChild(DIV)


    e.target.reset()
}