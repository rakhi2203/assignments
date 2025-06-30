var prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//check a num is positive, negative or zero

if(num>0){
    console.log("positive")
}
else if(num<0){
    console.log("negative")
}
else{
    console.log("0")
}

//Take two numbers and print the greater one
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
if (a > b) {
  console.log("Greater number is:", a);
} else if (b > a) {
  console.log("Greater number is:", b);
} else {
  console.log("Both numbers are equal.");
}

//check if number is divisible by 3
if (num % 3 === 0) {
  console.log("Divisible by 3");
} else {
  console.log("Not divisible by 3");
}

//check if number is a multiple of 7
if (num % 7 === 0) {
  console.log("Multiple of 7");
} else {
  console.log("Not a multiple of 7");
}

//check if character is vowel or consonant
let char = prompt("Enter a lowercase character:");
if ("aeiou".includes(char)) {
  console.log("Vowel");
} else if (/[a-z]/.test(char)) {
  console.log("Consonant");
} else {
  console.log("Not a valid lowercase alphabet character");
}

//check if number is between 10 and 50
if (num >= 10 && num <= 50) {
  console.log("Number is between 10 and 50");
} else {
  console.log("Number is not between 10 and 50");
}

//check if number is a 3-digit number
if (Math.abs(num) >= 100 && Math.abs(num) <= 999) {
  console.log("It's a 3-digit number");
} else {
  console.log("It's not a 3-digit number");
}

//check voting eligibility
let age = parseInt(prompt("Enter age:"));
if (age >= 18) {
  console.log("Eligible for voting");
} else {
  console.log("Not eligible for voting");
}

//check temperature level
let temperature = parseFloat(prompt("Enter temperature:"));
if (temperature > 30) {
  console.log("Hot");
} else if (temperature >= 15 && temperature <= 30) {
  console.log("Moderate");
} else {
  console.log("Cold");
}