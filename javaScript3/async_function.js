//js only work in single thread
/*function done() {
    console.log("dun dun dun")
}

setTimeout(done, 1000)
console.log("arey bhai bhai bhai")*/
 //**********************

function task(done) {
    console.log("phle nagar palika ko bulao")
    setTimeout(done,1000)
}
task(function () {
    console.log("nagar pallika arrives")
})
console.log("till then i'll run dun dun dun")