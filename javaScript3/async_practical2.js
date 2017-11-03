function downloader(url, downloadMessage) {
    //we are downloading file here and it takes 3 sec
    console.log("downloading file : " + url)
    setTimeout(function () {
        let filePath = "C:\\Windows\\" + url.split('/').pop();
        console.log("file downloaded at: " + filePath)
        downloadMessage(filePath);
    }, 3000)
}

function downloadMessage(path) {
    console.log("file download complete at " + path)
    resizeFile(path, function (aFilePath) {
        console.log("thanks for waiting file resized at : " + aFilePath.split(".")[0])
        uploadFile(aFilePath, function (URL) {
            console.log("upload confirm at :" + URL)
        })
    })
}


//fileResize function
function resizeFile(filePath, DoneMessage) {
    console.log("resizeing file dun dun dun at: " + filePath)
    setTimeout(function () {
        let newPath = "C:\\M\\dark\\resized\\dark.txt";
        DoneMessage(newPath);
    }, 2000)

}

function uploadFile(filepath, uploadCallback) {
    console.log("uploading file : " + filepath)
    setTimeout(function () {
        let up = "https://fileHippo/bigGuns.txt";
        console.log("uploaded at " + up)
        uploadCallback(up)
    }, 4000)
}

downloader("https://fileHippo//bomb.txt", downloadMessage)