// function fruits(a, b, ...c,d) { rest operator will be the last formal parametr
// after that you pass anything it will return an array

/// you can pass a funvtion inside rest parameter
// rest  operator return the parameter in the form of array
function fruits(a, b, ...c) {
  console.log("fruits", a, b, c);
}
function test() {
  console.log("test");
}
fruits("apple", "banana", "orange", "grape", test);
