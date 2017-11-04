function someAsyncTask(callBack) {
    console.log("starting task")
    setTimeout(function () {
        console.log("task done")
        callBack();
    }, 3000)
}

/*someAsyncTask(function () {
    console.log("after task")
})*/

let someTaskPromise = function () {
    return new Promise(function (resolve, reject) {
        someAsyncTask(resolve);
    })
}
let savedPromise = someTaskPromise();
savedPromise.then(function () {
    console.log("after task")
})
