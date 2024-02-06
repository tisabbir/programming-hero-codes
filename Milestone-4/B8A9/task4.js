function findAddress(obj){

    let hasStreet = obj.hasOwnProperty('street');
    let hasHouse = obj.hasOwnProperty('house');
    let hasSociety = obj.hasOwnProperty('society');

    if(hasStreet === false){
        obj.street = '__'
    }
    if(hasHouse === false){
        obj.house = '__'
    }
    if(hasSociety === false){
        obj.society = '__'
    }


    let output = obj.street + "," + obj.house + "," + obj.society;
    
    return output;
}

const object = {
    street : 10,
    house : '15A',
    society : 'Earth Perfect'
}

const addFind = findAddress(object);
console.log(addFind);