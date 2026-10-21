function qs(s) { return document.querySelector(s) }
function ce(s) { return document.createElement(s) }

const CHAT = qs('#chat')
const TEXT = qs('#text')
const BUTTON_RANDOM = qs('#random')

TEXT.onsubmit = function(e) {
    e.preventDefault()
    const INPUT_TEXT = qs('#inputtext').value
    const DIV = ce('div')
    const IMG = ce('img')
    const P = ce('p')

    DIV.classList.add('msgjolanta')
    IMG.src = 'pliki2/Jolka.jpg'
    P.innerHTML = INPUT_TEXT

    CHAT.appendChild(DIV)
    DIV.appendChild(IMG)
    DIV.appendChild(P)

    DIV.scrollIntoView({ behavior: 'smooth', block: 'end'})

    e.target.reset()
}

BUTTON_RANDOM.onclick = function(e) {
    const arr = [
        "Świetnie!",
        "Kto gra główną rolę?",
        "Lubisz filmy Tego reżysera?",
        "Będę 10 minut wcześniej",
        "Może kupimy sobie popcorn?",
        "Ja wolę Colę",
        "Zaproszę jeszcze Grześka",
        "Tydzień temu też byłem w kinie na Diunie",
        "Ja funduję bilety"
    ]
    const num = Math.floor( Math.random() * arr.length )

    const DIV = ce('div')
    const IMG = ce('img')
    const P = ce('p')

    DIV.classList.add('msgkrzysiek')
    IMG.src = 'pliki2/Krzysiek.jpg'
    P.innerHTML = arr[num]

    CHAT.appendChild(DIV)
    DIV.appendChild(IMG)
    DIV.appendChild(P)

    DIV.scrollIntoView({ behavior: 'smooth', block: 'end'})
}

// const arr = ['a', 'b', 'c', 'd']
// const num = Math.floor( Math.random() * arr.length )

// const P = document.createElement('p')
// P.innerHTML = arr[num]
// document.body.appendChild(P)