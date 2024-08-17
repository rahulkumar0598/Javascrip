var employee = {
  eid: "E01",
  ename: "Ram",
  address: "India",
};
// first way to deep copy
var employee2 = { ...employee };
employee2.ename = "Ram2";
console.log(employee, employee2);
// second way to deep copy
var employee1 = JSON.parse(JSON.stringify(employee));
employee1.ename = "Ram3";
console.log(employee, employee1);

// third way to deep copy
var employee3 = Object.assign({}, employee);
employee3.ename = "Ram4";
console.log(employee, employee3);
