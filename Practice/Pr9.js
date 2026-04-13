/*
For a given array with prices of 5 items -> [250,645,300,900,50]
all items have an offer of 10% OFF on them. Change the array to store final price after apply offer. 
*/
let items = [250,645,300,900,50];
let sum = 0;

for (let itm of items)
{

    sum += itm;
}
discount = sum * 0.1;
let price_after_dis=sum-discount;
console.log(`Total price of all Items : ${sum}`);
console.log(`Total Discount : ${discount}`);
console.log(`Total price after 10% Discount : ${price_after_dis}`)

// Example no 2 
let nms = [250,645,300,900,50];
let i= 0;
for(let nm of nms)
{
    let offer = nm/10;
    nms[i] = nms[i] - offer;
    console.log(nms[i]);
    i++;
}

