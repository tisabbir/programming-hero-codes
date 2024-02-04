// kothin method vhai re vhai

function leapDetector (year){
    if(year%100!==0 && year%4===0){
        console.log(year, 'is a leap year');
    }
    else if(year%100===0 && year%400===0){
        console.log(year, 'is a leap year')
    }
    else{
        console.log(year, 'is not a leap year')
    }
}
leapDetector(2116)