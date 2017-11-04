function downloadPromise() {
    return new Promise(function (resolve, reject) {
        console.log("staring download")
        setTimeout(function () {
            console.log("download complete")
            resolve();
        }, 3000)
    })
}


//for normal promise
/*
downloadPromise().then(function () {
    console.log("after download")
})*/

//let's see some advantages of promise over asyncFunction
let DownloadedFile = downloadPromise();
setTimeout(function () {
    DownloadedFile.then(function () {
        console.log("after download")
    })
}, 4000)

//promise was waiting for 3 sec
//but this then function can only run after resolve state of promise

//so above code runs in this manner - first promise waits for 3sec
//just after that then keeps waiting , after 3 sec promise reach resolved state and after 4th sec then function runs
