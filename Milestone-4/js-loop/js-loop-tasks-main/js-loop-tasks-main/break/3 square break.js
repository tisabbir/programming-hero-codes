/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for(let i=5; i<=100; i++){
    let sqrt = Math.sqrt(i);
    console.log(i);
    // console.log(sqrt);
    let isPerfectSquare = Number.isInteger(sqrt);
    if(isPerfectSquare===true){
        break;
    }
    
}


// let sqrt = Math.sqrt(16);
// console.log(sqrt)

// isPerfectSq = Number.isInteger(sqrt)
// console.log(isPerfectSq);























// for(let i =3; i<=100; i++){
//    let sr = Math.sqrt(i);
//    let isPerfectSr = Number.isInteger(sr);
//     if(isPerfectSr === true){
//         break;
//     }
//     console.log(i)
// }







// for(let i=2; i<=100; i++){
//     let sqrNum = i*i;
//     console.log(i);
//     if(sqrNum <=100){
//         console.log(`First square number encountered: ${sqrNum}`);
//         break;
//     }
    
// }