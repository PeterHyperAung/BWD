let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operators = ["+", "-", "*", "/", "%", "."];

let filter = (x) => {
  let current = displayBox.innerText;
  let lastChar = current[current.length - 1];
  if (current === "0" && x != ".") clearLast();
  if (operators.includes(x) && operators.includes(lastChar)) return false;
  return true;
};

let showInDisplay = (x) => {
  if (displayBox.innerText.length >= 10) displayBox.style.fontSize = "35px";
  if (displayBox.innerText.length === 15) displayBox.innerHTML += "<br />";
  if (filter(x)) displayBox.innerHTML += x;
};

let calc = (_) => {
  let current = displayBox.innerText;
  let lastChar = current[current.length - 1];
  if (!operators.includes(lastChar))
    displayBox.innerText = eval(displayBox.innerText);
};

let clearAll = (_) => (displayBox.innerText = "");

let clearLast = (_) =>
  (displayBox.innerText = displayBox.innerText.substring(
    0,
    displayBox.innerText.length - 1
  ));
