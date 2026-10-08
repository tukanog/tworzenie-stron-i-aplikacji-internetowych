/**
 * Funkcja zwraca pensje netto na podstawie pensji brutto
 * 
 * @param {number} pensjaBrutto pensja przed podatkiem
 * @returns {number} pensja po odjęciu podatku
 */
function obliczPensjeNetto(pensjaBrutto) {
    let pensjaNetto = 0
    pensjaNetto = pensjaBrutto - obliczPodatek(pensjaBrutto)
    return pensjaNetto
}

function obliczPodatek(pensjaBrutto, wysokoscPodatku=0.25) {
    let podatek = 0
    podatek = pensjaBrutto * wysokoscPodatku
    return podatek
}


console.log(obliczPodatek(4806))