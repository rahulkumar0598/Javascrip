const a = () => {
  console.log("djsjds");
};
a();

let nums = [32, 34, 546, 78, 2];
console.log(
  nums
    .filter((n) => n % 2 == 0)
    .map((n) => n * 2)
    .reduce((a, b) => a + b)
);
console.log(
  nums
    .filter((n) => n > 5)
    .map((n) => n / 2)
    .reduce((a, b) => a - b)
);
// arrow function this always call its parent function
