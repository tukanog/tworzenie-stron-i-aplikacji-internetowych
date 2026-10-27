function qs(s) { return document.querySelector(s) }

const FORMULARZ = qs('#formularz')

FORMULARZ.onsubmit = function(e) {
    e.preventDefault()

    let cena = qs('#cena').value
    let ilosc = qs('#ilosc').value
    let kod = qs('#kod').value
    const P_WARTOSC = qs('#wartosc')
    const P_RABAT = qs('#rabat')
    const P_DOSTAWA = qs('#dostawa')
    const P_WYNIK = qs('#wynik')

    P_WARTOSC.textContent = ''
    P_RABAT.textContent = ''
    P_DOSTAWA.textContent = ''
    P_WYNIK.textContent = ''

    let wartosc = cena * ilosc

    P_WARTOSC.textContent = wartosc

    if (kod === 'RABAT10') {
        let rabat = wartosc * 0.1
        P_RABAT.textContent = rabat
        wartosc = wartosc - (wartosc * 0.1)
    }

    if (wartosc >= 150) {
        P_DOSTAWA.textContent = 0
    } else {
        P_DOSTAWA.textContent = 15
        wartosc = wartosc + 15
    }

    P_WYNIK.textContent = wartosc
    
    e.target.reset()
}