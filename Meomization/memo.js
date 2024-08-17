const calc = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1;
  }
  return sum;
};
const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      console.log(cache);
      return cache[n];
    } else {
      console.log("first time");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const memoized = memoize(calc);
console.log(memoized(5));
console.timeEnd();
console.time();
console.log(memoized(5));
console.timeEnd();
