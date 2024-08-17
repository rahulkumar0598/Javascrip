let a = {
  name: "Ram",
  language: "hindi",
  run: () => {
    console.log("self run");
  },
};
a.run();
let b = {
  gun: () => {
    console.log("run");
  },
};

b.__proto__ = {
  nam: "sam",
};
a.__proto__ = b;
a.gun();
console.log(b.nam);
