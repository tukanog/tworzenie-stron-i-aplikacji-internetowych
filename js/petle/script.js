// petla for
let suma = 0
for (let i = 0; i < 10; i++) {
    suma += i
}
console.log(`Suma: ${suma}`)


for (; suma > 3;) {
    suma /= 2
}

console.log(suma)

let rand = 0
for (;;) {
    rand = Math.random()
    if(rand > 0.5) {
        break // natychmiast przerwij pętlę
    }
}
console.log(rand)

for(let i = 0; i < 10; i++) {
    console.log(i)
    if(i % 3 == 0) {
        continue // przerwij bieżące wykonanie pętli i przejdź do kolejnego
    }
    console.log(i)
}

// praca z tablicą
let arr = [5, 9, 6, 12, 9, 10, 8, 3, 6, 2, 1]

for(let i = 0; i < arr.length; i++) {
    let stan = 'nieparzysta'
    if(arr[i] % 2 === 0){ stan = 'parzysta'}
    console.log(`${arr[i]} jest ${stan}`)
}

let tekst = 'Ala ma kota'
let zmienionyTekst = ''
for (let i = 0; i < tekst.length; i++) {
    if(tekst[i] === ' ') { continue }
    zmienionyTekst += tekst[i]
}
console.log(zmienionyTekst)