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
    let loginbox = $('#loginbox')
    let loginBtn = $('#loginBtn')
    let user = ""
    let loginDiv = $('#login-div')
    let chatDiv = $('#chat-div')

    sendBtn.click(function () {
        let msg = msgBox.val()
        // event name - send_msg
        socket.emit('send_msg', {
            message: msg,
            user: user
        })

    })

    loginBtn.click(function () {
        user = loginbox.val()
        chatDiv.show()
        loginDiv.hide()
        socket.emit('login', {
            user: user
        })
    })

    socket.on('recv_msg', function (data) {
        msglist.append($('<li>' + data.user + ': ' + data.message + '</li>'))
    })

})