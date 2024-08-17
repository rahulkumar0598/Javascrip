let nums=[1,2,3,4,5,6]

let result=nums.filter(n=>{
    return n%2===0
}).map(n=>{
    return n*2
}).reduce((a,b)=>{
    return a+b
});
console.log(result)

//short Hand
// console.log(nums.filter(n=>n%2==0).map(n=>n*2).reduce((a,b)=>a+b));
