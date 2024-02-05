/**
 * <=100 --> no discount --> 100
 * 101 to 200 --> 90
 * 201 to 300 --> 70
 */

let priceOfFirst100 = 100;
let priceOfSecond100 = 90;
let priceOfMoreThan200 = 70;

function discountedPriceCalculator(quantity){

    let total;
    if(quantity<=100){
       total = priceOfFirst100 * quantity; 
       return total;
    } else if(quantity <=200){
        let first100 = 100 * priceOfFirst100;
        let remainingQuantity = quantity - 100;
        let second100 = remainingQuantity * priceOfSecond100;
        total = first100 + second100;
        return total;
    } else {

        let first100 = 100 * priceOfFirst100;
        let second100 = 100 * priceOfSecond100
        let remainingQuantity = quantity - 200;
        let remainingPrice = remainingQuantity * priceOfMoreThan200;
        total = first100 + second100 + remainingPrice;
        return total;
    }
}

const discountedPrice = discountedPriceCalculator(350);
console.log('you have to pay',discountedPrice);

console.log(typeof null)

const karim = null;
console.log(typeof karim)