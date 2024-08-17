let nums=new Set();
nums.add(3)
nums.add(4)
nums.add(5)
nums.add(3)
nums.add('Ram')
nums.add('Sam')
nums.add('kam')
nums.add(31)

//1 ways
nums.forEach((value)=>{
    console.log(value);
})

console.log(`    
 print single value
`)

console.log(nums.has(31));
