/*
Create an array to store companies- > ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
*/
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

/*
Remove the first Company from the array
*/
let remove_fc = companies.shift();
console.log(`Remove First Company : ${remove_fc}`);
console.log(`Print array after Remove: ${companies}`);

/*
Remove uber and Add Ola in its place
*/
let uber_to_Ola =companies.splice(1,1,"OLA");
console.log(`add Ola in Uber Place : ${companies}`);

// Add Amazone at the End 
let add_amazone = companies.push("Amazone");
console.log(companies);