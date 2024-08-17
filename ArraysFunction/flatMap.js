// The flatMap() method maps all array elements and creates a new flat array.

// flatMap() creates a new array from calling a function for every array element.

// flatMap() does not execute the function for empty elements.

// flatMap() does not change the original array.
let fruites = [1, 2, [31, 4], 51, [6, 71], 8];
let fruit = fruites.flat(2);
console.log(fruit.flatMap((x) => x * 2));
