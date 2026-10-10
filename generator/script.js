const BTN = document.querySelector('button')
const SPAN = document.querySelector('span')

BTN.addEventListener('click', function() {
    const AKAPIT = document.querySelector('p')

    if(AKAPIT) {
        let num = Math.floor( Math.random() * 10 )
        AKAPIT.innerHTML += num
    } else {
        const P = document.createElement('p')
        P.style.backgroundColor = '#ccc'
        P.style.fontSize = '1.2em'
        P.style.padding = '0.25em'
        P.style.fontFamily = 'Courier New'
        P.title = 'Tu pojawi się liczba'
        document.querySelector('div').appendChild(P)
        let num = Math.floor( Math.random() * 10 )
        P.innerHTML += num
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


