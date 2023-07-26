let num = parseInt(prompt(`enter your number:`));

if (num%2==0){
  console.log(`${num} є парним числом`);
  console.log( `останнє число ${num%10}`);
} else{
    console.log(`${num} не є парним числом`);
    console.log( `останнє число ${num%10}`);
}
