// For a given array with the marks marks = [85,97,44,37,76,60].Find the average marks of entire class

let marks = [85,97,44,37,76,60];
let sum=0;
for(let m of marks)
{
    sum += m;
}
let average = sum/marks.length
console.log(`Average marks of class: ${average}`)
