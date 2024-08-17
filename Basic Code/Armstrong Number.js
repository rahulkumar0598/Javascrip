function Armstrong(val) {
  let temp = val;
  let sum = 0;
  while (temp > 0) {
    let rem = temp % 10;
    sum = sum + rem * rem * rem;
    temp = parseInt(temp / 10);
  }
  return sum;
}
console.log(Armstrong(153));
