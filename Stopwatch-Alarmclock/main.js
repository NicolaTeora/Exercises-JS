"use strict";
console.log("stopwatch/alarm clock".toUpperCase());

const btnPause = document.getElementById("pause");
const btnStart = document.getElementById("start");
const btnReset = document.getElementById("reset");

const alarm = document.getElementById("alarm");
const btnSetAlarm = document.getElementById("value-alarm");
const btnResetAlarm = document.getElementById("reset-alarm");

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

let sec = Number(seconds.textContent);
let min = Number(minutes.textContent);
let hou = Number(hours.textContent);

let startCount = false;
let timerId = null;

let setTime;
let alarmTriggered = false;

// Setting time alarm
btnSetAlarm.addEventListener("click", function () {
  setTime = alarm.value;
  alarmTriggered = false;
});

// Start timer
btnStart.addEventListener("click", function () {
  if (!timerId) {
    timerId = setInterval(function () {
      sec++;
      seconds.textContent = sec < 10 ? "0" + sec : sec;
      if (seconds.textContent > "09") {
        seconds.textContent = "00";
        sec = 0;
        min++;
        minutes.textContent = min < 10 ? "0" + min : min;
      }

      //track set alarm
      if (setTime && !alarmTriggered) {
        const [hour, minute] = setTime.split(":");
        if (hours.textContent === hour && minutes.textContent === minute) {
          alert("SVEGLIA!");
          alarmTriggered = true;
        }
      }
    }, 1000);
  }
});

// Pause
btnPause.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
});

// Reset
btnReset.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  hou = 0;
  min = 0;
  sec = 0;
});

btnResetAlarm.addEventListener("click", function () {
  alarmTriggered = false;
  alarm.value = "";
});
