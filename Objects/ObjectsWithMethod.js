let laptop={
    cpu:'i9',
    ram:16,
    brand:"HP",
    greet:()=>console.log("Hello world"),

};

console.log(laptop.greet());

for(let key in laptop){
    console.log(key,laptop[key]);
}
