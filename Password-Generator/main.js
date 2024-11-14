"use strict";
console.log("GENERATORE DI PASSWORD");

const displayOutput = document.getElementById("display-password");
const lengthPassword = document.querySelector("#length-password");
const optSymbols = document.querySelector("#symbols");
const optUpper = document.querySelector("#upper-letters");
const optLower = document.querySelector("#lower-letters");
const optNumbers = document.querySelector("#numbers");

const btnCreate = document.querySelector("#create");

const symbols = "!@#$%&()_+[]{}|<>?";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

btnCreate.addEventListener("click", function () {
  let charset = "";
  if (optSymbols.checked) charset += symbols;
  if (optUpper.checked) charset += uppercaseLetters;
  if (optLower.checked) charset += lowercaseLetters;
  if (optNumbers.checked) charset += numbers;
  if (charset === "") charset = uppercaseLetters + lowercaseLetters;

  let password = "";

  for (let i = 0; i < lengthPassword.value; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  displayOutput.textContent = password;
});
