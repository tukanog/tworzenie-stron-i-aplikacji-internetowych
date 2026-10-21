function qs(s) { return document.querySelector(s) }

const PIEC = qs('#piec')
const LADA = qs('#lada')
const KASA = qs('#kasa')

PIEC.onsubmit = function(e) {
    e.preventDefault()
    
    const RODZAJ = qs('#rodzaj').value
    const CENA = qs('#cena').value
    const INFORMACJE = qs('#informacje').value

    dodajProdukt(RODZAJ, CENA, INFORMACJE)

    e.target.reset()
}

function dodajProdukt(rodzaj, cena, informacje) {
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let pCena = document.createElement('p')
    let pInfo = document.createElement('p')

    div.style.backgroundColor = 'gray'
    div.style.padding = '0.8em'
    div.style.cursor = 'pointer'

    div.onclick = function() {
        let cena = parseFloat(this.querySelector('.cena').textContent)
        let suma = parseFloat(KASA.textContent)
        KASA.textContent = suma + cena
        LADA.removeChild(this)
    }

    h3.textContent = rodzaj

    pCena.textContent = cena
    pCena.classList.add('cena')

    pInfo.textContent = informacje

    div.appendChild(h3)
    div.appendChild(pCena)
    div.appendChild(pInfo)

    LADA.appendChild(div)
}

