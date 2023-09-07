const km = parseInt(prompt("Km da percorrere"));
const age = parseInt(prompt("Età del passeggero"));
let message;
let price;
let discount;
let valid = 0;

if(isNaN(km)){
  message = "Inserisci un numero di km valido";
}else if(isNaN(age)){
  message = "inserisci un' età valida";
}else{
  valid = 1;
}



console.log(message); 
console.log(age);
console.log(km);

