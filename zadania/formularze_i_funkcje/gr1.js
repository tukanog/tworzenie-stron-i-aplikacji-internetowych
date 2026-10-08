// Zad 1: kantor
// napisz funkcję do obsługi formularza
// kurs dla poszczególnych walut: 1PLN = 0.23EUR = 0.27USD = 0.20GBP
function qs(s) { return document.querySelector(s) }

const KANTOR = qs('#kantor')

KANTOR.onsubmit = function(e) {
    e.preventDefault()

    const PLN = parseInt( qs('#pln').value )
    const WALUTA = qs('#waluta > option:checked').value
    const WYNIKKANTOR = qs('#wynikKantor')

    WYNIKKANTOR.innerHTML = przeliczanieWaluty(PLN, WALUTA) + ` ${WALUTA}`
    console.log(WALUTA)
}

function przeliczanieWaluty(kwota, waluta) {

    if (waluta == 'eur') {
        kwota = kwota * 0.23
    }
    else if (waluta == 'gbp') {
        kwota *= 0.2
    }
    else {
        kwota *= 0.27
    }
    return kwota
}

// Zad 2: faktura
// opracuj formularz dla poniższej funkcji - dobierz optymalne typy pól
/**
 * Funkcja oblicza koszt całkowity zakupu produktu 
 * 
 * @param {number} cena cena za kilogram
 * @param {number} waga waga produktu w kilogramach
 * @param {number} rabat rabat 0, 10 lub 20%
 */
function obliczCalkowityKoszt(cena, waga, rabat) {
    const KOSZT_BAZOWY = cena * waga
    const KOSZT_CALKOWITY = KOSZT_BAZOWY * (1 - rabat)

    return KOSZT_CALKOWITY
}
const CALKOWITYKOSZT = qs('#calkowitykoszt')

CALKOWITYKOSZT.onsubmit = function(e) {
    e.preventDefault()
    const CENA = parseFloat( qs('#cena').value )
    const WAGA = parseFloat( qs('#waga').value )
    const RABAT = parseFloat( qs('#rabat').value)
    const WYNIKCALKOWITYKOSZT = qs('#wynikcalkowitykoszt')

    WYNIKCALKOWITYKOSZT.innerHTML = obliczCalkowityKoszt(CENA, WAGA, RABAT) + ' zł'
}


// Zad 3: BMI
// Stwórz i obsłuż formularz obliczający BMI
// wzór: (waga[kg] / wzrost[cm] ** 2) * 10000
const BMI = qs('#BMI')

BMI.onsubmit = function(e) {
    e.preventDefault()

    const WZROST = parseInt( qs('#wzrost').value )
    const WAGABMI = parseFloat( qs('#wagaBMI').value )
    const WYNIKBMI = qs('#wynikBMI')

    WYNIKBMI.innerHTML = obliczBMI(WZROST, WAGABMI)
}

function obliczBMI(wzrost, wagaBMI) {
    let wynik = (wagaBMI / (wzrost ** 2)) * 10000

    return wynik
}

console.log(obliczBMI(190, 90))