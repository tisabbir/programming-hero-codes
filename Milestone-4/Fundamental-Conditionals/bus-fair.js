/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 45 ;

let ticketFee = 800;

if(age<10){
    ticketFee = 0;
} else{
    
    if(age<30){
        ticketFee = ticketFee * 50/100;
    } else if(age<60){
        ticketFee = ticketFee;
    } else{
        discount =  ticketFee * 15/100;
        ticketFee = ticketFee - discount;
    }
}

console.log(ticketFee)