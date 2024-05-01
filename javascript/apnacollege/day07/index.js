let fooditems=["potato","banana","apple"]

fooditems.push("chips")//push function is use for add items at the end of the array

console.log(fooditems)

fooditems.pop();// pop function is use for delete items from the end amd return

console.log(fooditems) 

console.log(fooditems.toString())//tostrig is use for convert a array to string

let fooditems2=["icecream","bread","milk"]

let food=fooditems.concat(fooditems2)//concat function is use to conacatenate two or more array
console.log(food);
fooditems2.unshift("rice");
console.log(fooditems2)//use to add element at the first of the array

fooditems2.shift();
console.log(fooditems2);//use to remove first element

let evenNumber=[2,24,26,66,68.86,34]
let slice=evenNumber.slice(2,4)//slice is use to function for print one part of array
console.log("after slice  ",slice);

let oddNumber=[33,35,23,21,99,67];
oddNumber.splice(2,1,30);
console.log(oddNumber);//splice use for delete element and replace format is splice(startidx,delcount,replace)