while(true) {
    let haslo = prompt('Podaj haslo: ')
    if (haslo === 'masło') {
        if (confirm('Czy na pewno jesteś gotowy poznać tajemnicę?')) {
            // confirm - potwierdzenie
            alert('Odpowiedź na wszystko to: 42')
            // alert - komunikat
        }
        break
    }
}