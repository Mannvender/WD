const fs = require('fs')
fs.readFile('./myfile.txt', function (err, data) {
    if (err) throw err

    console.log(data)
    console.log(data.toString())
})