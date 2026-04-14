/*
Array Methods in JavaScript (Complete Guide)

JavaScript arrays come with many built-in methods to make data handling easy.
1. Adding & Removing Elements
➕ push() – add at end
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
➖ pop() – remove from end
arr.pop(); // removes 3 → [1, 2]
➕ unshift() – add at beginning
arr.unshift(0); // [0, 1, 2]
➖ shift() – remove from beginning
arr.shift(); // removes 0 → [1, 2]
🔹 2. Looping Methods
🔁 forEach()
let arr = [1, 2, 3];
arr.forEach((val) => {
    console.log(val);
});
🔹 3. Transformation Methods
🔄 map() – create new array
let arr = [1, 2, 3];
let newArr = arr.map(x => x * 2);
// [2, 4, 6]
🔹 4. Filtering & Searching
🔍 filter()
let arr = [1, 2, 3, 4];
let even = arr.filter(x => x % 2 === 0);
// [2, 4]
🔎 find()
let num = arr.find(x => x > 2);
// 3
*/

// Example of Push() methods 
let food_items = ["Apple","Mango","Patato","Gauva"];
console.log(`Before adding any items : ${food_items}`);
food_items.push("Litchi","Patato");
console.log(`After adding some items arrays: ${food_items}`);

// Example of Pop() methods 
console.log(`Before pop food items : ${food_items}`);
delete_item = food_items.pop();
console.log(`After Pop food items: ${food_items}`);
console.log(`Deleted item is : ${delete_item}`);

