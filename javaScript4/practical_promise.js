function download(url) {
    console.log("downloading file from:" + url)
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("Url does not start with http"))
        } else {
            setTimeout(function () {
                //fake the download
                let fileName = url.split("/").pop();
                resolve(fileName);
            }, 4000)
        }
    })
}

function resize(fileName) {
    return new Promise(function (resolve, reject) {
        console.log("resizing file: " + fileName)
        if (!fileName.endsWith(".png")) {
            reject(new Error("file not a PNG"))
        } else {
            setTimeout(function () {
                //fake the resize
                let resizedFile = fileName.split(".")[0] + "-resized.png";
                resolve(resizedFile);
            }, 3000)
        }
    })
}

function upload(fileName) {
    return new Promise(function (resolve, reject) {
        console.log("uploading file: " + fileName)
        setTimeout(function () {
            //fake the upload
            let uploadURL = "https://imgur.com/" + fileName;
            resolve(uploadURL);
        }, 3000)

    })
}

/*
download("https://cb.lk/logo.png")
    .then(function (fileName) {
        console.log(fileName + " downloaded")
        resize(fileName).then(function (resizedFile) {
            console.log("resized file is at:" + resizedFile)
        })
    })*/


//better syntax
// download("htps://cb.lk/logo.png")
// //resolve of DownloadPromise returns fileName which is by default taken up by resizePromise in below line
//     .then(resize).then(function (resizedFile) {
//     console.log("file resized at:" + resizedFile)
// }).catch(function (err) {
//     console.error(err)
// })

//.catch function can catch all errors from above then functions
//one catch block is enough when put after promise



download("https://cb.lk/logo.png")
    //.then(resize)
    .then(upload).then(function (url) {
    console.log("uploaded to:" + url)
})