// every () method executes a function for each element
// It does not change the original array
// It does not execute the fuction of empty element
// array.every(function(currentValue,index,arr),thisValue)
let fruites = [1, 2, 31, 4, 51, 6, 71, 8];
console.log(fruites.every((age) => age > 18));
