
//you should not used this keyword with arrow function
function getFastLaptop(laptop1,laptop2){
    if(laptop1.cpu>laptop2.cpu){
        console.log(laptop1);
    }
    else{
        console.log(laptop2);
    
    }    
}

let laptop1={
    cpu:'i9',
    ram:16,
    brand:'Apple',
    compare:function(laptop){
        if(this.cpu>laptop.cpu){
            console.log(this);
        }
        else{
            console.log(laptop);
        
        }  
    },
    getConfig:function (){
        return this.cpu
    },
}

let laptop2={
    cpu:'i7',
    ram:16,
    brand:'HP',
    getConfig:function (){
        return this.cpu
    }
}

getFastLaptop(laptop1,laptop2)
console.log(`
comapre method
`)
laptop1.compare(laptop2);

