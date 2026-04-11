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

console.log(`The item ${objet.item} is price ${objet.Price} rupees`);
/*
What is String Interpolation?

String interpolation is a concept where you insert variables or expressions directly inside a string instead of joining them using +.

👉 It makes code clean, readable, and easy to write.

🔹 Syntax (JavaScript)

In JavaScript, string interpolation is done using template literals:

`string text ${expression}`
Use backticks ( )
Use ${} to insert variables or expressions
`string text ${expression}`

*/
// Template Literals and String Interpolation both are mostly same but not exactly 
//

/*
Strings Methods 
💡 Quick Summary
Use slice() / substring() → to extract
Use replace() / replaceAll() → to modify
Use includes() / indexOf() → to search
Use split() → to convert into array
*/

let str1 = "Akash Kumar";
console.log(str1.slice(0,5));

// Example Replace() 
console.log(str1.replace("Kumar","Gautam")); 

// Example of toUpperCase()
 console.log(str1.toUpperCase());

 // Example of toLowerCase()
 console.log(str1.toLowerCase());

 // example of trim()
let str2 = "      Akash";
 console.log(str2.trim());

 // concatination 
 console.log(str1.concat(str2));