function qs(s) { return document.querySelector(s) }

const WIEK = qs('#wiek')
const WIEK_OUTPUT = qs('#wiek_output')

WIEK_OUTPUT.innerHTML = WIEK.value
WIEK.oninput = function() { WIEK_OUTPUT.innerHTML = WIEK.value }

// Zadanie 1

const SPRAWDZWIEK = qs('#sprawdzwiek')

SPRAWDZWIEK.onsubmit = function(e) {
    e.preventDefault()

    const WIEK = parseInt( qs('#wiek').value )
    const KRAJ = qs('#kraj').value
    const KOMUNIKAT = qs('#komunikat1')
    const SPRAWDZONYWIEK = sprawdzWiek(WIEK, KRAJ)

    KOMUNIKAT.innerHTML = `${SPRAWDZONYWIEK}`

}

function sprawdzWiek(wiek, kraj="Polska") {
    let komunikat = `Zapraszamy!`
    if( (wiek < 21 && kraj === 'USA') ||  (wiek < 18) ) {
        komunikat = `Jesteś za młody.`
    }
    return komunikat
}


// Zadanie 2
const RABAT = qs('#rabat')
const RABAT_OUTPUT = qs('#rabat_output')

RABAT_OUTPUT.innerHTML = RABAT.value
RABAT.oninput = function() { RABAT_OUTPUT.innerHTML = RABAT.value }

const OBLICZCENE = qs('#obliczcene')

OBLICZCENE.onsubmit = function(e) {
    e.preventDefault()

    const CENA = parseFloat( qs('#cena').value )
    const RABAT = parseInt( qs('#rabat').value )
    const OBLICZONACENA = obliczCene(CENA, RABAT)
    const KOMUNIKAT = qs('#komunikat2')

    KOMUNIKAT.innerHTML = `${OBLICZONACENA} zł`

}

function obliczCene(cena, rabat=10) {
    let wynik = 0
    if(rabat < 0 || rabat > 100) {
        return `Błędna wysokość rabatu`
    }
    wynik = cena - (cena * rabat/100)
    return wynik
}

// zadanie 3
const GODZINA = qs('#godzina')
const GODZINA_OUTPUT = qs('#godzina_output')

GODZINA_OUTPUT.innerHTML = GODZINA.value
GODZINA.oninput = function() { GODZINA_OUTPUT.innerHTML = GODZINA.value }

const POWITANIA = qs('#powitania')

POWITANIA.onsubmit = function(e) {
    e.preventDefault()

    const IMIE = qs('#imie').value
    const GODZINA = parseInt( qs('#godzina').value )
    const POWITANIE = powitania(IMIE, GODZINA)
    const KOMUNIKAT = qs('#komunikat3')

    KOMUNIKAT.innerHTML = `${POWITANIE}`
}

function powitania(imie, godzina = 12) {
    let komunikat = `Cześć, ${imie}`
    if(godzina < 12) {
        komunikat = `Dzień dobry, ${imie}`
    } else if(godzina > 18) {
        komunikat = `Dobry, wieczór ${imie}`
    } 
    return komunikat
}


// zadanie 4
function konwertujTemperature(temperatura, jednostka='F') {
    let wynik = 0
    if(jednostka === 'F') {
        wynik = temperatura * 1.8 + 32
    } else if(jednostka === 'K') {
        wynik = temperatura + 273.15
    } else {
        return `Nieznana jednostka`
    }
    return wynik
}



// Zadanie 5
function ocenZadanie(punkty, maxPunkty=100) {
    let komunikat = `Niezaliczone`
    if(punkty > maxPunkty) {
        komunikat = `Błędne dane`
    } else if(punkty/maxPunkty >= 0.50) {
        komunikat = `Zaliczone`
    } 
    return komunikat
}
