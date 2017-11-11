const route = require('express').Router()

let teachers = [
    {name: "bichu", sub: "webb dev"},
    {name: "kalakar", sub: "game dev"}

]
route.get('/', (req, res) => res.send(teachers))
route.get('/add', (req, res) => {
    teachers.push({
        name2: req.query.name,
        subject: req.query.subject
    })
    //if you don't send response it will add item but effect won't be visible
    res.send(teachers)
})
route.get('/:id', (req, res) => res.send(teachers[req.params.id]))

module.exports = route