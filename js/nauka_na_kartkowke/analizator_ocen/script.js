function qs(s) { return document.querySelector(s) }
function qsa(s) { return document.querySelectorAll(s) }

const OCENY = qsa('.ocena')
const BUTTON_SPRAWDZ = qs('#sprawdz')
const BUTTON_RESET = qs('#reset')
const P_SREDNIA = qs('#srednia')
const P_NIEDOSTATECZNE = qs('#niedostateczne')
const P_POZYTYWNE = qs('#pozytywne')

BUTTON_SPRAWDZ.onclick = function() {
    let suma_wartosci_ocen = 0, niedostateczne = 0, pozytywne = 0
    OCENY.forEach((el) => {
        let ocena = Number(el.textContent)
        // console.log(ocena)
        suma_wartosci_ocen += ocena
        if (ocena === 1) {
            niedostateczne++
            el.style.color = 'red'
        } else if (ocena === 2) {
            pozytywne++
            el.style.color = 'orange'
        } else {
            pozytywne++
            el.style.color = 'green'
        }
    })
    
    P_SREDNIA.textContent = (suma_wartosci_ocen / OCENY.length).toFixed(2)
    P_NIEDOSTATECZNE.textContent = niedostateczne
    P_POZYTYWNE.textContent = pozytywne
}

BUTTON_RESET.onclick = function() {
    OCENY.forEach(function(el) { // to samo co (el) => {}
        el.style.color = ''
    })
    P_SREDNIA.textContent = ''
    P_NIEDOSTATECZNE.textContent = ''
    P_POZYTYWNE.textContent = ''
}