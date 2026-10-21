const TEXT = document.querySelector('#text')
const RANGE = document.querySelector('#range')
const INPUT = document.querySelector('#input')
const BIU = document.querySelectorAll('.biu')

RANGE.oninput = function() {
    TEXT.style.fontSize = this.value + 'px'
}

INPUT.oninput = function() {
    if (this.value === '') {
        TEXT.textContent = 'Lorem ipsum dolor sit amet.'
    } else {
        TEXT.textContent = this.value
    }
}

console.dir(INPUT)
console.dir(BIU)

BIU.forEach((el) => {
    el.onchange = function() {
        stylujText()
    }
} )

function stylujText() {
    BIU.forEach((el) => {
        if(el.checked) {
            console.log(el.value)
        }
    })
}