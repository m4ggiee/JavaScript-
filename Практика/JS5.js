let num = parseInt(prompt(`Введіть двозначне число:`));

let lastNum = num%10;

let firstDigit = num % 10;
let secondDigit = num / 10;
secondDigit = parseInt (secondDigit);
let firstNum = secondDigit % 10;


if(firstNum>lastNum){
    console.log(`${firstNum}>${lastNum}`);
} else if(lastNum>firstNum){
    console.log(`${lastNum}>${firstNum}`);
} else{
    console.log(`${lastNum}=${firstNum}`);
}
