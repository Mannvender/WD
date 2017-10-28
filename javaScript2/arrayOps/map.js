let arr = [12, 345, 43, 3, 12, 8, 34];

let arr2 = arr.map(function (item) {
    return 100 - item;
})

console.log(arr)
console.log(arr2)
console.log(arr)

let arr3 = arr.map(function (item) {
    return item * item;
})
console.log(arr3)

console.log(typeof Math)
console.log(typeof Math.sqrt)
console.log(typeof Math.sqrt())