const express = require('express')
const srv = express();

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))


const todosRoute = require('./routes/todos')
const Route404 = require('./routes/else')

srv.use('/todos', todosRoute)
srv.use('/', Route404)

srv.listen(2233)