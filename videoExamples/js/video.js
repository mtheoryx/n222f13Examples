// //will all be moved to external script. Soon.
var vid;

function init() {
    vid = document.getElementsByTagName("video")[0];
}

function play() {
    //seek to 2 seconds
    vid.currentTime = 2;
    vid.play();
}

function pause() {
    vid.pause();
}
window.onload = init;