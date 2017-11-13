const express = require('express')
const srv = express();

const todoRoute = require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))


srv.get('/', function (req, res, next) {
    res.send("hello")
})
srv.use('/public', express.static('./public'))
srv.use('/todos', todoRoute)

srv.listen(4567);