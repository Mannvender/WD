const express = require('express')
const srv = express();

const todoRoute = require('./routes/todos')

srv.use(express.json)
srv.use(express.urlencoded({extended: true}))

srv.set('views', './views')
srv.set('view engine', 'hbs')

srv.use('/todos', todoRoute)


srv.listen(2345);