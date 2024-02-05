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
        total = priceOfSecond100 * quantity;
        return total;
    } else {
        total = priceOfMoreThan200 * quantity;
        return total;
    }
}

const discountedPrice = discountedPriceCalculator(201);
console.log('you have to pay',discountedPrice);