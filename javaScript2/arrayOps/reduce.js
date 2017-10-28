let arr = [1, 2, 3, 4, 5, 6, 7]

let arr2 = arr.reduce(function (acc, item) {
    return acc + item;
})
console.log(arr2)

let arr3 = arr.reduce(function (acc, item) {
    return acc.toString() + item;
})
console.log(arr3)