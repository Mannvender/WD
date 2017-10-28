1 == "1"; // true
1 === "1"; //false

console.log((1 + "1") == 11) //true
console.log("11" - 1 == 1)//false (NaN not a number) "11" - 1, 11 typecast to number 11, so 10
console.log([] == "") //true
console.log([] == 0)//true
console.log(0 == "")//true
// "" can be typecast to 0, [] can also be typecast to ""

//unary + operator
console.log("1")
console.log(+"1")
//on running one by one first one will return "1" and second will try to typecast to number 1
let o = {};
console.log(o.toString())

// "" + {} [object Object]

//{} in LHS is block and in RHS is object

// [] + {} - gives [object Object]  (on running line by line)
// {} + [] - gives 0  (because here {} is considered block and in above case it was object

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
