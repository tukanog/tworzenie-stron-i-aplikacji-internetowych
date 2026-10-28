function qs(s) { return document.querySelector(s) }
function qsa(s) { return document.querySelectorAll(s) }


const POLICZ = qs('#policz')
const WYNIK = qs('#wynik')

POLICZ.onclick = function() {
    const PRZEDMIOTY = qsa('.przedmiot:checked')

    let ilePrzedmiotow = 0

    PRZEDMIOTY.forEach(el => {
        ilePrzedmiotow++
    })

    WYNIK.textContent = ilePrzedmiotow
}