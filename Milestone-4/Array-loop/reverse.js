const numbers = [12, 23, 3, 23, 4, 5, 32, 23, 53, 56, 7, 89, 76];
// let reverse = numbers.reverse();
// console.log(reverse)


// let rev = [];
// for(let num of numbers){
//     rev.unshift(num);
// }
// console.log(rev)


let rev = [];
for(let i= 0; i<numbers.length; i++){
    rev.unshift(numbers[i]);
}
console.log(rev)