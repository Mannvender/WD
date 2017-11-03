let obj = {
    anumber: 123,

    aStr: "asaf",
    afunc: function () {
        console.log(this.anumber + " " + this.aStr)
    }
    // this return Undefined (will reflect in output)

}
console.log(obj.afunc())