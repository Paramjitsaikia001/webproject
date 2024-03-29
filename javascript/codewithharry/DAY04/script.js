console.log("this the 4th day")
// let a=1;
// for(let i=0;i<100;i++){
//     console.log(a+i);
// }

let obj={
    name:"paramjit saikia",
    "roll no":10,
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key  ,element)
        
    }
}

for (const c of "Paramjit") {
    console.log(c)
}

let i=10;
// while(i<6){
//     console.log(i)
//     i++;
// }

do{
    console.log(i)
    i--;
}while(i>6)
