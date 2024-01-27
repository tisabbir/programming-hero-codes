/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = -85;

if(score>=0 && score < 60) {
    console.log("You are failed")
}
else if(score>=60 && score<70) {
    console.log("You got D")

} else if (score>=70 && score<80) {
    console.log("You got C")
}
else if (score>=80 && score<90) {
    console.log("You got B")

}
else if (score>=90 && score<=100) {
    console.log("You got A")
    
}
else {
    console.log("You escaped the matrix")

}