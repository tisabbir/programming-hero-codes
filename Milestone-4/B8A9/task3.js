function sortMaker(arr){
    if(arr[0]>=0 && arr[1]>=0){
        if(arr[0]>arr[1]){
            let sortedArr = [arr[0],arr[1]];
            return sortedArr;
        } else if(arr[0]<arr[1]){
            sortedArr = [arr[1], arr[0]];
            return sortedArr;
        } else {
            let equalMsg = 'equal';
            return equalMsg;
        }

    } else{
        let invalidMsg = 'invalid input';
        return invalidMsg;
    }

}

const array = [4,-2];

const sortingArray = sortMaker(array);
console.log(sortingArray);
