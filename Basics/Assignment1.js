let num1=65324672;
let num2=0;
while(num1>0)
{
    num2=num2*10+(num1%10)
    num1=parseInt(num1/10)
}
console.log(num2);