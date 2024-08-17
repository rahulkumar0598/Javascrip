// destructuring in object
// it destructuring  the basis of keys
// let user = { name: "ram", email: "rk@test.com", mobile: 2372 };
// let { name, email, mobile } = user;
// console.log(email, name, mobile);
// default parameter if we donot defined default parameter then it will give undefined
// let user = { name: "ram", email: "rk@test.com", mobile: 2372 };
// let { name, email, mobile, age = 73 } = user;
// console.log(email, name, mobile, age);
// use of rest parameter
let user = { name: "ram", email: "rk@test.com", mobile: 2372 };
let { name, ...email } = user;
console.log(email, name);
