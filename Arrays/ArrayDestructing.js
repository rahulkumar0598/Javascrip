let nums=[5,6,7,8,9];
console.log(nums);
// let [a,b,c,d]=nums
let [a,b,,d]=nums
console.log(d)


let words="My name is Rahul Kumar".split(' ');
let [e,f,g,h,i]=words;
// let [e,f,,h,i]=words;
console.log(e,h,i)

// Special work ...
let w="How are you guys ? What  happening ".split(' ');
let [a1,b1,,...d1]=w;
console.log(d1);