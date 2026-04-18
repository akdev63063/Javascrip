/*
Create a funtion using the "function" keyboard that take a string as a arguments and return the number of vowels in strings. 
*/

function VowelsCounts(typestring)
{
    let count_var = 0;
    for(let char of typestring)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count_var++;
        }
    }
        console.log("Total Vowels in this strings is : ",count_var);

}
VowelsCounts("akash");

// Same solve this problem by arrow functions 

let c_v = (any_string) =>
{
let cou_var = 0;
    for(let char of any_string)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            cou_var++;
        }
    }
        console.log("Total Vowels in this strings is : ",cou_var);
}
 c_v ("ajay");
 


 