const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const app = express();
const server = http.createServer(app)
// io is our socketio agent working on http server
const io = socketio(server)

let usersockets = {}


app.use('/', express.static(path.join('frontEnd')))

// to listen when a connection is made
io.on('connection', (socket) => {
    console.log("New socket formed from " + socket.id)
    // sending acknowledgment
    socket.emit('connected')
    socket.on('send_msg', (data) => {
        //io.emit sends the data to all pipelines running
        //io.emit('recv_msg', data)
        //if e emit socket.broadcast.emit then only other pipelines will receive it
        //socket.broadcast.emit('recv_msg', data)

        if (data.message.startsWith('@')) {
            // data.message = "@a: hello
            let recipient = data.message.split(':')[0].substr(1)
            let rcptSocket = usersockets[recipient]
            data.message = "(DM)" + data.message.split(':')[1]
            io.to(rcptSocket).emit('recv_msg', data)
        } else {
            io.emit('recv_msg', data)
        }
    })

    socket.on('login', (data => {
        //username is in data.user
        usersockets[data.user] = socket.id
        console.log(usersockets)
    }))
})

server.listen(2345, () => console.log("website open on http://localhost:2345"))
