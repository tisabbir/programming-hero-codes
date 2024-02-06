function cubeNumber(number){
    if(typeof number !=='number'){
        let errorMsg = 'Please provide a valid number please'
        return errorMsg;
    } else{
        const cube = number**3;
    return cube;
    }
    
}

const cubeOfTheNumber = cubeNumber('anis');

console.log(cubeOfTheNumber)