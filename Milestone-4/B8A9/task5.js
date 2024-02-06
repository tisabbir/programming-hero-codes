function canPay(changeArray, totalDue){
    if(changeArray.length===0){
        let invalidMsg = 'Please provide how much money you have in the array'
        return invalidMsg;
    }

    let totalTK = 0;
    for(let poisa of changeArray){
        totalTK = totalTK + poisa;
    }
    if(totalTK>=totalDue){
        return true;
    } else { return false};
}



const canBuy =  canPay([1,5,5],10);
console.log(canBuy);