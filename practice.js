const prompt = require('prompt-sync')();


let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operation: ");

if (operator === "+") {
    console.log("Addition: ", num1 + num2)
} else if (operator === "-") {
    console.log("Subtraction: ", num1 - num2)
} else if (operator === "*") {
    console.log("Multiplication: ", num1 * num2)
} else if (operator === "/") {
    console.log("Division: ", num1 / num2)
} else {
    console.log("Invalid operator");

};