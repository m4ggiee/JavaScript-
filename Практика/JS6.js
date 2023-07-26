let num = parseInt(prompt(`Введіть трьохзначне число:`));

let num3 = num % 10;
let secondDigit = num / 10;
secondDigit = parseInt (secondDigit);
let num2 = secondDigit % 10;
let digit4 = secondDigit /10; 
digit4 = parseInt (digit4);
let num1 = digit4 % 10;
num1 = parseInt (num1);
console.log(num1, num2, num3)

console.log(num1, num2, num3);

if((num1+num2+num3)%2==0){
   console.log(`сумма цифр є парна`);
} else{
    console.log(`сумма цифр не є парна`);
}

if((num1+num2+num3)%5==0){
    console.log(`сумма цифр є кратна 5`);
 } else{
     console.log(`сумма цифр не є кратна 5`);
}

if((num1*num2*num3)>100){
    console.log(`добуток цифр більше 100`);
 } else{
     console.log(`добуток цифр менше 100`);
 }

