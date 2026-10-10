let arr = [5, 4, 1, 6, 7, 2, 3, 9, 0, 8]

function bubbleSort(arr) {
    let tmp = 0
    for(let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}
arr = bubbleSort(arr)
console.log(arr)