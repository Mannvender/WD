let p = {
    a: 10
}

let q = Object.create(p);
q.b = 20;
let r = Object.create(q);
r.c = 30;

console.log(p)
console.log(q)
console.log(r)

console.log(r.__proto__ === q)
console.log(r.a)
console.log(r.b)
console.log(r.c)
console.log("***********************")

//copy on write COW
q.a++; //q.a = q.a + 1 and RHS is evaluated first
//LHS added new a to q
//since r don't have any a it will theck in it's proto and q.a will be returned
console.log(p.a)
console.log(q.a)
console.log(r.a)

