const a = 10;

function myFun() {
    const a = 20;
    console.log("line4 " + a)
    if (true) {
        const a = 30;
        console.log("line8 " + a);
    }
    console.log("line10 " + a)
}

myFun();
console.log("line14 " + a);
