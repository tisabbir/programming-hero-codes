function picnicBudget(participantQuantity){
    let picnicCostFirst100 = 5000;
    let picnicCostSecond100 = 4000;
    let picnicCostMoreThan200 = 3000;
    let picnicTotalCost = 0;
    if(participantQuantity<=100){
        picnicTotalCost = participantQuantity * picnicCostFirst100;
        return picnicTotalCost;
    } else if(participantQuantity <=200){
        let remainingAfter100 = participantQuantity - 100;
        picnicTotalCost = (picnicCostFirst100 * 100) + (remainingAfter100 * picnicCostSecond100);

        return picnicTotalCost;

    } else {
        
        let remainingAfter200 = participantQuantity - 200;

        picnicTotalCost = (picnicCostFirst100 * 100) + (picnicCostSecond100 * 100) + (remainingAfter200* picnicCostMoreThan200);
        return picnicTotalCost;

    }
}

const budgetPlanner = picnicBudget(300);
console.log(budgetPlanner);