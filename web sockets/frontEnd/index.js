console.log("hello from frontend")

//or use io() if socket is on same server from where our web-page came from
// io() - creates a new socket pipeline to server mentioned and returns a socket object
let socket = io('ws://localhost:2345');

socket.on('connected', () => {
    console.log("connected " + socket.id)
})

$(function () {
    let msglist = $('#msgList')
    let sendBtn = $('#sendBtn')
    let msgBox = $('#msgInput')

    sendBtn.click(function () {
        let msg = msgBox.val()
        // event name - send_msg
        socket.emit('send_msg', {message: msg})
    })

    socket.on('recv_msg', function (data) {
        msglist.append($('<li>' + data.message + '</li>'))
    })

})