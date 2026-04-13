/*
What is an Array?
An array is a collection of elements stored in a single variable.
let fruits = ["apple", "banana", "mango"];
🔹 How to Create an Array
1. Using square brackets (most common)
let arr = [1, 2, 3, 4];
*/
let arr = [10,20,30,40,50];
console.log(arr);

//Looping in arrays in JavaScript means accessing each element one by one. It’s very important for working with data.

let marks = [45,50,65,96,45,74,55];
for(let i = 0; i <= marks.length;i++)
{
    console.log(marks[i]);
}
console.log("Loops end");

/*
🔁 for...of Loop in JavaScript

The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It directly gives you the values of elements.

✅ Syntax
for (let variable of iterable) {
    // code to execute
}
variable → each element value
iterable → array, string, etc.
*/

let numbers = [10,20,30,40,50];
for(let num of numbers)
{
   console.log(num); 
}

let cities = ["Delhi","Merut","Goa","Noida","Gr Noida"];
for (let city of cities)
{
    console.log(city);
}