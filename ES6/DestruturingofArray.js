let fruits = ["apple", "mango", "kivi", "orange"];
// let [a, b, c] = fruits; //desturning of array
// let [a, , c] = fruits; // skipping one item for destructing
//let fruit = ["apple", "mango", "kivi"];
// let [a, b, c, d] = fruit; // d will return undefined
// let [a, b, c, d = "banana"] = fruits; // default parameter
let [a, ...d] = fruits; // rest operator

console.log(a);
console.log(d);
