const km = parseInt(prompt("Km da percorrere"));
const age = parseInt(prompt("Età del passeggero"));
let message;
let price;
let discount;
let valid = 0;

if(isNaN(km)){
  message = "Inserisci un numero di km valido";
  alert(message);
}else if(isNaN(age)){
  message = "inserisci un' età valida";
  alert(message);
}else{
  valid = 1;
}

if(valid){
  
  //definizione dello sconto
  if(age < 18 ) {
    discount = 20;
  }else if (age >= 65){
    discount = 40;
  }else {
    discount = 0;
  }

  //calcolo del prezzo 

  price = km * 0.21;
  price = price - (price/100 * discount);
  price = price.toFixed(2);

  document.getElementById("km-output").innerHTML = km;
  document.getElementById("age-output").innerHTML = age;
  document.getElementById("discount-output").innerHTML = discount;
  document.getElementById("price-output").innerHTML = price;


}



console.log(message); 
console.log(age);
console.log(km);
console.log(discount);
console.log(price);

