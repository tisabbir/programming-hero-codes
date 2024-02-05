
const height = [75,56,65,65,75,84,78,98,85,15,24,36,45];
// Tallest person finding from the array

function tallFinder(numArr){
    let maxHeight = numArr[0];
    for(let num of numArr){
        if(num>maxHeight){
            maxHeight = num;
        }
    }
    return maxHeight;
}

const Tallest = tallFinder(height);
console.log(Tallest, 'is the tallest height')


// Smallest Person finding from the array


