let test1 = function () {
  return 1;
};
let test = () => {
  return 1;
};
console.log(test1());
console.log(test());

// concept of this
let data = [35, 872, 237, 27, 23];
let newdata = data
  .map((n) => n * 2)
  .filter((n) => n > 70)
  .reduce((a, b) => a + b);
console.log(newdata);

let item = {
  name: "item1",
  getName: function () {
    console.log("nprmal", this);
  },
  getNameArraow: () => {
    console.log("arrow", this);
  },
};
item.getName();
item.getNameArraow();
