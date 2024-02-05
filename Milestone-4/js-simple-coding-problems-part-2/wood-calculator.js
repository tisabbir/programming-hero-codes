const oneChairRequire = 5;
const oneTableRequire = 9;
const oneBedRequire = 20;

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){

    let woodForAllChair = oneChairRequire * chairQuantity;
    let woodForAllTable = oneTableRequire * tableQuantity;
    let woodForAllBed = oneBedRequire * bedQuantity;

    let totalWoodRequired = woodForAllChair + woodForAllTable + woodForAllBed;
    return totalWoodRequired;
}

let totalWoodNeeded =  woodCalculator(2,5,10);
console.log(totalWoodNeeded)