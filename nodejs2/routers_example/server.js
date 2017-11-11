const express = require('express');
const srv = express();

//for server to know and decode the (post request) body is in json form or urlencoded
srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

const teachersRoute = require('./routes/teachers')
const studentsRoute = require('./routes/students')

srv.use('/students', studentsRoute)
srv.use('/teachers', teachersRoute)

srv.listen(2223)