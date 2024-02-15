//create a faulty calculator

// let a =Math.random()
// console.log(a)
let rendom=Math.random()
console.log(rendom)
let a=prompt("enter the first number:")

let c=prompt("enter the operation")
let b=prompt("enter the second number")

let obj={
    "+":"-",
    "-":"+",
    "*":"/",
}

if(rendom>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}
else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}