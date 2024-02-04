const jim = 100;
const tim  = 39;

const kim = 201;
const lim = 85;

if(jim > tim){
    // console.log('jim is greater than tim')
} 
else {
    
    // console.log('tim is greater than jim')
}


// With Fn

function compare(num1, num2){
    if(num1>num2){
        console.log('num1 is bigger')
        return num1;
    } else {
        console.log('num2 is bigger')
        return num2;
    }
}
const max1 = compare(tim, jim)
const max2 = compare(kim,lim);

const ultimateMax = compare(max1,max2)