"use strict";
console.log("CALCOLATRICE");

const displayOutput = document.querySelector("#output");
const operatorSelect = document.querySelector("#operator");
const btnNum = document.querySelectorAll(".num");

const btnSum = document.querySelector("#sum");
const btnSub = document.querySelector("#sub");
const btnMul = document.querySelector("#mul");
const btnDivi = document.querySelector("#divi");

const btnClear = document.querySelector("#clear");
const btnResult = document.querySelector("#result");

// state variables
let displayValue, operator, num1, num2;

// clear variables and output
btnClear.addEventListener("click", function () {
  displayOutput.value = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  operatorSelect.innerHTML = "";
});

// number value input
for (let i = 0; i < btnNum.length; i++) {
  btnNum[i].addEventListener("click", function () {
    displayOutput.value += btnNum[i].value;
  });
}

[btnSum, btnSub, btnMul, btnDivi].forEach((button) => {
  button.addEventListener("click", function () {
    num1 = Number(displayOutput.value);
    displayOutput.value = "";
    operator = button.value;
    operatorSelect.innerHTML = operator;
  });
});

// result
btnResult.addEventListener("click", function () {
  num2 = Number(displayOutput.value);
  let result;

  switch (operator) {
    case "+":
      result = sumOperator(num1, num2);
      break;
    case "-":
      result = subOperator(num1, num2);
      break;
    case "*":
      result = mulOperator(num1, num2);
      break;
    case "/":
      result = diviOperator(num1, num2);
      break;
  }

  displayOutput.value = result;
});

// Functions selection Operator

// sum
function sumOperator(a, b) {
  return a + b;
}

// substraction
function subOperator(a, b) {
  return a - b;
}

// multiplication
function mulOperator(a, b) {
  return a * b;
}

// division
function diviOperator(a, b) {
  if (b === 0) return 0;
  return a / b;
}
