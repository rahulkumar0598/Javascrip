function someValue() {
  return "Last";
}
function add(a, b = "middle", c = someValue()) {
  return a + b + c;
}
console.log(add("first"));
