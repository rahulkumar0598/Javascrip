const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = x.map((item) => item);
const newArrays = x.map((item) => item * item);
console.log(newArr);
console.log(newArrays);

const filterArr = x.filter((item) => {
  return item > 3;
});
console.log(filterArr);

const reducArray = x.reduce((total, next) => {
  console.log(total, next);
  return total + next;
});
console.log(reducArray);
