// Arithmatics Operators 
/*
------------------------------------------------------
| Operator | Meaning             | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `10 + 5` | 15     |
| `-`      | Subtraction         | `10 - 5` | 5      |
| `*`      | Multiplication      | `10 * 5` | 50     |
| `/`      | Division            | `10 / 5` | 2      |
| `%`      | Modulus (remainder) | `10 % 3` | 1      |
| `**`     | Exponent (power)    | `2 ** 3` | 8      |
| `++`     | Increment           | `x++`    | x + 1  |
| `--`     | Decrement           | `x--`    | x - 1  |
------------------------------------------------------
*/

let a = 10;
let b = 5;

console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
// Modules %
console.log("a % b =",a%b);
// Exponentiation a pow b (a ** b)
console.log("a ** b =",a ** b);
// Increment 
console.log("++a =",++a);
// Decrement
console.log("--a =",--a);

// Assigment Operators 
/*
-----------------------------------------------------------
| Operator | Meaning           | Example   | Result       |
| -------- | ----------------- | --------- | ------------ |
| `=`      | Assign value      | `x = 10`  | x becomes 10 |
| `+=`     | Add & assign      | `x += 5`  | x = x + 5    |
| `-=`     | Subtract & assign | `x -= 3`  | x = x - 3    |
| `*=`     | Multiply & assign | `x *= 2`  | x = x * 2    |
| `/=`     | Divide & assign   | `x /= 2`  | x = x / 2    |
| `%=`     | Modulus & assign  | `x %= 3`  | x = x % 3    |
| `**=`    | Exponent & assign | `x **= 2` | x = x²       |
-----------------------------------------------------------
*/
x = 10;
console.log("x += 5 = ",x += 5);
console.log("x -= 5 = ",x -= 5);
console.log("x *= 5 = ",x *= 5);
console.log("x /= 5 = ",x /= 5);
console.log("x %= 5 = ",x %= 5);
console.log("x **= 5 = ",x **= 5);

// Comparision Operators 
/*
-----------------------------------------------------------------
| Operator | Meaning                     | Example     | Result |
| -------- | --------------------------- | ----------- | ------ |
| `==`     | Equal (loose)               | `5 == "5"`  | true   |
| `===`    | Strict equal (value + type) | `5 === "5"` | false  |
| `!=`     | Not equal (loose)           | `5 != "5"`  | false  |
| `!==`    | Strict not equal            | `5 !== "5"` | true   |
| `>`      | Greater than                | `10 > 5`    | true   |
| `<`      | Less than                   | `10 < 5`    | false  |
| `>=`     | Greater than or equal       | `10 >= 10`  | true   |
| `<=`     | Less than or equal          | `5 <= 10`   | true   |
------------------------------------------------------------------
*/

let c = 15;
let d = 25;
console.log("c == d = ", c == d);
console.log("c === d = ", c === d);
console.log("c != d = ", c != d);
console.log("c !== d = ", c !== d);
console.log("c > d = ", c > d);
console.log("c < d = ", c < d);
console.log("c >= d = ", c >= d);
console.log("c <= d = ", c <= d);






