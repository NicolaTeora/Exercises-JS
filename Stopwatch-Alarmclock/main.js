"use strict";
console.log("stopwatch/alarm clock".toUpperCase());

const btnPause = document.getElementById("pause");
const btnStart = document.getElementById("start");
const btnReset = document.getElementById("reset");

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

let sec = Number(seconds.textContent);
let min = Number(minutes.textContent);
let hou = Number(hours.textContent);

let startCount = false;
let timerId = null;

btnStart.addEventListener("click", function () {
  if (!timerId) {
    timerId = setInterval(function () {
      sec++;
      seconds.textContent = sec < 10 ? "0" + sec : sec;
      if (seconds.textContent > "59") {
        seconds.textContent = "00";
        sec = 0;
        min++;
        minutes.textContent = min < 10 ? "0" + min : min;
      }
    }, 1000);
  }
});

btnPause.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
});

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
