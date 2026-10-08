/* KISS - Keep It Simple, Stupid */
/**
 * Funkcja oblicza miejsca zerowe funkcji kwadratowej
 * @param {number} a współczynnik A
 * @param {number} b współczynnik B
 * @param {number} c współczynnik C
 * @returns {string}
*/
function miejscaZerowe(a, b, c) {
    let komunikat = ''
    let delta = 0
    delta = obliczDelte(a, b, c)

    if (delta < 0) {
        komunikat = 'Brak miejsc zerowych'
    } else if (delta === 0) {
        let miejsceZerowe = obliczMiejsceZerowe(a, b)
        komunikat = `Jedno miejsce zerowe równe ${miejsceZerowe}`
    } else {
        komunikat = 'Dwa miejsca zerowe'
    }
    return komunikat
}

console.log(miejscaZerowe(1,2))
/**
 * 
*/
function obliczMiejsceZerowe(a, b) {
    let miejsceZerowe = 0
    miejsceZerowe = -b / (2 * a)
}

/**
 * Funkcja oblicza deltę dla podanych współczynników a, b, c
 * @param {number} a współczynnik A
 * @param {number} b współczynnik B
 * @param {number} c współczynnik C
 * @returns {number} delta
*/
function obliczDelte(a, b, c) {
    let delta = 0
    delta = b ** 2 - 4 * a * c
    return delta
}
console.log(obliczDelte(-1, 2, -3))
console.log(miejscaZerowe(-1, 2, -3))