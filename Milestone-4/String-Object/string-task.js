let str = 'Ki ache jibone? Hard work kore, TawAkkul kore, jannah niccist korai to sofolota, ki kon vhAi?';

// Task 1

let count = 0;
for(let letters of str) {
    if(letters==="a"){
        count++;
    }
}
// console.log(count)

// Task two and three

let count2 = 0;
let str2 = str.toLowerCase();
for(let letters of str2) {
    if(letters==="a"){
        count2++;
    } else if(letters==="e"){
        count2++;
    } else if(letters==="i"){
        count2++;
    } else if(letters==="o"){
        count2++;
    } else if(letters==="u"){
        count2++;
    } else{
        //nothing
    }
}
// console.log(count2)


//Task 4
let sentenceX = 'Examine Extra Textile NeXus Mix Complex Next Tax Apex Fix Context Maximum Excel Box HeX Mix Example Next IndeX Oxidize';

let spllt = sentenceX.replaceAll('x','y');
let final = spllt.replaceAll('X','Y')
// console.log(final)


// Task 5

let sentence = 'what is the most important thing in life?'
let words = sentence.split(' ');

for(let i =0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

let modifiedSentence = words.join(' ')
console.log(modifiedSentence)
