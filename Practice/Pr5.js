/*Create a game with start with any random game number.Ask the user to keep guess the game number until the users enters correct values  
*/

let gameNum = 25;
let userName = prompt("Guess The Game Number : ");
while (userName !== gameNum)
{
    userName = prompt("You entered wrong Number ,Pleae try Again ");
}
console.log("Congratulation, You Entered Right number");

