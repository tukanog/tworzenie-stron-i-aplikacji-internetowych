function qs(s) { return document.querySelector(s) }
function qsa(s) { return document.querySelectorAll(s) }

const WYCIECZKA = qs('#wycieczka')

WYCIECZKA.onsubmit = function(e) {
    e.preventDefault()

    const IMIE = qs('#imie').value
    const NAZWISKO = qs('#nazwisko').value
    const KLASA = qs('#klasa').value
    const KOMUNIKAT = qs('#komunikat1')

    // console.log(`${IMIE} ${NAZWISKO} ${KLASA}`)
    KOMUNIKAT.innerHTML += `${IMIE} ${NAZWISKO} - ${KLASA}<br>`
    e.target.reset() // wyczyszcza formularz
}

const NEWSLETTER = qs('#newsletter')

NEWSLETTER.onsubmit = function(e) {
    e.preventDefault()

    const EMAIL = qs('#email').value
    const KOMUNIKAT = qs('#komunikat2')

    // console.log(`Wyraziłeś zgodę na newsletter, zostanie on wysłany na mail ${EMAIL}`)
    KOMUNIKAT.innerHTML = `Wyraziłeś zgodę na newsletter, zostanie on wysłany na mail ${EMAIL}`
}

const ANKIETA = qs('#ankieta')

// ANKIETA.onsubmit = function(e) {
//     e.preventDefault()

//     const SPORT1 = qs('#id1')
//     const SPORT2 = qs('#id2')
//     const SPORT3 = qs('#id3')
//     const SPORT4 = qs('#id4')
    
//     if(SPORT1.checked) { console.log(SPORT1.value) }
//     if(SPORT2.checked) { console.log(SPORT2.value) }
//     if(SPORT3.checked) { console.log(SPORT3.value) }
//     if(SPORT4.checked) { console.log(SPORT4.value) } 
// }

ANKIETA.onsubmit = function(e) {
    e.preventDefault()

    const SPORTY = qsa('.sport:checked')
    const KOMUNIKAT = qs('#komunikat3')
    
    let lista = []

    // for (let i = 0; i < SPORTY.length; i++) {
    //     console.log(SPORTY[i].value)
    // }

    SPORTY.forEach( function(elem) {
        lista.push(elem.value) // .push(el) - umieszcza wartość na końcu tablicy
    })

    // console.log(`Sporty które uprawiasz: ${lista.join(', ')}`)
    KOMUNIKAT.innerHTML = `Sporty które uprawiasz: ${lista.join(', ')}`
}

const WOJEWODZTWA = qs('#wojewodztwa')

WOJEWODZTWA.onsubmit = function(e) {
    e.preventDefault()

    const WOJEW = qs('.wojewodztwo:checked').value
    const KOMUNIKAT = qs('#komunikat4')

    // console.log(`Wybrane województwo: ${WOJEW}`)
    KOMUNIKAT.innerHTML = `Wybrane województwo: ${WOJEW}`
}