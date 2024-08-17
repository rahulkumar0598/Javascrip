
//you should not used this keyword with arrow function
let laptop1={
    cpu:'i9',
    ram:16,
    brand:'HP',
    getConfig:()=>{
        return this.cpu
    }
}
console.log(laptop1.getConfig());
let laptop2={
    cpu:'i7',
    ram:16,
    brand:'HP',
    getConfig:function (){
        return this.cpu
    }
}
console.log(laptop2.getConfig());