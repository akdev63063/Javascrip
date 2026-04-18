/*
The forEach() loop in JavaScript is used to iterate over elements of an array and perform an operation on each element.

🔹 Syntax
array.forEach(function(element, index, array) {
    // code to execute
});
Parameters:
element → current value in the array
index → position of the element (optional)
array → the whole array (optional)
🔹 Basic Example
let numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
    console.log(num);
});

👉 Output:

1
2
3
4
🔹 Using Arrow Function
let numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
    console.log(num);
});
🔹 Example with Index
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index + " : " + fruit);
});

👉 Output:

0 : Apple
1 : Banana
2 : Mango
*/

// Example 1 : Print array numbers 
let arr = [1,2,3,4,5,6];
arr.forEach(function prnum(val)
{
    console.log(val);
});

