function Person(name, age) {
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
    this.age = age;
    this.isAdult = function () {
        return this.age > 18;
    }
}

let p = new Person("Dark Nigga", 34);
let h = new Person("Harry potter", 11);
console.log(p)
console.log("****************************")
console.log(h)
console.log("****************************")
console.log(p.isAdult())
console.log(h.isAdult())
console.log("*********************************")

//*****************************************************
function Person2(name, age) {
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
    //age is like private variable
    this.isAdult = function () {
        return age > 18;
    }
}

let d = new Person2("Dark Nigga", 34);
console.log(d)
console.log(d.isAdult())
console.log(d.age)
