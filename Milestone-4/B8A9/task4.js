function findAddress(obj){

    let output = obj.street + "," + obj.house + "," + obj.society;
    
   let  outputToArr = output.split(',');

   console.log(outputToArr)
    for(let section of outputToArr){
        if(section === 'undefined'){
            section = '__';
        }
    }
    return outputToArr;
}

const object = {
    street : 10,
    // house : '15A',
    society : 'Earth Perfect'
}

const addFind = findAddress(object);
console.log(addFind);