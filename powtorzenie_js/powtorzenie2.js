function poleProstokata(a, b = 0) {
    let pole = 0
    if(b === 0) {
        pole = a * a
    } else {
        pole = a * b
    }
    return pole
}

console.log(poleProstokata(4))
console.log(poleProstokata(2, 9))

function opisAuta(marka='Opel', model='Agila', rokProdukcji = 2002) {
    return `Marka: ${marka}, Model: ${model}, Rok produkcji: ${rokProdukcji}`
}
console.log(opisAuta())
console.log(opisAuta('Suzuki', 'Splash', 2012))
console.log(opisAuta(undefined, 'Astra'))
console.log(opisAuta(undefined, undefined, 2020))

let hello = function() {
    console.log('Hello world')
}
hello()

let kwadrat = function(x) {
    return x ** 2
}

console.log(kwadrat(5))

let pierwiastek = (x) => { return Math.sqrt(x) }

console.log(pierwiastek(4))
