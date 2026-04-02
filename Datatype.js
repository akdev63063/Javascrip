/*_________________Primitive Data types____________________*/
let x = 10;
console.log(x);
console.log(typeof(x));
let fullName="Akash Kumar";
console.log(fullName);
console.log(typeof(fullName));
isFollow = true;
console.log(isFollow);
console.log(typeof(isFollow));
bn = BigInt(123);
console.log(bn);
console.log(typeof(bn));
let y;
console.log(y);
console.log(typeof(y));
let z = null;
console.log(z);
console.log(typeof(z));

// Output

/**
 * 10
number
Akash Kumar
string
true
boolean
123n
bigint
undefined
undefined
null
object
 * 
 */

/*_________________Non Primitive Data Types___________________*/
// Objects

const Student =
{
    fullName : "Akash Kunar",
    Age : 24,
    Course : "MCA AI",
    College : "GBU"
};
console.log(Student["fullName"]);
console.log(Student["Age"]);
console.log(Student.Course);
console.log(Student.College);