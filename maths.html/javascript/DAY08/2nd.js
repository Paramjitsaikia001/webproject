// create a new array where insert the square of the original array

let arr=[2,34,5,3,1]

let newArr=[]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2) // this is function that push the element one by one to new array
}
console.log(newArr)

//another method
let new_arr=arr.map((e)=>{
    return e**2
})

console.log(new_arr)

//to print a element in given condition

const greaterthanseven =(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanseven))