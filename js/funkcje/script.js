/* Zad. 1 Walidator wieku */

function sprawdzDostep(wiek, kraj) {
    if (kraj == 'USA') {
        if (wiek >= 21) {
            komunikat = 'Zapraszamy!'
        }
        else {
            komunikat = 'Jesteś za młody.'
        }
    }
    else {
        if (wiek >= 18) {
            komunikat = 'Zapraszamy!'
        }
        else {
            komunikat = 'Jesteś za młody.'
        }
    }

    return komunikat
}

console.log(sprawdzDostep(18, 'polska'))
console.log(sprawdzDostep(18, 'USA'))

/* Zad. 2 Kalkulator ceny z rabatem */

function obliczCene(cena, rabat = 10) {
    let cenaZRabatem = 0
    try {
        if (rabat > 100 || rabat < 0) {
            throw new Error('Błędny rabat.')
        }
        else {
            cenaZRabatem = cena - (cena * rabat / 100)
        }
    }
    catch (err) {
        return err.message
    }

    return cenaZRabatem
}

console.log(obliczCene(100))
console.log(obliczCene(100, 20))
console.log(obliczCene(100, 101))
console.log(obliczCene(100, -1))

/* Zad. 3 Generator powitań zależny od poru dnia */

function powitanie(i, g) {
    let k = ''
    if (g < 12) {
        k = `Dzień dobry, ${i}`
    }
    else if (g >= 18) {
        k = `Dobry wieczór, ${i}`
    }
    else {
        k = `Cześć, ${i}`
    }
    return k
}

console.log(powitanie('Adam', 11))
console.log(powitanie('Adam', 15))
console.log(powitanie('Adam', 19))

/* Zad. 4 Przelicznik temperatury */

function konwertujTemperature(w, jd) {
    if (jd == 'F') {
        temperatura = (w * 1.8 + 32)
        return temperatura
    }
    else if (jd == 'K') {
        temperatura = (w + 273.15)
        return temperatura
    }
    else {
        komunikat = 'Nieznana jednostka.'
        return komunikat
    }
}

console.log(konwertujTemperature(20, 'K'))
console.log(konwertujTemperature(20, 'F'))
console.log(konwertujTemperature(20, 'S'))

/* Zad. 5 System oceniania zadań */

function ocenZadanie(liczbaPunktow, maxLiczbaPunktow = 100) {
    let wynik = liczbaPunktow * 100 / maxLiczbaPunktow
    if (liczbaPunktow <= maxLiczbaPunktow) {
        if (wynik > 50) {
            komunikat = 'Zaliczone!'
        }
        else {
            komunikat = 'Niezaliczone.'
        }
    }
    else {
        komunikat = 'Błąd danych.'
    }
    return komunikat
}

console.log(ocenZadanie(46, 90))
console.log(ocenZadanie(45, 90))
console.log(ocenZadanie(91, 90))