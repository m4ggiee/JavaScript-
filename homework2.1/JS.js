//1
let name = prompt(" What's your name?");
let greet = alert (`Hello, ${name}! How are you? `);

//2
let number1 = prompt(`Введіть 1 число:`);
let number2 = prompt(`Введіть 2 число:`);
console.log(number1 + number2);

let number0 = prompt(`Введіть 1 число:`);
let number01 = prompt(`Введіть 2 число:`);
console.log(number0 - number01);

let number00 = prompt(`Введіть 1 число:`);
let number02 = prompt(`Введіть 2 число:`);
console.log(number00 * number02);

let number3 = prompt(`Введіть 1 число:`);
let number4 = prompt(`Введіть 2 число:`);
console.log(number3 / number4);

//3
let comparison1 = prompt(`Enter the first value you want to compare:`);
let comparison2 = prompt(`Enter the second value you want to compare:`);

console.log(comparison1 === comparison2);

//4
let num1 = (`Число №1:`);
let num2 = (`Число №2:`);
let num3 = (`Число №3:`);

console.log((num1+num2+num3)/3);

//5
let num = prompt(`Введіть п'яти значне число:`) ;
let firstDigit = num % 10;
let secondDigit = num / 10;
secondDigit = parseInt (secondDigit);
let thirdDigit = secondDigit % 10;
let Digit4 = secondDigit /10; 
Digit4 = parseInt (Digit4);
let Digit5 = Digit4 % 10;
let Digit6 = Digit4 / 10;
Digit6 = parseInt (Digit6);
let Digit7 = Digit6 % 10;
let Digit8 = Digit6 / 10;
Digit8 = parseInt (Digit8);
let lastDigit = Digit8 %10;
console.log(lastDigit, Digit7, Digit5, thirdDigit, firstDigit);




