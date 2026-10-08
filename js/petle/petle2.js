// pętla while

num = 10
while (num > 5) {
    num--
    console.log(num)
}

num = 10
while (num < 5) {
    num--
    console.log(num)
}

while(true) {
    let rand = Math.random()
    if (rand < 0.5) {
        console.log(rand)
        break
    }
}

num = 5
do {
    console.log(num)
    num += 2
} while(num > 10)