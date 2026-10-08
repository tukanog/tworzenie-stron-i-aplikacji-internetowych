/* Zad. 1 */
/**
 * Funkcja oblicza czas potrzebny na ściągnięcie pliku na podstawie rozmiaru pliku i przepustowości
 * 
 * @param {number} rozmiarPliku rozmiar pliku w MB
 * @param {number} przepustowosc przepustowość w MB/s
 * @returns {number} czas potrzebny na ściągnięcie pliku w sekundach
 */
function obliczCzasSciaganiaPliku(rozmiarPliku, przepustowosc) {
    czasSciagania = 0
    czasSciagania = rozmiarPliku / przepustowosc
    return czasSciagania
}
console.log(obliczCzasSciaganiaPliku(100, 50))




/* Zad. 2 */
/**
 * Funkcja oblicza koszt pobytu na podstawie ceny netto, doliczeniu podatku (23%) oraz opłaty środowiskowej (domyślnie 3%)
 * @param {number} cenaNetto cena netto w zł
 * @param {number} oplata domyślnie 0.03 (3%), można zmienić
 * @returns {number} cena brutto
 */
function kosztPobytu(cenaNetto, oplata = 0.03) {
    cenaBrutto = 0
    vat = obliczVat(cenaNetto)
    oplataSrod = obliczOplateSrod(cenaNetto, oplata)
    cenaBrutto = cenaNetto + vat + oplataSrod
    return cenaBrutto
}

console.log(kosztPobytu(1000, 0.03))

function obliczVat(cenaNetto) {
    vat = 0
    vat = cenaNetto * 0.23
    return vat
}

function obliczOplateSrod(cenaNetto, oplata) {
    oplataSrod = 0
    oplataSrod = cenaNetto * oplata
    return oplataSrod
}



/* Zad. 3 */
let obliczPotege = (x, y) => {
    potega = 0
    potega = x ** y
    return potega
}
console.log(obliczPotege(2, 3))