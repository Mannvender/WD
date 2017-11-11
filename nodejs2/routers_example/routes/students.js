const route = require('express').Router()

let students = [
    {name: "rahul", collage: "dtu", year: "I"},
    {name: "bob", collage: "mait", year: "III"},
    {name: "martin", collage: "nsit", year: "IV"},
    {name: "hulk", collage: "dtu", year: "II"},
]
route.get('/', (req, res) => res.send(students))
// /add is wildcard it matches anything
route.get('/add', (req, res) => {
    students.push({
        name2: req.query.name,
        collage: req.query.collage,
        year: req.query.year
    })
    //if you don't send response it will add item but effect won't be visible
    res.send(students)
})
route.get('/:id', (req, res) => res.send(students[req.params.id]))
route.post('/', (req, res) => {
    students.push({
        name: req.body.name,
        collage: req.body.collage,
        year: req.body.year
    })
    res.send(students)
})

module.exports = route