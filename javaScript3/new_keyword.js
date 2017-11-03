function Fruit(color, taste) {
    this.color = color;
    this.taste = taste;
}

let orange = new Fruit("orange", "sour");
let apple = new Fruit("red", "sweet");

let mango = {
    color: "yello",
    taste: "sweet"
}

console.log(orange)
console.log(apple)
//slight difference
console.log(mango)
