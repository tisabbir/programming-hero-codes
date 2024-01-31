const nam = 'Sabbir is a good men';

let reverse = '';

for(let letters of nam){
    // console.log(letters);
    reverse = letters + reverse;
}
// console.log(reverse)

// Method 2 of doing reverse
let arr = nam.split('');
// console.log(arr);

let rev = '';
for(let i = arr.length -1; i>=0; i--){
    // console.log(arr[i])
    rev = rev + arr[i];
}
console.log(rev)
