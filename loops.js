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
    console.log("i = ",i)
    i++;
}
/*
do...while loop in JavaScript

A do...while loop is used to execute a block of code at least once, and then repeat it while a condition is true
Syntax : do {
    // code to be executed
} while (condition);
*/
let n = 1;
do{
    console.log("Hello Everyone")
    n++;
}while(n<=10);

/*
for...of loop in JavaScript

The for...of loop is used to iterate over iterable objects like:

Arrays ✅
Strings ✅
Maps, Sets ✅
Syntax : for (let variable of iterable) {
    // code to execute
}
*/
let name = "Akash";
for(let i of name)
{
    console.log(" i =",i);
}
// With String size
let name1 = "Akash";
let size = 0;
for(let i of name1)
{
    console.log(" i =",i);
    size++;
}
console.log("Size of String: ",size)

/*
for In Loops 
for...in loop in JavaScript

The for...in loop is used to iterate over the keys (properties) of an object.

✅ Syntax
for (let key in object) {
    // code
}
*/

let student =
{
    name : "Akash",
    course: "Mca",
    college:"GBU"
};
for (let i in student)
{
    console.log("Keys : ",i);
}