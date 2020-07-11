var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var hourTime = document.getElementById("hour");
var minTime = document.getElementById("min");
var secTime = document.getElementById("sec");
var milisecTime = document.getElementById("milisec");
var increase;

function stopWatch() {
    milisec++
    milisecTime.innerHTML = milisec;
    if (milisec >= 60){
        sec++
        secTime.innerHTML = sec;
        milisec = 0;
    }else if (sec >= 60){
        min++
        minTime.innerHTML = min;
        sec = 0;
    }else if (min >= 60){
        hour++
        hourTime.innerHTML = hour;
        min = 0;
    }
}

document.getElementById("run").onclick = function start() {
    this.disabled = true
    increase = setInterval(stopWatch,10)
}

function stop(){
    clearInterval(increase)
    
}


function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    hourTime.innerHTML = hour
    minTime.innerHTML = min
    secTime.innerHTML = sec
    milisecTime.innerHTML = milisec
    clearTimeout(increase)
}