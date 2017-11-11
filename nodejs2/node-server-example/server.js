const express = require('express')
const server = express()

server.get('/', function (req, res, next) {
    console.log("yo")
    res.send("hello world")
})

server.get('/greet/:tod', function (req, res, next) {
    let tod = req.params.tod
    switch (req.params.tod) {
        case 'm':
            tod = 'Morning';
            break
        case 'e':
            tod = 'Evening';
            break
    }
    // let greeting = "good , " + tod + " " + req.params.name
    let greeting2 = "good, " + tod + " " + req.query.name
    // res.send(greeting)
    res.send(greeting2)
})

server.get('/html', function (req, res, next) {
    res.send(`
<html>
<body>
    <h1>
    hello guys 
    </h1>
    <p>
    how are you amigos
    </p>
</body>
</html>
`)
})

server.listen(2121)