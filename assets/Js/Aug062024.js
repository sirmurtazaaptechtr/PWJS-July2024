//JavaScript Arithmetic Operators

let num1 = 15;
let num2 = 5;

let res = num1 + num2;

console.log(res);

let age = 18;

console.log("Ali is "+age+" years old.");
console.log('Ali is '+age+' years old.');
console.log(`Ali is ${age} years old`)

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);


res ++;// res = res + 1; // post increment
console.log(res);
++ res;// res = res + 1; // pre increment
console.log(res);

let x = 13 + res++;
console.log(x);

res --;// res = res - 1; // post decrement
console.log(res);
-- res;// res = res - 1; // pre decrement
console.log(res);

// Assignment Operators
let y = 12;

console.log(`(x,y) --> (${x},${y})`);

x = y;
console.log(`(x,y) --> (${x},${y})`);

x += y;// x = x + y;
console.log(`(x,y) --> (${x},${y})`);

x -= y;// x = x - y;
console.log(`(x,y) --> (${x},${y})`);

// JavaScript Comparison Operators

console.log(`${x} > ${y} = ${x > y}`);
console.log(`${x} < ${y} = ${x < y}`);
console.log(`${x} == ${y} = ${x == y}`);
console.log(`${x} === ${y} = ${x === y}`);
console.log(`${x} <= ${y} = ${x <= y}`);
console.log(`${x} >= ${y} = ${x >= y}`);
console.log(`${x} != ${y} = ${x != y}`);
console.log(`${x} !== ${y} = ${x !== y}`);

// JavaScript Logical Operators

console.log(`T && T = ${true && true}`);
console.log(`T && F = ${true && false}`);
console.log(`F && T = ${false && true}`);
console.log(`F && F = ${false && false}`);

console.log(`T || T = ${true || true}`);
console.log(`T || F = ${true || false}`);
console.log(`F || T = ${false || true}`);
console.log(`F || F = ${false || false}`);

console.log(`!T = ${!true}`);
console.log(`!F = ${!false}`);

// JavaScript String Addition

let firstName = "Ahmed";
let lastName = "Rajwani";

console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

let str1 = "2";
let str2 = "3";

console.log(str1+str2);