let user="Ram";//global variable

function geet(u){
    //u is an local variable
    let num=5;
    console.log(num);
    console.log(u)
    console.log(user)
}
let str=geet(user)
// console.log(u);

console.log(`
 New function 
`)

//num3=1 is showing default which is used when you should not pass any value
function add(num1,num2,num3=1){
    console.log(num1+num2+num3)
    return num1+num2+num3;
}
let result=add(5,6);
console.log(result)

