const route = require('express').Router();

route.use('/', (req, res) => res.send("out of domain"))

module.exports = route
