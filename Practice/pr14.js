// by Filter  method 
/*
JavaScript filter() Method

filter() is an array method used to create a new array containing only the elements that satisfy a given condition.

Syntax
array.filter(function(element, index, array) {
    return condition;
});

Or using an arrow function:

array.filter((element) => condition);
Parameters
Parameter	Description
element	Current element being processed
index	Current index (optional)
array	Original array (optional)
Return Value
Returns a new array.
Does not modify the original array.
Includes elements for which the callback returns true.
*/

let marks = [45,64,34,76,86,55,96];
let highest = marks.filter((val) =>
{
    return val > 90 ;
});
console.log("Highest Number is : ",highest);

