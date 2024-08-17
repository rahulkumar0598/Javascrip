//filter method

let nums=[1,21,3,4,51,6,7,8];
nums.filter(n1=>{
    return n1%2===0
})
.forEach(Element=>{
    console.log(Element)
})

//ShortHand
// nums.filter(n1=>n1%2==0).forEach(e=>console.log(e));

