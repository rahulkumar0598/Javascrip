let num=String(6);//convert number to string
console.log(num,typeof(num));

let num1=Number("123");//conver string to number
console.log(num1,typeof(num1));


let x;//declare x
console.log(x,typeof(x))
x=2//initalize x=2
console.log(x,typeof(x))
x=x+"2"//add x with string
console.log(x,typeof(x))
x=x-"2"//subtract number with string
console.log(x,typeof(x))


//boolean
//if there is any number convert into boolean it returns always true except zero
x=!x;
console.log(x,typeof(x))

//convert number to boolean
console.log(Boolean(7))
//convert null to boolean
console.log(Boolean(null))//false will be output
//convert undefined to boolean
console.log(Boolean(undefined))//false will be output

//convert 0 to boolean
console.log(Boolean(0))//false will be output

//convert string to boolean
console.log(Boolean("Ram"));//true will be output

//convert string in number usin pasrseInt
let x22b=parseInt("12344 Ram ");
console.log(x22b)


