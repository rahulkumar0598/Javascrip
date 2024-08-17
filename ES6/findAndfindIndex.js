//find()==> return first element match in the array
let data = [7, 34, 23, 56, 56, 78, 89, 6, 3];
// let result = data.find((item) => item < 7);
let result = data.find((item) => item > 7 && item < 89);
console.log(result);
//findIndex() ==> rturn frist element index in the array
let data1 = [7, 34, 23, 56, 56, 78, 89, 6, 3];
let result1 = data1.findIndex((item) => item < 7);
console.log(result1);

let dataobj = [
  {
    id: 20,
  },
  {
    id: 10,
  },
  {
    id: 80,
  },
  {
    id: 50,
  },
  {
    id: 75,
  },
];

// let resultObj = dataobj.find((item) => item.id > 50);
//if you donot give condition the it can return first element
let resultObj = dataobj.find((item) => item.id);
let resultObjI = dataobj.findIndex((item) => item.id);
console.log(resultObj);
console.log(resultObjI);
