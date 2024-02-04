function oddAvg(arr){
    let total = 0;
        let count = 0;
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i])
        
        if(arr[i]%2!==0){
            total = total + arr[i];
            count = count + 1;
        }
    }
    let avg = total / count;
    return avg;
}

const oddAvgCal = oddAvg([1,2,3,4,5,6,7,8,9,10]);

 console.log(oddAvgCal) 