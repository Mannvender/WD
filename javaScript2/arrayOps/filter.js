let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr)

let arr2 = arr.filter(function (item) {
    return item % 3 == 0;
})
console.log(arr2)


//****************************************************
//example
let menu = [
    "Paneer Tikka",
    "Onion Rings",
    "Garlic Naan",
    "Chicken Tandoor",
    "Egg Curry"
]
console.log(menu)

function isVeg(food) {
    if (food.toLowerCase().indexOf("chicken") != -1) return false;
    if (food.toLowerCase().indexOf("egg") != -1) return false;
    return true;
}

let vegMenu = menu.filter(isVeg);
console.log(vegMenu)

function isJainFood(food) {
    if (food.toLowerCase().indexOf("garlic") != -1) return false;
    if (food.toLowerCase().indexOf("onion") != -1) return false;
    return true;
}

let JainMenu = menu.filter(isVeg).filter(isJainFood);
console.log(JainMenu)