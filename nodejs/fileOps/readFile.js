const fs = require('fs')
/*fs.readFile('./myfile.txt', function (err, data) {
    if (err) throw err

    console.log(data)
    console.log(data.toString())
})*/
let toPrint = "";
fs.readFile('./input.txt', function (err, data) {
    if (err) throw err


    // console.log(data)
    let input = data.toString();
    console.log(data.toString())
    let arr = input.split('\n')
    console.log(arr)
    // let toPrint = "";
    for (let a = 0; a < arr.length; a++) {
        let count = 0;
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] === arr[b]) {
                delete arr[b]
                count++;
            }
        }
        if (arr[a] != undefined) {
            toPrint = toPrint + arr[a] + ":" + (count + 1) + "\n"
        }

    }
    console.log(toPrint + "\n *****test******")

    fs.writeFile('output.txt', toPrint.toString(), function (err) {
        if (err) throw err

        //acts as else block
        console.log("output file was written")
    })

})

console.log("*********************")

