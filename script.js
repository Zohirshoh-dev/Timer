let startTime;
let elapsedTime = 0;
let isRunning = false;
let intervalid;

const timerDisplay = document.getElementById(`timer_display`);
const startButton = document.getElementById(`start_button`);
const pauseButton = document.getElementById(`pause_button`);
const resetButton = document.getElementById(`reset_button`);

const updateDisplay = () => {
    const time = Date.now() - startTime;
    const minutes = Math.floor((time / 60000) % 60).toString().padStart(2, '0');
    const seconds  = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
    const milliseconds  = Math.floor((time % 1000) / 60).toString().padStart(2, '0');

    timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

const startTimer = () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        intervalid = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

const pauseTimer = () => {
    if (isRunning) {
        clearInterval(intervalid);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

const resetTimer = () => {
    clearInterval(intervalid);
    startTime = null;
    elapsedTime = 0;
    isRunning = false;
    timerDisplay.textContent = "00:00:00";
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);