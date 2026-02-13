let count = 0;
const countDisplay = document.getElementById("count");
const MIN_COUNT = 0;
const MAX_COUNT = 10;

function updateDisplay() {
    countDisplay.textContent = count;
    const newSize = 40 - (count * 2);
    countDisplay.style.fontSize = `${newSize}px`;

    if (count === MIN_COUNT || count === MAX_COUNT) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

function increaseCount() {
    if (count < MAX_COUNT) {
        count++;
        updateDisplay();
    }
}

function decreaseCount() {
    if (count > MIN_COUNT) {
        count--;
        updateDisplay();
    }
}

updateDisplay();
