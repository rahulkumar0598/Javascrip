function Alien(name,tech){
    this.name=name;
    this.tech=tech;
    this.work=function(){
        console.log("Solve the problem")
    };
    // return this;
}
let alein= new Alien("Ram","JS");
let alein1= new Alien("Ram","JS");
alein1.tech="Block Chain";
console.log(alein);
console.log(alein1);
alein1.work();
