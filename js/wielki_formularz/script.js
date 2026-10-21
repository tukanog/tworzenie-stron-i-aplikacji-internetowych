function qs(s) { return document.querySelector(s) }
function qsa(s) { return document.querySelectorAll(s) }
function cl(i) { console.log(i) }

const WYCZIECZKA = qs('#wycieczka')
const POBYT = qs('#pobyt')
const POBYT_OUTPUT = qs('#pobyt_output')

POBYT_OUTPUT.innerHTML = POBYT.value * 5

POBYT.oninput = function() { POBYT_OUTPUT.innerHTML = POBYT.value * 5 }

WYCZIECZKA.onsubmit = function(e) {
    e.preventDefault()

    const IMIE = qs('#imie').value
    const NAZWISKO = qs('#nazwisko').value
    const EMAIL = qs('#email').value
    cl(`${IMIE} ${NAZWISKO} ${EMAIL}`)

    const KRAJ = qs('#kraj').value
    const KRAJ_CENA = parseFloat(qs('#kraj > option:checked').dataset.cena)
    const POBYT = parseInt( qs('#pobyt').value )
    cl(`${KRAJ} ${KRAJ_CENA} ${POBYT}`)

    const PAKIET = qs('.pakiet:checked').value 
    const PAKIET_MNOZNIK = parseFloat( qs('.pakiet:checked').dataset.mnoznik)
    const USLUGI = qsa('.uslugi:checked')
    let nazwyUslug = []
    let kosztUslug = 0
    USLUGI.forEach(el => {
        nazwyUslug.push(el.value)
        kosztUslug += parseInt(el.dataset.cena)
    })
    cl(`${PAKIET} ${PAKIET_MNOZNIK} ${nazwyUslug} ${kosztUslug}`)

    let zgodaNaMarketing = ''
    if( qs('#marketing:checked') ) {
        zgodaNaMarketing = 'Wyraziłeś zgodę na otrzymywanie informacji marketingowych'
    }

    const CALKOWITY_KOSZT = (KRAJ_CENA * POBYT) * PAKIET_MNOZNIK + kosztUslug

    let komunikat = `
            Twoje dane: ${IMIE} ${NAZWISKO}<br>
            Adres do kontatku: ${EMAIL}<br>
            Kraj dolecowy: ${KRAJ}<br>
            Długość pobytu: ${POBYT * 5}<br>
            Pakiet: ${PAKIET}<br>
            Wybrane dodatkowe usługi: ${nazwyUslug.join(', ')}<br>
            ${zgodaNaMarketing}<br>
            Całkowity koszt: ${CALKOWITY_KOSZT.toFixed(2)} zł<br>
            <b>Żeby wrócić do formularza, odśwież stronę`
    WYCZIECZKA.innerHTML = komunikat
}