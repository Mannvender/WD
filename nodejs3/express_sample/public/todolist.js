$(function () {
        let newtodoBox = $('#input')
        let addtodoBtn = $('#btn')
        let todolist = $('#ul')

        addtodoBtn.click(function () {
            let newtodo = newtodoBox.val()
            // console.log(newtodo)

            $.post(
                '/todos/',
                //body of post request
                {task: newtodo},
                //callback function of post function in jquery
                //below function will be called as soon as reply from server is received
                //data is the data or res sent by server,,, in this case it will send a array of objects containing tasks
                function (data) {
                    todolist.empty()
                    for (todo of data) {
                        console.log(todo.task)
                        todolist.append("<li>" + todo.task + "</li>")
                    }
                }
            )
        })

    }
)