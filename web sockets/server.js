const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const app = express();
const server = http.createServer(app)
// io is our socketio agent working on http server
const io = socketio(server)

app.use('/', express.static(path.join('frontEnd')))

// to listen when a connection is made
io.on('connection', (socket) => {
    console.log("New socket formed from " + socket.id)
    // sending acknowledgment
    socket.emit('connected')
    socket.on('send_msg', (data) => {
        //io.emit sends the data to all pipelines running
        io.emit('recv_msg', data)
    })
})

server.listen(2345, () => console.log("website open on http://localhost:2345"))
