// BY Mapping
/**
JavaScript map() Method

map() is an array method used to transform each element of an array and create a new array.

Syntax
array.map(function(element, index, array) {
    return newValue;
});

Or with an arrow function:

array.map((element) => newValue);
How map() Works
Goes through each element of the array.
Applies a function to each element.
Returns a new array with the transformed values.
Does not modify the original array.
Example 1: Multiply Each Number by 2
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);

console.log(doubled);
Output
[2, 4, 6, 8, 10]
Example 2: Convert Names to Uppercase
let names = ["akash", "rahul", "aman"];

let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);
Output
["AKASH", "RAHUL", "AMAN"]
**/
let marks = [45,64,34,76,86,55];
let square = marks.map((val) =>
{
    return val ** 2
});
console.log(square);

let marks1 = [1,2,3,4,5,6,7,8,9];
let less = marks1.map((values) => values-1)
{
    console.log(less);
};


