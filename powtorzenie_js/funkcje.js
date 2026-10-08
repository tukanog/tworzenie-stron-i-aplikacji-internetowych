console.log('-- Obwód koła --')

/**
 * Oblicza obwód koła w oparciu o podany promień
 * 
 * @param {number} promien promień koła
 * @returns {number} obwód
 */
function obwodKola(promien) {
    let obwod = 0
    obwod = 2 * Math.PI * promien
    return obwod
}

console.log(obwodKola(4))

console.log('-- Twierdzenie Pitagorasa --')

/**
 * Funkcja oblicza przeciwprostokątną trójkąta
 * prostokątnego w oparciu o podane przyprostokątne
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

console.log(pitagoras(7,19))

console.log('-- BMI --')

/**
 * Funkcja oblicza wskaźnik BMI na podstawie podanych
 * wzrostu i wagi
 * @param {number} height wzrost w cm 
 * @param {number} weight  waga w kg
 * @returns {number} wskaźnik bmi 
 */
function bmi(height,weight) {
    let bmi = 0
    bmi = ( weight / ( height / 100 ) ** 2)
    return bmi
}
console.log(bmi(192,80))

console.log('-- Paliwo --')

/**
 * Funkcja oblicza ile paliwa należy zatankować, żeby przejechać
 * założoną trasę
 * 
 * @param {number} distance trasa w km 
 * @param {number} fuelConsumption spalanie w l/100km
 *  
 */
function fuelNeeded(distance, fuelConsumption) {
    let fuel = 0
    fuel = (distance * fuelConsumption) / 100
    return fuel
}

console.log(fuelNeeded(120,5.5))


