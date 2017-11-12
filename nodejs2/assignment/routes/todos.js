const route = require('express').Router();

let todos = [
    {task: "fileWrite", done: false},
    {task: "fileRead", dons: true},
    {task: "Download", dons: false},
    {task: "Upload", dons: true}
]

route.get('/:id', (req, res) => {
    if (req.params.id >= todos.length) {
        res.send("your number should be small")
    }
    res.send(todos[req.params.id])
})

route.get('/', (req, res) => {
    res.send(todos)
})

route.post('/', (req, res) => {
    todos.push({
        task: req.body.task,
        done: req.body.done == "true"
    })
    res.send(todos)
})

route.patch('/:id', (req, res) => {
    if (req.params.id >= todos.length) {
        res.send("your number should be small")
    } else {
        todos[req.params.id].task = req.body.task;
        todos[req.params.id].done = req.body.done == "true";

        res.send(todos)
    }

})

//it leaves null after deletion
/*route.delete('/:id', (req, res) => {
    delete todos[req.params.id]
    res.send(todos)
})*/

route.delete('/:id', (req, res) => {
    todos.pop(todos[req.params.id])
    res.send(todos)
})

module.exports = route