//functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//operator function
function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
    //do nothing
  }
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll(".operators");

let x;
let y;
let operator;
let reset = false;
let answer;

//displaying numbers
numbers.forEach(button => {
  button.addEventListener("click", e => {
    if (display.textContent == "0" || reset == true) {
      display.textContent = button.textContent;
      reset = false;
    } else if (isNaN(button.textContent) == false) {
      display.textContent += button.textContent;
    } else {
      display.textContent = button.textContent;
    }
  });
});

//clear
clearButton.addEventListener("click", e => {
  display.textContent = "0";
  x = null;
  y = null;
});

//storing operators
operators.forEach(button => {
  button.addEventListener("click", e => {
    x = parseFloat(display.textContent);
    operator = button.id;
    display.textContent = button.textContent;
    reset = true;
  });
});

//operating
equalButton.addEventListener("click", e => {
  y = parseFloat(display.textContent);
  if (x == null || reset == true) {
    return (display.textContent = button.textContent);
  } else if (x == 0 && operator == "divide") {
    reset = true;
    return (display.textContent = "Try again!");
  }
  answer = operate(operator, x, y);
  display.textContent = answer;
  reset = true;
  x = null;
  y = null;
});
