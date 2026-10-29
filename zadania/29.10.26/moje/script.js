function qs(s) { return document.querySelector(s) }


const BUTTON = qs('button')
const CART = qs('#cart')

BUTTON.onclick = function(e) {
    let file = qs('#file').value
    let numberOfCopies = parseInt(qs('#numberOfCopies').value)
    let typeOfPaper = qs('.typeOfPaper:checked').value
    console.log(file)
    let cena
    if (typeOfPaper == "matowy") {
        cena = numberOfCopies * 2
    } else cena = numberOfCopies * 1.5

    let img = document.createElement('img')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    img.src = file
    console.log(img.src)

    let temp = img.src
    img.src = temp.replace('file:///C:/fakepath', 'img')
    p1.textContent = 'Liczba kopii ' + numberOfCopies
    p2.textContent = 'Cena ' + cena
    
    CART.appendChild(img)
    CART.appendChild(p1)
    CART.appendChild(p2)
}