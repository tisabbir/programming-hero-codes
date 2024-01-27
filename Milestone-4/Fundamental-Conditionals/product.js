let price = 2000;

if(price >= 5000) {
    let discount = price * 10/100;
    let payAmount = price - discount;
    console.log ( 'You have to pay : ' + payAmount)
}
else if(price >=2500) {
    let discount = price * 5/100;
    let payAmount = price - discount;
    console.log ( 'You have to pay : ' + payAmount)
}
else {
    console.log ( 'You have to pay : ' + price)
}