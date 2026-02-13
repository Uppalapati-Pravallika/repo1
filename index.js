let count = 0;
const MIN_COUNT = 0;
const MAX_COUNT = 10;

const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Function to update the display
function updateDisplay() {
    counterDisplay.textContent = count;
}

// Event listener for increase button
increaseBtn.addEventListener("click", () => {
    // Check if the count is less than the maximum limit
    if (count < MAX_COUNT) {
        count++;
        updateDisplay();
    }
});

// Event listener for decrease button
decreaseBtn.addEventListener("click", () => {
    // Check if the count is greater than the minimum limit
    if (count > MIN_COUNT) {
        count--;
        updateDisplay();
    }
});

// Initialize display on load
updateDisplay();
