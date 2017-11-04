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

/*Promise.all([
    download("https://cb.lk/logo.png"),
    //if any one of the promise fails it'll fail the whole array
    download("htts://cb.lk/banner.png"),
    download("https://cb.lk/promo.png"),
]).then(function (values) {
    //it acts as resolve function for all array promises
    console.log(values)
}).catch(function (err) {
    console.error(err)
})*/


//how to download, resize and upload all
Promise.all([
    download("https://cb.lk/logo.png"),
    download("https://cb.lk/banner.png"),
    download("https://cb.lk/promo.png"),
]).then(function (DownloadValues) {
    return Promise.all(DownloadValues.map(resize))
}).then(function (resizedValues) {
    return Promise.all(resizedValues.map(upload))
}).then(function (uploadedValues) {
    console.log(uploadedValues)
}).catch(function (err) {
    console.error(err)
})

