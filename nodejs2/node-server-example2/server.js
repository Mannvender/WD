const express = require('express')
const server = express();

const m1 = function (req, res, next) {
    console.log("middleware 1")
    next()
}


const m2 = function (req, res, next) {
    console.log("middleware 2")
    next();
}
const m3 = function (req, res, next) {
    console.log("middleware 3")
    next();
}


server.use(m1);
server.use('/a', m2);
server.get('/', function (req, res, next) {
    res.send("hello world")
    console.log("get code run")
})
server.use(m3);

server.listen(2323);