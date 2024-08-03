//Where we can see JavaScript Response
console.log("Welcome to JavaScript");
console.warn("This is a warning");
console.error("This is an error");

alert("Welcome to JS");
confirm("Do you want to continue?");
prompt("What is you Full Name");

document.write("Welcome to JS");
document.getElementById('myBox').innerHTML = `<h2>This HTML is being generated by JavaScript...</h2>`;

// variables
// function scope
data = 15;
console.log(data);

var x = 2.14;
console.log(x);

// block scope
let y; // declearation
y = "Ali Raza"; // initilization
y = "Hussain";
console.log(y);

//const z; //wrong declearation must be initilized of constant variable 
//z = true; // wrong can not re-initilize constant variable
const z = false;
console.log(z);

// Datatypes

// Number.
// String.
// Boolean.
// Null.
// Undefined.
// BigInt.
// Symbol.
// Object.

let myVar;
console.log(myVar + " is " + typeof(myVar));
console.log(`${myVar} is ${typeof(myVar)}`);

myVar = 2;
console.log(`${myVar} is ${typeof(myVar)}`);

myVar = 3.14;
console.log(`${myVar} is ${typeof(myVar)}`);

myVar = "Rafay Shahid";
myVar = 'Rayan Shahid';
console.log(`${myVar} is ${typeof(myVar)}`);

myVar = true;
console.log(`${myVar} is ${typeof(myVar)}`);

myVar = null;
console.log(`${myVar} is ${typeof(myVar)}`);

myVar = ["Rafay Shahid", 'Rayan Shahid', "Syeda Ansharah", "Faizan Ali", "Hussain Khanani"];
console.log(`${myVar} is ${typeof(myVar)}`);
console.log(`${myVar[0]} is ${typeof(myVar[0])}`);

myVar = {name:"Rafay Shahid",dob:"05-Nov-2007",salary:1250306};
console.log(`${myVar} is ${typeof(myVar)}`);
console.log(`${myVar.name} is ${typeof(myVar.name)}`);
console.log(`${myVar.dob} is ${typeof(myVar.dob)}`);
console.log(`${myVar.salary} is ${typeof(myVar.salary)}`);


myVar =[
    {name:"Rafay Shahid",dob:"05-Nov-2007",salary:1250306}, 
    {name:"Rayan Shahid",dob:"07-Aug-2006",salary:5250306}, 
    {name:"Syeda Ansharah",dob:"11-Mar-2004",salary:15250306}
];
console.log(`${myVar} is ${typeof(myVar)}`);
console.log(`${myVar[2].name} is ${typeof(myVar[2].name)}`);
console.log(`${myVar[2].dob} is ${typeof(myVar[2].dob)}`);
console.log(`${myVar[2].salary} is ${typeof(myVar[2].salary)}`);