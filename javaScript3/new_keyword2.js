console.log(this)

function fun() {
    console.log(global == this)
}

//global equivalent to window in browser

fun();
new fun();
console.log("*************************************")

function fun2() {
    this.p = "something";
    return 10;
}

let o1 = fun2();
//new creates a box instead of using global
// then calling new will return this box
let o2 = new fun2();
console.log(o1)
console.log(o2)
console.log(o1.p)
console.log(o2.p)