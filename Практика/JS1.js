let num1 = parseInt(prompt(`enter your number:`));
let num2 = parseInt(prompt(`enter your number:`));

if(num1>num2){
    console.log(`${num1} більше`);
} else if (num2>num1){
    console.log(`${num2} більше`);
} else{
    console.log(`${num1} = ${num2}`);
}