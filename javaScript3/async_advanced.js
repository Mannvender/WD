let a = false;

setTimeout(function () {
    a = true;
}, 1000)

while (!a) {
    console.log(1)
}
// interpreter never exits while loop and function keeps waiting
