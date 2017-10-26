let obj = {
    a: 10,
    b: "hello",
    c: true,
    d: {
        de: 23,
        df: "value",
        dg: {
            dga: 89
        }
    }


}
console.log(obj.a)
console.log(obj.c)
console.log(obj.d.df)
console.log(obj.d.dg.dga)
obj.e = 66;
console.log(obj)
delete obj.b;
console.log(obj)