class fruits {
  name = "orange";
  constructor() {
    console.log("constructor", this.name);
  }
  getFruit() {
    return "apple";
  }
}
let f1 = new fruits();
console.log(f1.getFruit());
