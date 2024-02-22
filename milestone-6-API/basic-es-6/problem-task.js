const mutliplier = (a,b,c) => a*b*c;
// console.log(mutliplier(1,2,3))

const lines = `
I am a web developer.
I love to code.
I love to eat Biriyani.
`;
// console.log(lines)
const add  = (x,y=3) => x+y;

// console.log(add(2));

const friends = ['karim', 'rahim', 'mehedy', 'azizur', 'suhaib'];
const evenFriends = [];

const evenFriendsFinder = (friends) => {
    for(let friend of friends){
        if(friend.length%2===0){
            evenFriends.push(friend);
        }
    }
}
evenFriendsFinder(friends);
// console.log(evenFriends);

// Number handler 

const nums = [1,2,3,4];
const numberHandler = (arr) => {
    let sqrSum = 0;
    let count = 0;
for(let num of arr) {
    const sqr = num*num;
    sqrSum = sqrSum + sqr;
    count++;
}
    let avg = sqrSum / count;
    return avg;
}

const avg = numberHandler(nums);

// console.log(avg);
const gums = [7,8,9];
const twoArrHandler = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    return Math.max(...newArr);
}


const finalResult = twoArrHandler(nums, gums);

console.log(finalResult);