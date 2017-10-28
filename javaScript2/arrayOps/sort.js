//arrays are mutable so arr.sort will change it inplace
let arr = [1, 14, 4, 5, 2, 564, 23, 8, 2];

console.log(arr.sort())
console.log(arr)

// js by default does a lexicographical sort

function compare1(a, b) {
    return a - b;
}

let sorted = arr.sort(compare1);
console.log(sorted)

function compare2(a, b) {
    return b - a;
} 

let sorted2 = arr.sort(compare2);
console.log(sorted)

//*****************************************
let sorted3 = arr.sort(function (a, b) {
    console.log(arr)
    console.log(a + " " + b)
    return a - b;
});

//it sort by insertion sort at min
//to sort by unit's digit
function compareUnit(a, b) {
    return (a % 10) - (b % 10);
}

console.log(arr.sort(compareUnit))