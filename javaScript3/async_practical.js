function downloader(url, downloadMessage) {
    //we are downloading file here and it takes 3 sec
    console.log("downloading file : " + url)
    setTimeout(function () {
        let filePath = "C:\\Windows\\xyz.txt";
        console.log("file downloaded at: " + filePath)
        downloadMessage(filePath);
    }, 3000)
}

function downloadMessage(path) {
    console.log("file download complete at " + path)
}

// downloader("https://fileHippo//bomb.exe", downloadMessage)

//****************************************
//fileResize function
function resizeFile(filePath, DoneMessage) {
    console.log("resizeing file dun dun dun at: " + filePath)
    setTimeout(function () {
        let newPath = "C:\\M\\dark\\resized\\dark.doc";
        console.log("new file : " + newPath.split(".")[0] + "-resized." + newPath.split(".")[1])
        DoneMessage(newPath);
    }, 2000)

}

resizeFile("C:\\F\\downloads\\dark.doc", function (path) {
    console.log("thanks for waiting file resized at : " + path.split(".")[0])
})