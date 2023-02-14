const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

let totalSeconds = 1500;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    totalSeconds--;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (totalSeconds === 0) {
      clearInterval(intervalId);
      alert("Time is up!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  totalSeconds = 1500;
  minutesDisplay.innerHTML = 25;
  secondsDisplay.innerHTML = "00";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);