let sum = 0;
function arrayHandler (arr) {
    for(let i=0; i<arr.length ; i++){
        sum = sum + arr[i];
    }


    return sum;
 }
//  const arrCounter = arrayHandler([1,3,5,6,7])
 
//  console.log(arrCounter);


//  sum of even numbers of an array 

function evenNumberAdder (arr){
    let summ = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2===0){
            summ = summ + arr[i];
        }
    }
    console.log(summ)
}

evenNumberAdder([1,4,2,5,2,2,5,7]);