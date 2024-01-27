/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 500;
let cokePrice = 30;

if(burgerPrice >= 500) {
  cokePrice = 0;
    let totalPrice = burgerPrice + cokePrice;
    console.log("you have to pay : " + totalPrice);
}
else {
    cokePrice = cokePrice;
    let totalPrice = burgerPrice + cokePrice;
    console.log("you have to pay : " + totalPrice);
}