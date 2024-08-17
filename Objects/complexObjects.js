//create a complex objects
let alien={
    name:"Ram",
    tech:"Js",
    laptop:{
        cpu:'i7',
        ram:4,
        brand:"ASUS",
    },
};

console.log(alien)
console.log("Prints the laptop")
console.log(alien.laptop)
console.log("Prints the laptops brand")
console.log(alien.laptop?.brand);
// console.log("Prints the laptops brand length")
// console.log(alien.laptop.brand.length);
console.log("Prints the laptops brand length with condition")
console.log(alien.laptop?.brand?.length);
// alien.laptop.brand?.length ==this basically checks the  brand is avaliable or not with the help of question mark '?' sign


//delete property in js
console.log("delete property in js");
delete alien.tech;
console.log(alien)
