/*
A string in JavaScript is used to store text data.
A string is a sequence of characters used to represent text.
example : let name = "Akash";

Double Quotes
let str1 = "Hello";
2. Single Quotes
let str2 = 'World';
3. Backticks (Template Literals)
let str3 = `Hello Akash`;
*/

let name = "Akash" // create String
console.log("Length of String : ",name.length);
for(i in name)
{
    console.log(name[i]);
}

/*
Template literals in JavaScript are a modern way to work with strings using backticks ( ) instead of single (' ') or double (" ") quotes.

They make it easier to:

Insert variables
Write multi-line strings
Use expressions inside strings
🔹 Syntax
let str = `This is a template literal`;
You can directly use variables inside ${}

*/
// Example 1
let objet = {
    item : "Pen",
    Price : 10
};

console.log(`The item ${objet.item} is price ${objet.Price} rupees`)
