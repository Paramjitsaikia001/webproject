//loops

let a=[23,3,45,566,7]

//for loops
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

//for each loop
a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})