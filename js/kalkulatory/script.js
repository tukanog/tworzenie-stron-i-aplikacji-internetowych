function qs(s) { return document.querySelector(s) }

const DODAWANIE = qs('#dodawanie')

DODAWANIE.onsubmit = function(e) {
    e.preventDefault()

    const A = parseFloat( qs('#num1').value ) // parseInt: liczba stała
    const B = parseFloat( qs('#num2').value ) // parseFloat: liczba zmiennoprzecinkowa

    console.log(A+B)
}

// Zad. 2

const PRZECIWPROSTOKATNA = qs('#przeciwprostokatna')

PRZECIWPROSTOKATNA.onsubmit = function(e) {
    e.preventDefault()

    const A = parseFloat( qs('#nr1').value )
    const B = parseFloat( qs('#nr2').value )
    const KOMUNIKAT = qs('#komunikat1')
    let C = Math.sqrt((A**2)+(B**2))

    KOMUNIKAT.innerHTML = `${C}`
}

// Zad. 3
const BMI = qs('#bmi')

BMI.onsubmit = function(e) {
    e.preventDefault()

    const WZROST = parseFloat( qs('#wzrost').value )
    const WAGA = parseFloat( qs('#waga').value )
    const KOMUNIKAT = qs('#komunikat2')
    let obliczoneBMI = WAGA / (WZROST/100)**2

    KOMUNIKAT.innerHTML = `${obliczoneBMI}`
}