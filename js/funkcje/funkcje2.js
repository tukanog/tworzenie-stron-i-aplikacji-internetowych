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
    try {
        if(wzrost <= 0 || waga <= 0)
            throw new Error('Waga i/lub wzrost nie mogą być mniejsze bądź równe 0')
    } catch (err) {
        return err.message
    }
    BMI = waga / wzrost ** 2
    return BMI
}
console.log(BMI(0, 1.92))