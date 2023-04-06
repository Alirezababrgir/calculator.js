// This program generates a calculator using JavaScript

// Define variables for calculator display and buttons
let display = document.getElementById("calculator-display");
let button0 = document.getElementById("button-0");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let button4 = document.getElementById("button-4");
let button5 = document.getElementById("button-5");
let button6 = document.getElementById("button-6");
let button7 = document.getElementById("button-7");
let button8 = document.getElementById("button-8");
let button9 = document.getElementById("button-9");
let buttonPlus = document.getElementById("button-plus");
let buttonMinus = document.getElementById("button-minus");
let buttonMultiply = document.getElementById("button-multiply");
let buttonDivide = document.getElementById("button-divide");
let buttonEquals = document.getElementById("button-equals");
let buttonClear = document.getElementById("button-clear");
display.style.backgroundColor="#888"
// Define functions for calculator operations
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Add event listeners to buttons for calculator operations
button0.addEventListener("click", function() {
  display.innerHTML += "0";
});

button1.addEventListener("click", function() {
  display.innerHTML += "1";
});

button2.addEventListener("click", function() {
  display.innerHTML += "2";
});

button3.addEventListener("click", function() {
  display.innerHTML += "3";
});

button4.addEventListener("click", function() {
  display.innerHTML += "4";
});

button5.addEventListener("click", function() {
  display.innerHTML += "5";
});

button6.addEventListener("click", function() {
  display.innerHTML += "6";
});

button7.addEventListener("click", function() {
  display.innerHTML += "7";
});

button8.addEventListener("click", function() {
  display.innerHTML += "8";
});

button9.addEventListener("click", function() {
  display.innerHTML += "9";
});

buttonPlus.addEventListener("click", function() {
  display.innerHTML += "+";
});

buttonMinus.addEventListener("click", function() {
  display.innerHTML += "-";
});

buttonMultiply.addEventListener("click", function() {
  display.innerHTML += "*";
});

buttonDivide.addEventListener("click", function() {
  display.innerHTML += "/";
});

buttonEquals.addEventListener("click", function() {
  let expression = display.innerHTML;
  let result = eval(expression);
  display.innerHTML = result;
});

buttonClear.addEventListener("click", function() {
  display.innerHTML = "";
});
