// Stopwatch
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        };

        if (second == 60) {
            minute++;
            second = 0;
        };

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        };

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        };

        if (minute < 10) {
            minString = "0" + minString;
        };

        if (second < 10) {
            secString = "0" + secString;
        };

        if (count < 10) {
            countString = "0" + countString;
        };

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10);
    };
};


// Timer
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");
let display = document.getElementById("display");
let start = document.getElementById("start_timer");
let inputs = document.querySelector(".inputs");

function displaymin() {
    if (minutes.value == 0 && seconds.value == 0) {
        start.disabled = true;
    }
    display.innerHTML =
        (minutes.value > 9 ? minutes.value : "0" + minutes.value) + ":" + (seconds.value > 9 ? seconds.value : "0" + seconds.value);
};

inputs.addEventListener('input', displaymin);

function watch() {
    if (minutes.value == 0 && seconds.value == 0) {
        alert("Enter a vaild number!");
    }

    else {
        start.disabled = true;
        mins.disabled = true;
        secs.disabled = true;

        var date1 = new Date();
        var countDownDate = new Date();

        countDownDate.setTime(
            date1.getTime() + minutes.value * 60 * 1000 + seconds.value * 1000 + 1 * 1000);

        // Update the count down every 1 second
        var x = setInterval(function () {
            var now = new Date().getTime();

            var distance = countDownDate - now;

            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            display.innerHTML = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);

            if (display.innerHTML == "00:00") {
                clearInterval(x);
                start.disabled = false;
                mins.disabled = false;
                secs.disabled = false;
            };
        }, 1000);
    };
};

start.addEventListener('click', watch);