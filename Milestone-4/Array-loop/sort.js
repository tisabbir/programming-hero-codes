const numbers = [12, 23, 3, 23, 4, 5, 32, 23, 53, 56, 7, 89, 76];

let modified = numbers.sort(function(a,b){return b-a});
// modified = modified.reverse();

console.log(modified)
modified = numbers.sort(function(a,b){return a-b});
console.log(modified)