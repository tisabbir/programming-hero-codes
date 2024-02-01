const person = {
    name : 'Karim',
    father : 'Rahim',
    mother : 'Khaleda',
    age : 45,
    profession : 'AI automation agency owner'
}

for(let props in person){
    console.log(props + " : " + person[props])
}