function qs(s) { return document.querySelector(s) }
function qsa(s) { return document.querySelectorAll(s) }

const FORMULARZ = qs('#formularz')
const BUTTON_RESET = qs('#reset')
const P_CENA_PIZZY = qs('#cena-pizzy')
const P_LICZBA_DODATKOW = qs('#liczba-dodatkow')
const P_CENA_DODATKOW = qs('#cena-dodatkow')
const P_RAZEM = qs('#razem')

FORMULARZ.onsubmit = function(e) {
    e.preventDefault()

    let iloscDodatkow = 0, cenaDodatkow = 0

    const ROZMIAR = qs('#rozmiar')
    const DODATKI = qsa('.dodatek:checked')

    let cenaPizzy = parseInt(ROZMIAR.value)
    // console.log(cenaPizzy)

    DODATKI.forEach(el => {
        iloscDodatkow++
        console.log(el.value)
        cenaDodatkow += parseInt(el.value)
        
    })

    P_CENA_PIZZY.textContent = cenaPizzy
    P_LICZBA_DODATKOW.textContent = iloscDodatkow
    P_CENA_DODATKOW.textContent = cenaDodatkow
    P_RAZEM.textContent = cenaPizzy + cenaDodatkow
}

BUTTON_RESET.onclick = function() {
    P_CENA_PIZZY.textContent = ''
    P_LICZBA_DODATKOW.textContent = ''
    P_CENA_DODATKOW.textContent = ''
    P_RAZEM.textContent = ''
}