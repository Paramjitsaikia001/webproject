console.log("hello world")
let age =90;
if(age>18){
    console.log("you can drive");//semicolon is optional
}
else if(age==0){
    console.log("are you kidding");
}
else{
    console.log("you cannot drive");
}
let age1="90";
console.log(age===age1)//it compare both value or type
console.log(age==age1)//it only value
console.log(!true)

//tenary operator
let a=34;
let b=90;
console.log((a>b)?"a is greater":"b is greater");