var displaymili = document.getElementById('displaymiliSec')
var displaymin = document.getElementById('displayMin')
var displaysec = document.getElementById('displaySec')

var millisec = 1;
var sec = prompt("sec from 1-60");
var min = prompt("min from 1-3");

function timer() {
    millisec--
    displaymili.innerHTML = ":"
    if (millisec == 0) {
        sec--
        displaysec.innerHTML = sec
        millisec = 100
        displaymin.innerHTML = min
        if (sec == 0) {
            min--
            sec = 60
            if (min == -1) {
                min = 0
                sec = 0
                millisec = 0 
            }
        }
    }
}
var interval;

function start() {
    interval = setInterval(timer, 10);

}
function pause() {
    clearInterval(interval);
}
function reset() {
    clearInterval(interval);
    millisec = 1;
    sec = prompt("sec from 1-60");
    min = prompt("min from 1-3");
    displaymili.innerHTML = ":";
    displaysec.innerHTML = sec;
    displaymin.innerHTML = min;
}
function stop(){

}
