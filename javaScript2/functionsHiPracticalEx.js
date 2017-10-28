function createCounter(initVal, delta) {
    let val = initVal;

    function counter() {
        val = val + delta;
        return val;
    }

    return counter;
}

let fiveTable = createCounter(0, 5);
console.log(fiveTable())
console.log(fiveTable())
console.log(fiveTable())

let tenTable = createCounter(0, 10);
console.log(tenTable())
console.log(tenTable())
let val = -1;
console.log(tenTable())

//closure scope
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
/*
a() {
 b()
 return b;
}

let c = a();
this c is nothing but b()
as b can access items of a()
so scope of items of a will be preserved
as c might try to access them
 */