//function


// function desc(name) {
//     console.log("Hey "+ name + " you are nice")
//     console.log("Hey "+ name + " you are good")
//     console.log("Hey "+ name + " your t shirt color is nice")
// }
// desc("param")
// desc("debojit")

// function sum(a,b){
//     // console.log(a+b)
//     return a+b
// }
// // sum(2,3)
// result1=sum(3,5)
// result2=sum(3,15)
// result3=sum(13,5)
// console.log("the sum is: ", result1)
// console.log("the sum is: ", result2)
// console.log("the sum is: ", result3)

function sum(a,b,c=10){
    // console.log(a+b)
    return a+b+c
}
// sum(2,3)
result1=sum(3,5)
result2=sum(3,15)
result3=sum(13,5,20)
console.log("the sum is: ", result1)
console.log("the sum is: ", result2)
console.log("the sum is: ", result3)

//NaN means not a number

//arrow function

const func1=(x)=>{
    console.log("i am an arrow function",x)
}
func1(23)
func1(3)
func1(230)