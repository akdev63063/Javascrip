/*
A function in JavaScript is a block of code that performs a specific task and runs when it is called.

🔹 1. Basic Syntax of Function
function functionName() {
    // code to execute
}
Example:
function greet() {
    console.log("Hello World");
}

greet(); // calling the function
🔹 2. Function with Parameters

You can pass values (inputs) to a function.

function greet(name) {
    console.log("Hello " + name);
}

greet("Akash");
🔹 3. Function with Return Value

Functions can return a result using return.

function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8
🔹 4. Function Expression

Function stored in a variable.

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));
🔹 5. Arrow Function (Modern Way)

Short syntax introduced in ES6.

const sum = (a, b) => {
    return a + b;
};
Short form:
const sum = (a, b) => a + b;
🔹 6. Types of Functions in JS
Normal Function
Anonymous Function
Arrow Function
Callback Function
Recursive Function
*/

// Example 1
function  myFunction()
{
    console.log("Example 1");
    console.log("I am learning about funtion");
    console.log("I Love Programing");
}

myFunction();
myFunction();