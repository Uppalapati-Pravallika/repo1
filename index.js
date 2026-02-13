let count = 0;
const display = document.getElementById("count");

function update() {
  display.innerText = count;
}

function increase() {
  count++;
  update();
}

function decrease() {
  count--;
  update();
}

function reset() {
  count = 0;
  update();
}
