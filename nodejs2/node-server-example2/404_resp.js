const express = require('express')
const server = express();
//since we are not using next() function here -- ew can use arrows
server.get('/a', (req, res) => {
    res.send("AAA")
})
server.get('/b', (req, res) => {
    res.send("BBB")
})

//would have failed if server.get was used, in line below
server.use((req, res) => res.send("<h2> 404 not found </h2>"))

server.listen(2121);