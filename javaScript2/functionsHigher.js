// if a function can take as argument a function or
// return a function then it is higher order function

function greetor() {
    console.log("hello frands")
}

greetor();
let nakliHello = greetor;
nakliHello();

let a = greetor();
console.log(a)
//remember don't write a = b():

//***********************************************
function add(x, y) {
    return x + y;
}

console.log(add(3, 5))

// let sum = add(3, 5);
let sum = add;
console.log(sum)
//*****************************************************
//function as an argument
function getFirstName(fullname) {
    return fullname.split(" ")[0];
}

function hello(findName, fullName) {
    let firstName = findName(fullName);
    console.log("hello " + firstName)
}

hello(getFirstName, "Mannvender Singh");

//*****************************************************
//function as a return type
function createGreetor(name) {
    let firstName = name.split(" ")[0];

    function greetor() {
        console.log("Hello " + firstName)
    }

    return greetor()
}

johnGreetor = createGreetor("John Doe")
HarryGreetor = createGreetor("Harry Potter")
//above two are two functions returned by createGreetor

//***********************************************************

/*let a =10;
a(); will give error */
let b = function () {
    console.log("yo")
};
b();
let c = b;
c();
//***********************************************************
