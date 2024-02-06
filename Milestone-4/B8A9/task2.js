function matchFinder(string1, string2){
    // Validation 
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        let errorMsg = 'Please provide two string';
        return errorMsg;
    }



 if(string1.includes(string2)){
    return true;
 } else{
    return false;
 }
}

let  matchFind = matchFinder('John Doe', 'ohn');
console.log(matchFind)

matchFind = matchFinder('Javascript', 'Code');
console.log(matchFind)

matchFind = matchFinder('Peter Parker', 'Pen');
console.log(matchFind)

matchFind = matchFinder('Peter Parker', 'pet');
console.log(matchFind)

matchFind = matchFinder(45, 'pet');
console.log(matchFind)

matchFind = matchFinder('Peter Parker', 15);
console.log(matchFind)