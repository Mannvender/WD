//https://nodejs.org/api/index.html
//we are using fileSystem api

const fs = require('fs')

// __dirname
fs.writeFile('myfile.txt', "some data", function (err) {
    if (err) throw err

    //acts as else block
    console.log("file was written")
})


fs.writeFile('input.txt', "cat\nrat\nhuman\nduck\ncat\ndog\ncat", function (err) {
    if (err) throw err

    //acts as else block
    console.log("input file was written")
})