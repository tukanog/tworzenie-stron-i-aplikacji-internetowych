function qs(s) { return document.querySelector(s) }

const AKAPIT = qs('p')
const FONT_FAMILY = qs('#fontFamily')
const FONT_SIZE = qs('#fontSize')
const FONT_SIZE_OUTPUT = qs('#fontSizeOutput')
const COLOR = qs('#color')
const BACKGROUND_COLOR = qs('#backgroundColor')
const FONT_WEIGHT = qs('#fontWeight')
const FONT_STYLE = qs('#fontStyle')
const TEXT_DECORATION = qs('#textDecoration')
const ALIGN = document.querySelectorAll('.align')
const TEXT_TRANSFORM = qs('#textTransform')
const TEXT = qs('#text')

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit voluptas porro eligendi id quas modi debitis asperiores at magni esse nesciunt, commodi autem excepturi eveniet perspiciatis numquam repudiandae odit.'


// this w większości zdarzeń odnosi się do elementu który wywołał zdarzenie
// wyjątkiem jest onsubmit, dlatego musimy używać w nim e i e.target
// uwaga: this nie zadziała poprawnie w funkcji strzałkowej

/* Wybór kroju czcionki */
FONT_FAMILY.onchange = function() {
    const FAMILY = this.value
    AKAPIT.style.fontFamily = FAMILY
}

/* Zmiana rozmiaru czcionki */
FONT_SIZE.oninput = function() {
    const SIZE = this.value + 'em'
    FONT_SIZE_OUTPUT.innerHTML = SIZE
    AKAPIT.style.fontSize = SIZE
}
/* onchange - zmiana dopiero po zatwierdzeniu - np. odkliknięciu pola
oninput - zmiana już w trakcie wyboru / wpisywania - np. przesuwanie suwaka */

/* Kolor */
COLOR.oninput = function() {
    const CLR = this.value
    AKAPIT.style.color = CLR
}

/* Kolor tła*/
BACKGROUND_COLOR.oninput = function() {
    const BACK_CLR = this.value
    AKAPIT.style.backgroundColor = BACK_CLR
}

/* Pogrubienie */
FONT_WEIGHT.onchange = function () {
    const STAN = this.checked
    if(STAN) { /* STAN może mieć wartość true albo false, nie trzeba porównywać (ale można) */
        AKAPIT.style.fontWeight = 'bold'
    } else {
        AKAPIT.style.fontWeight = 'normal'
    }
}

/* Kursywa */
FONT_STYLE.onchange = function () {
    const STYLE = this.checked
    if(STYLE) { 
        AKAPIT.style.fontStyle = 'italic'
    } else {
        AKAPIT.style.fontStyle = 'normal'
    }
}

/* Podkreślenie */
TEXT_DECORATION.onchange = function () {
    const DECORATION = this.checked
    if(DECORATION) { 
        AKAPIT.style.textDecoration = 'underline'
    } else {
        AKAPIT.style.textDecoration = 'none'
    }
    /* zapis skrócony if-else coś tam */
}

/* Zmiana tekstu */
TEXT.oninput = function() {
    const TEXT = this.value
    if(TEXT.trim() == '') {
        AKAPIT.innerHTML = DEFAULT_TEXT
    } else {
        AKAPIT.innerHTML = TEXT
    }
}

ALIGN.forEach( (el) => {
    el.onchange = function() {
        const STAN = el.checked
        const ALIGN = el.value

        if(STAN) {
            AKAPIT.style.textAlign = ALIGN
        }
    }
})

/* Transformacja tekstu */
TEXT_TRANSFORM.onclick = function() {
    const TRANSFORM = this.value

    AKAPIT.style.textTransform = TRANSFORM
    if (TRANSFORM === 'uppercase') {
        this.innerHTML = 'małe litery'
        this.value = 'lowercase'
    } else if (TRANSFORM === 'lowercase') {
        this.innerHTML = 'Kapitaliki'
        this.value = 'capitalize'
    } else if (TRANSFORM === 'capitalize') {
        this.innerHTML = 'normalny'
        this.value = 'none'
    } else {
        this.innerHTML = 'WIELKIE LITERY'
        this.value = 'uppercase'
    }
}