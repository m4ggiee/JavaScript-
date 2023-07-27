let num1 = parseInt(prompt(`Введіть відстань у км:`));
let num2 = parseInt(prompt(`Введіть відстань у футах:`));

let n1 = num1*1000;
let n2 = num2*0.305;

if(n1>n2){
  console.log(`${num2} меньша відстань`);
}
else{
    console.log(`${num1} меньша відстань`);
}