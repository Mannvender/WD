function f1() {
    function f2() {
        return 5; // never executed in this ex
    }

    return f2;
}

let x = f1();

//*************************
// to executed line 3 will have to call f2() it
let p = x();
console.log(p)