/*
JavaScript reduce() Method

reduce() is used to reduce an array to a single value by applying a function to each element.

Examples:

Sum of numbers
Product of numbers
Finding maximum/minimum value
Counting occurrences
Flattening arrays
Syntax
array.reduce(function(accumulator, currentValue) {
    return updatedAccumulator;
}, initialValue);

Or with an arrow function:

array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
Parameters
Parameter	Description
accumulator	Stores the result from previous iteration
currentValue	Current array element
initialValue	Starting value of accumulator
Example 1: Sum of Array Elements
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
Output
15
*/

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);

let arr = [10, 50, 20, 80, 30];

let max = arr.reduce((acc, num) => {
    return num > acc ? num : acc;
});

console.log(max);