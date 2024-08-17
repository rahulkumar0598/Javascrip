// let fruits = ["apple", "mango", "banana"];
// function PrintAll(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// PrintAll(...fruits);
// // use of rest and spread operator at the sampe time
// let fruits = ["apple", "mango", "banana"];
// function PrintAll(...a) {
//   console.log(a);
// }
// PrintAll(...fruits);
// adding two array
// let fruits = ["apple", "mango", "banana"];
// let fruitsother = ["orange", "grapes", "kivi"];
// let allFruits = [...fruitsother, ...fruits];
// console.log(allFruits);
// // adding two array without using third vairable
// let fruits = ["apple", "mango", "banana"];
// let fruitsother = ["orange", "grapes", ...fruits, "kivi"];
// console.log(fruitsother);
let fruits = ["apple", "mango", "banana"];
let newFruits = [...fruits];
newFruits.push("grapes");
console.log(newFruits);
console.log(fruits);
