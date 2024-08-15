// Conditional Statements

let obtMarks = 53;
let maxMarks = 75;

let percentage = Math.round(obtMarks/maxMarks * 100);

if(percentage >= 40) {
    console.log(`You have passed the exam with ${percentage}% marks`);
}else {
    console.log(`You have Faild the exam with ${percentage}% marks`);
}

if(percentage >= 80) {
    console.log(`Grade : A+`);
}else if(percentage >= 70) {
    console.log(`Grade : A`);
}else if(percentage >= 60) {
    console.log(`Grade : B`);
}else if(percentage >= 50) {
    console.log(`Grade : C`);
}else if(percentage >= 40) {
    console.log(`Grade : D`);
}else {
    console.log(`Grade : F`);
}

let op = '**';

let num1 = 15;
let num2 = 5;

switch(op) {
    case '+' :
        console.log(`${num1} + ${num2} = ${num1+num2}`);
    break;
    case '-' :
        console.log(`${num1} - ${num2} = ${num1-num2}`);
    break;
    case '*' :
        console.log(`${num1} * ${num2} = ${num1*num2}`);
    break;
    case '/' :
        console.log(`${num1} / ${num2} = ${num1/num2}`);
    break;
    default:
        console.log("Invalid Operator!");
    break;
}