function qs(s) { return document.querySelector(s) }

const TODO = qs('#todo');
const ZADANIA = qs('#zadania')
const DATA = qs('#data')

let aktualnaData = new Date()
DATA.textContent = aktualnaData.toLocaleString()

setInterval(function() {
    aktualnaData.setTime(Date.now())
    DATA.textContent = aktualnaData.toLocaleString()
}, 500)

document.body.onload = function() {
    let storage = localStorage.getItem('zadania')

    if(storage) {
        let zadania = storage.split(';')
        zadania.forEach((el) => {
            stworzZadanie(el)
        })
    }
}

TODO.onsubmit = function(e) {
    e.preventDefault()

    let zadanie = qs('#zadanie').value

    if(zadanie.trim() == '') {
        alert('Wpisz treść zadania')
    } else {
        stworzZadanie(zadanie)
        let storage = localStorage.getItem('zadania')
        if(storage) {
            localStorage.setItem('zadania', storage + `;${zadanie}`)
        } else {
            localStorage.setItem('zadania', zadanie)
        }
    }
    
    e.target.reset()
}

function stworzZadanie(tresc) {
    let li = document.createElement('li')
    li.style.color = kolorTekstu()
    li.textContent = tresc

    let button = document.createElement('button')
    button.textContent = 'Usuń'
    button.onclick = function() {
        ZADANIA.removeChild(li)
        let zadania = localStorage.getItem('zadania')
        let poUsunieciu = zadania.split(';').filter((el) => el != tresc).join(';')
        localStorage.setItem('zadania',poUsunieciu)
    }

    li.appendChild(button)

    ZADANIA.appendChild(li)
}

function kolorTekstu() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}