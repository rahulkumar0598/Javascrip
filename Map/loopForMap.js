let map=new Map();
map.set("Ram","Java");
map.set("Sam","Android");
map.set("kam","ML");
map.set("Ram","BlockChain")
//we are not adding valu we are basically setting value
for(let [keys,values] of map){
    console.log(keys," : ",values)
}
console.log(`
forEach loop
`);

map.forEach((values,keys)=>{
    console.log(keys," : ",values)
})