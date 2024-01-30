/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


// for(let i =2; i<=100; i++){
//    let sr = Math.sqrt(i);
//    let isPerfectSr = Number.isInteger(sr);
//     if(isPerfectSr === true){
//         break;
//     }
//     console.log(i)
// }

for(let i=2; i<=100; i++){
    let sqr = i*i;
    if(sqr <=100){
        console.log(`First square number encountered: ${sqr}`);

        break;
    }
    console.log(i)
}