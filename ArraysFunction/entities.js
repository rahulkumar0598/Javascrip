let fruites = [1, 2, 31, 4, 51, 6, 71, 8];

// entiries() method returns an array Iterator object with key/ value pairs
const f = fruites.entries();

console.log("log");
for (let x of f) {
  console.log(x);
}
console.log("log");

for (let x of fruites) {
  console.log(x);
}
