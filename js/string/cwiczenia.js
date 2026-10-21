function qs(s) { return document.querySelector(s) }
function StworzAkapit(div, p) {
    const DIV = div
    const P = document.createElement('p')
    P.innerHTML = p
    DIV.appendChild(P)
}

// zad 1

const FORM_ZAD01 = qs('#form_zad01')
FORM_ZAD01.onsubmit = function(e) {
    e.preventDefault()
    let nazwa_uzytkownika = qs('#nazwa-uzytkownika').value
    StworzAkapit(qs('#czyszczenie-danych-wejsciowych'), nazwa_uzytkownika.toLowerCase())
    e.target.reset()
}

// zad 2

const FORM_ZAD02 = qs('#form_zad02')
FORM_ZAD02.onsubmit = function(e) {
    e.preventDefault()
    let imie_i_nazwisko = (qs('#imie-i-nazwisko').value).trim().split(' ') //musi być trim, bo jak ktoś da spacje na początku lub końcu, to się popsuje. A split tworzy z tej zmiennej tabelę (dzieli wartość na dwa elementy)
    let inicjal_imie = imie_i_nazwisko[0].at(0)
    let inicjal_nazwisko = imie_i_nazwisko[1].at(0)
    let inicjaly = inicjal_imie.concat('.',inicjal_nazwisko)
    StworzAkapit(qs('#inicjaly-i-ekstrakcja'), inicjaly)
    e.target.reset()
}

// zad 3

const FORM_ZAD03 = qs('#form_zad03')
FORM_ZAD03.onsubmit = function(e) {
    e.preventDefault()
    let url = qs('#url').value
    let warunek = url.includes('https://', 0) && url.endsWith('.pl') // jeżeli oba warunki są spełnione, to zmienna warunek przyjmuje wartość true, inaczej false, przez co polecenie wykonane niżej faktycznie działa (to jest polecenie if w skróconej formie)
    let wynik = warunek ? "Adres jest poprawny" : "Adres jest niepoprawny"
    StworzAkapit(qs('#walidator-domeny'), wynik)
    e.target.reset()
}

// zad 4

const ZAMIEN = qs('#zamien')
const STRING = qs('#string')
ZAMIEN.onclick = function(e) {
    e.preventDefault()
    const TEKST = STRING.innerHTML
    const ZMIENIONY_TEKST = TEKST.replace('S', 's')
    StworzAkapit(qs('#omijanie-niemutowalnosci'), ZMIENIONY_TEKST)
}

// zad 5

const POLICZ = qs('#policz')
const ARRAY = qs('#array')
POLICZ.onclick = function(e) {
    e.preventDefault()
    const TEKST = ARRAY.innerHTML
    const TABLICA = TEKST.split(',')
    const DLUGOSC = TABLICA.length
    StworzAkapit(qs('#parser-listy-zakupów'), DLUGOSC)
}
