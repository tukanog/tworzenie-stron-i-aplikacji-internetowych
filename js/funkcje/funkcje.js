console.log('-- Obwód koła --')
/**
 * Funkcja oblicza obwód koła w oparciu o podany promień
 * 
 * @param {number} r promień
 * @returns {number} obwód
 */
function obwodKola(r) {
    let obwod = 0
    obwod = 2 * Math.PI * r
    return obwod 
}
console.log(obwodKola(5))





console.log('--Twierdzenie Pitagorasa --')
/**
 * Funkcja oblicza przeciwprostokątną trójkąta prostokątnego w oparciu o podane przyprostokątne
 * 
 * @param {number} a pierwsza przyprostokątna
 * @param {number} b druga przyprostokątna
 * @returns {number} przeciwprostokątna
 */
function pitagoras(a, b) {
    let c = 0
    c = Math.sqrt(a ** 2 + b ** 2)
    return c
}
console.log(pitagoras(3, 4))





console.log('-- BMI --')
/**
 * Funkcja oblicza BMI w oparciu o wagę w kilogramach i wzroście w metrach
 * 
 * @param {number} waga waga w kilogramach
 * @param {number} wzrost wzrost w metrach
 * @returns {number} obliczone BMI
 */
function BMI(waga, wzrost) {
    let BMI = 0
    BMI = waga / wzrost ** 2
    return BMI
}
console.log(BMI(80, 1.92))

console.log('-- Kalkulator spalania --')
/**
 * Funkcja oblicza spalanie auta w oparciu o przebyty dystans i ilość zatankowanego paliwa po tej trasie
 * 
 * @param {number} zatankowane zatankowane paliwo w litrach po przebytej trasie
 * @param {number} km przebyta trasa w kilometrach
 * @returns {number} spalanie
 */
function spalaniePaliwa(zatankowane, km) {
    let spalanie = 0
    spalanie = (zatankowane / km) * 100
    return spalanie
}
console.log(spalaniePaliwa(20, 200), 'L / 100km')