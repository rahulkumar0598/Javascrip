let nums=[1,2,3,4,5,6]
//short Hand
// nums.filter(n=>n%2===0).map(n=>n*2).forEach(n=>console.log(n));
nums.filter(n=>{
    return n%2===0
}).map(n=>{
    return n*2
}).forEach(n=>{
    console.log(n)
})