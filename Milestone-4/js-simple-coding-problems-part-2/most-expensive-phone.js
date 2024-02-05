const phonesDetails = [
    {name : 'samsung' , price: 45000, camera : '50MP' },
    {name : 'iphone' , price: 145000, camera : '50MP' },
    {name : 'xiami' , price: 15000, camera : '50MP' },
    {name : 'itel' , price: 13000, camera : '50MP' },
    {name : 'oppo' , price: 23000, camera : '50MP' }
]

function mostExpensivePhoneFinder(phones){
   let max = phones[0];
    for(let phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    
   return max;
}

const theMostExpensivePhone = mostExpensivePhoneFinder(phonesDetails);
console.log(theMostExpensivePhone)