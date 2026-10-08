function qsa(s) { return document.querySelectorAll(s) }
function qs(s) { return document.querySelector(s) }

const IMG = qs('img')

IMG.onclick = function () {
    if (IMG.src == 'o.png' || IMG.src == 'x.png') {
        return 0
    } else {
        var kolkoCzyKrzyzyk = 0 // kolko - 0, krzyzyk - 1
        if (kolkoCzyKrzyzyk == 0) {
            IMG.src = 'o.png'
        }
        else {
            IMG.src = 'x.png'
        }
    }
}