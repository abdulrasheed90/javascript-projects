let timer;
let seconds = 0;

function updateDisplay() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("display").textContent = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  seconds = 0;
  updateDisplay();
}

window.addEventListener("DOMContentLoaded", updateDisplay);
