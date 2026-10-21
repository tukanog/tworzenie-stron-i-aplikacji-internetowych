function qs(s) { return document.querySelector(s) }

if (document.cookie) {
    wyswietlImie()
}
else {
    let imie = prompt('Jak masz na imię?')  
    let czas = 60 * 2 // sekundy * minuty

    /*
        document.cookie = `nazwa = ${wartosc}; max-age = ${time}`
    */
    document.cookie = `imie=${imie}; max-age=${czas}`

    wyswietlImie()
}

function wyswietlImie() {
    qs('#imie').innerHTML = wartoscCiasteczka('imie')
}

function wyczysc() {
    document.cookie = `imie=; max-age=-1`
}

function wartoscCiasteczka(nazwa) {
    nazwa = nazwa + '='
    let ciasteczko = document.cookie.split('; ').find((element) => element.search(nazwa) == 0)
    console.log(ciasteczko)
    return ciasteczko ? ciasteczko.replace(nazwa, '') : false
    
    /* `czas=120; imie=Karol` -> ['czas=120', 'imie=Karol'] */
}