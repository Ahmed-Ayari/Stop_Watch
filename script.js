// html elements
var milliseconds = document.getElementById("milliseconds");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");

// buttons
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");

// variables
var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;
var interval;

// Start button
btnStart.addEventListener("click", function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
// Stop button
btnStop.addEventListener("click", function() {
    clearInterval(interval);
});

// Reset button
btnReset.addEventListener("click", resetTimer);


function resetTimer() {
    clearInterval(interval);
    ms = 0;
    sec = 0;
    min = 0;
    hr = 0;
    milliseconds.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
}


function startTimer() {
    ms++;

    milliseconds.innerHTML = ms < 10 ? "0" + ms : ms;
    if (ms > 99) {
        ms = 0;
        sec++;
        seconds.innerHTML = sec < 10 ? "0" + sec : sec;
    }
    if (sec > 59) {
        sec = 0;
        min++;
        minutes.innerHTML = min < 10 ? "0" + min : min;
    }
    if (min > 59) {
        min = 0;
        hr++;
        hours.innerHTML = hr < 10 ? "0" + hr : hr;
    }
}

