/*
Arrow Function in JavaScript

Arrow function is a shorter syntax to write functions in JavaScript (introduced in ES6). It makes code cleaner and easier to read.

🔹 Syntax
const functionName = (parameters) => {
    // code
}
🔹 Example 1: Normal Function vs Arrow Function

Normal Function:

function add(a, b) {
    return a + b;
}

Arrow Function:

const add = (a, b) => {
    return a + b;
}
*/
const mul = (a , b) => {
    return a * b;
};
let show = mul(4,5);
console.log(show);
