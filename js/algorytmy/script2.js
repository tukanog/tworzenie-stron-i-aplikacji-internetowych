function powMax(x) {
    let arr = []
    while(x < 1000) {
        x = x ** 2
        arr.push(x)
        if (x === 64 || x === 0) {
            break
        }
    }
    return arr
}
x = 2
console.log(powMax(2))
console.log(powMax(3))
console.log(powMax(4))
