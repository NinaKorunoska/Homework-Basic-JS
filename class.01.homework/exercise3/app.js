let phonePrice = 119.95;
let tax = 5;

// ---> First calculate phone tax sum
let phoneTax = (tax / 100) * phonePrice;
console.log(phoneTax);

// ---> Then calculate the phone price + the tax sum
let phoneTotal = phonePrice + phoneTax;
console.log(phoneTotal);

// ---> Multiply by the number of phones 
let totalPrice = phoneTotal * 30;
console.log(totalPrice)

//----------------------------------------------------

let totalPrice2 = (phonePrice + ((tax / 100) * phonePrice)) * 30;
console.log(totalPrice2)  

console.log(totalPrice2.toFixed(1)) // go vraka kako string i go zaokruzuva na decimali kolku ke zadades