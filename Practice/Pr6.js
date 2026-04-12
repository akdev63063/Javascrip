/*
Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @,followed by their full name and ending with the fullname length.
Example : 
*/

username = prompt("Enter the username : ");
start_with = "@"+username;
len = username.length;
console.log(start_with.concat(len));

