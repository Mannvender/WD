const route = require('express').Router()

let todos = [
    {task: "this is task 1"},
    {task: "task 2 here"}
]

route.get('/', function (req, res) {
    res.render('todos', {todos})
})

route.post('/', function (req, res) {

})

module.exports = route