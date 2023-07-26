let a = parseInt(prompt(`enter your number:`));
let b = parseInt(prompt(`enter your number:`));

if(b%a==0){
    console.log(`${a} є дільником числа ${b}`);

} else{
    console.log(`${a} не є дільником`);
}

if (a%b==0){
   console.log(`${b} є дільником числа ${a}`);
} else{
    console.log(`${b} не є дільником`);
}