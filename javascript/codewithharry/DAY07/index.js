let arr=[1,2,3,5]
arr[1]=90;//array is mutable it can be change but string is not mutable
console.log(arr);


console.log(arr.length)


console.log(arr[3])


console.log(typeof arr)


console.log(arr.toString())//to convert a array to string


console.log(arr.join(" or "))//to add a string instead of , comma


console.log(arr.pop());//to remove the last element of the array
console.log(arr)


console.log(arr.push(100))//to add a number or string in the last of the array
console.log(arr)


console.log(arr.shift())//to remove the 1st element of the array
console.log(arr)


console.log(arr.unshift("jack"))//add a string or number in the 1st elelmt of the array
console.log(arr)


delete arr[3]//delete element in certain index
console.log(arr)

let ar=['param','naba']
let arr_=[34,50,6,45,34]

let ARR=arr.concat(ar,arr_)
console.log(ARR)

console.log(arr_.slice(1,3))