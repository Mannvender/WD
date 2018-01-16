const express = require('express')

const app = express()

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))

app.listen('3456', () => console.log("server on http://localhost:3456"))