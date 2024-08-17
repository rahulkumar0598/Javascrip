function* Steps() {
  let a = 10;
  let b = 20;
  console.log(a + b);
  yield "Step 1 Completed";
  console.log(a - b);
  yield "Step 2 Completed";
  console.log(a * b);
  yield "Step 3 Completed";
  return "all steps done";
}
let stp = Steps();
console.log(stp.next());
console.log(stp.next());
console.log(stp.next());
console.log(stp.next());
console.log(stp.next());
