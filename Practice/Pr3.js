/*
Write a code which can give grades to student acording to their scores:
* 90-100   --> A
* 70-89    --> B
* 50-69    --> C
* 35-49    --> D
* 34    --> Fail
*/

let marks = 55;
if (marks > 90)
{
    console.log("Grade A")
}
else if (marks > 70 && marks < 90) 
{
    console.log("Grade B");
    
}
else if(marks > 50 && marks < 70) 
{
    console.log("Grade C");
}
else if(marks > 35 && marks < 50) 
{
    console.log("Grade D");
}
else
{
    console.log("Fail")
};