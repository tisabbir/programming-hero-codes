const person = {
    name : 'Sabbir',
    age : 23,
    education : {
        school : 'Thana Unnoyon',
        'High-School' : 'Rahmatpur',
        College : 'AB College',
        Courses : {
            academic : '10MS',
            business : 'Personal MBA',
            programming : 'PH'
        }
    }
}

console.log(person.education["Courses"]["programming"])