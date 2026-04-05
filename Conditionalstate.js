/*
Conditional statements in JavaScript are used to make decisions based on conditions (true/false).
1. if statement --------------> Executes code if condition is true.
2. if...else statement--------> Executes one block if true, another if false.
3. if...else if...else--------> Checks multiple conditions.
4. switch statement ----------> Used when you have multiple cases.
5. Ternary Operator (Short if-else)-----> Used when you have multiple cases.
*/

// If - Statement

let age = 25;
if (age > 18)
{
    console.log("You can vote");
}

let mode = "dark";
let color;
if (mode === "dark")
{
    color = "Black"
}
console.log(color)

// If else Statement 

let colors;
if (mode === "dark")
{
    colors = "black"
}
else
{
    colors = "white"
}
console.log(colors);

// if - else Statement  

let voter_age = 10;
if (voter_age > 18)
{
    console.log("You can vote");
}
else
{
    console.log("You cant vote")
}