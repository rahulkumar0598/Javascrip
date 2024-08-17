function PrimeNumber(num) {
  let isPrime = true;
  if (num === 1) {
    return "prime Number";
  } else {
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) {
        return "not prime Number";
      }
    }
    return " prime Number";
  }
}
console.log(PrimeNumber(50));
