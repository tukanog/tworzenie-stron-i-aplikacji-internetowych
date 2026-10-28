function qs(s) { return document.querySelector(s) }

const ZAPISZ = qs('#zapisz')
const USUN = qs('#usun')
const POWITANIE = qs('#powitanie')

if (localStorage.getItem('imie')) POWITANIE.textContent = 'Witaj, ' + localStorage.getItem('imie') + '!'

ZAPISZ.onclick = function() {
    let imie = qs('#imie').value
    localStorage.setItem('imie', imie)
    POWITANIE.textContent = 'Witaj, ' + imie + '!'
}

USUN.onclick = function() {
    localStorage.removeItem('imie')
    POWITANIE.textContent = ''
}