/*
Loops in JavaScript are used to repeat a block of code multiple times until a condition is met.
Quick Summary:
for → fixed iterations
while → condition-based
do...while → runs at least once
for...of → values (arrays/strings)
for...in → object keys
*********For Loop Syntax *************
for (initialization; condition; increment/decrement) {
    // code to execute
}
*/
// Example no 1 Print five times to I love javascripts
let sum = 0;
for(let i=1;i<=5;i++)
{
    sum += i;
};
 console.log(".Sum of All: ",sum);
console.log("I love Javascripts");

// Print table of spacefic Number 
let num = prompt("Enter a Number : ");
for(let i = 1; i<=10;i++)
{
    console.log(i * num)
};
console.log("End Table")

/*
While Loop in JavaScript

A while loop runs a block of code as long as a condition is true.

syntax : while (condition) {
    // code to execute
}
*/
let i = 1;
while(i <= 10)
{
    console.log(" i = ",i)
    i++;
}


