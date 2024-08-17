let alien={
    name:"Ram",
    tech:"Js",
    laptop:{
        cpu:"i7",
        ram:4,
        brand:"Asus",
    },
};
for(let key in alien){
    console.log(key,alien[key])
}

console.log(`Print laptops`)

for(let key in alien?.laptop){
    console.log(key,alien?.laptop[key])
}
