let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += 1;
  }
  return sum;
};
console.log(calc(5));
