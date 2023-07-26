//1
let name = prompt(" What's your name?"); 
alert(`Hello, ${name}! How are you? `);

//2
let number1 = parseInt(prompt('Enter first digit'));
let number2 = parseInt(prompt('Enter first digit'));
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
let num1 = parseInt(prompt(`Число №1:`));
let num2 = parseInt(prompt(`Число №2:`));
let num3 = parseInt( prompt(`Число №3:`));

console.log((num1+num2+num3)/3);

//5
let num = prompt(`Введіть п'яти значне число:`) ;
let firstDigit = num % 10;
let secondDigit = num / 10;
secondDigit = parseInt (secondDigit);
let thirdDigit = secondDigit % 10;
let digit4 = secondDigit /10; 
digit4 = parseInt (digit4);
let digit5 = digit4 % 10;
let digit6 = digit4 / 10;
digit6 = parseInt (digit6);
let digit7 = digit6 % 10;
let digit8 = digit6 / 10;
digit8 = parseInt (digit8);
let lastDigit = digit8 %10;
console.log(lastDigit, digit7, digit5, thirdDigit, firstDigit);




