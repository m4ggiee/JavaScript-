let num = parseInt(prompt(`Введіть шестизначне число:`));

let num6 = num % 10;
let digit5 = num / 10;
digit5 = parseInt (digit5);
let num5 = digit5 % 10;
let digit4 = digit5 /10; 
digit4 = parseInt (digit4);
let num4 = digit4 % 10;
let digit3 = digit4 /10; 
digit3 = parseInt (digit3);
let num3 = digit3 % 10;
let digit2 = digit3 /10; 
digit2 = parseInt (digit2);
let num2 = digit2 % 10;
let digit1 = digit2 /10; 
digit1 = parseInt (digit1);
let num1 = digit1 % 10;

console.log(num1, num2, num3, num4, num5, num6);

if(num1==num6, num2==num5, num3==num4){
    console.log(`Задане число ${num} є дзеркальним`);
} else{
    console.log(`Задане число ${num} НЕ є дзеркальним`);
}
