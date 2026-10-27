const BTN = document.querySelector('button')
const SPAN = document.querySelector('span')

BTN.addEventListener('click', function() { // można też oczywiście onclick = function()...
    const AKAPIT = document.querySelector('p')

    function dodajLiczbe(element) {
        let num = Math.floor( Math.random() * 10 )
        element.innerHTML += num
    }

    if(AKAPIT) {
        dodajLiczbe(AKAPIT)
    } else {
        const P = document.createElement('p')
        P.style.backgroundColor = '#ccc'
        P.style.fontSize = '1.2em'
        P.style.padding = '0.25em'
        P.style.fontFamily = 'Courier New'
        P.title = 'Tu pojawi się liczba'
        document.querySelector('div').appendChild(P)
        dodajLiczbe(P)
    }
})

SPAN.onclick = function() {
    const PARENT = this.parentElement

    if(PARENT.id === 'c1') {
        document.querySelector('#c2').appendChild(this)
    } else {
        document.querySelector('#c1').appendChild(this)
    }
}


