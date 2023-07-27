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

if(num1 == num2 && num1 == num3 && num2 == num3){
    console.log(`Так, всі цифри однакові`);
} else{
    console.log(`Ні, цифри не однакові`);
}

if(num1==num2){
    console.log(`${num1} і ${num2} є однаковими`);
} else if(num1==num3){
    console.log(`${num1} і ${num3} є однаковими`);
} else if(num2==num3){
    console.log(`${num2} і ${num3} є однаковими`);
} else{
    console.log('Серед цифр немає однакових цифр');
}