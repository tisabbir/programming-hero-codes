/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 65;
let friendsScore = 85;
    if(myScore>=80) {
        if (friendsScore>=80){ 
            console.log("go to lunch")
        } else if(friendsScore<80 && friendsScore>=60) {
            console.log('Good Luck Next time')
        } else if (friendsScore<60 && friendsScore>=40){
            console.log('keep your friends msg unseen')
        } else { console.log('Block your friend')}
    }
    else{
     console.log('go to home and sleep and act sad')
    }