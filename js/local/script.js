function qs(s) { return document.querySelector(s) }

let styl = qs('#styl')
let link = qs('link')

if (localStorage.getItem('motyw') == 'ciemny') {
    link.href = 'dark.css'
    styl.textContent = 'jasny'
}
if (localStorage.getItem('kolor')) {
    let h1 = qs('h1')
    let wartoscKoloruLocalStorage = localStorage.getItem('kolor')
    h1.style.color = wartoscKoloruLocalStorage
    qs('#kolor').value = wartoscKoloruLocalStorage
}

function przelaczMotyw() {
    let stan = qs('#css').checked
    if (stan) {
        link.href = 'dark.css'
        styl.textContent = 'jasny'
        localStorage.setItem('motyw', 'ciemny')
        // console.log(localStorage.getItem('motyw'))
    } else {
        link.href = 'light.css'
        styl.textContent = 'ciemny'
        localStorage.setItem('motyw', 'jasny')
        // console.log(localStorage.getItem('motyw'))
    }
}

function przelaczKolor() {
    let kolor = qs('#kolor').value
    let h1 = qs('h1')

    h1.style.color = kolor
    localStorage.setItem('kolor', kolor)
}


// localStorage.setItem('klucz', wartosc)
// localStorage.getItem('klucz')
// localStorage.removeItem('klucz')