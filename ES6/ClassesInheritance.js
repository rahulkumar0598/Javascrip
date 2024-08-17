class Category {
  dryFruites() {
    return "Almond is dry";
  }
  poemeFruit() {
    return "apple is pom fruits";
  }
}
class fruits extends Category {
  constructor() {
    // super key word is used to call the parent class constructor
    // if you declare the constructor inside the parent component
    super();
    console.log("constructor");
  }
  getFruit() {
    return "you got apple";
  }
}
let f1 = new fruits();
console.log(f1.getFruit());
let c1 = new Category();
console.log(c1.dryFruites());
console.log(f1.poemeFruit());
