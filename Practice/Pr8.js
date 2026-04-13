/*
For a given array with marks of students -> [85,97,44,37,76,60] 
Find the average of the entire class.
*/
let stu_marks = [85,97,44,37,76,60];
let sum = 0 ;
for(let marks of stu_marks)
{
    sum += marks;
  
}
  let average = sum/stu_marks.length;
    console.log(`Average of marks is : ${average}`);
