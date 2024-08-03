// Datatypes

//Undefined

let data;

console.log(data + " is " + typeof(data));

data = null;
console.log(data + " is " + typeof(data));

data = 3;
console.log(data + " is " + typeof(data));

data = 2.14;
console.log(data + " is " + typeof(data));

data = "Hayan";
console.log(data + " is " + typeof(data));

data = "123";
console.log(data + " is " + typeof(data));

data = 'Ali Raza';
console.log(data + " is " + typeof(data));

data = `Ashar`;
console.log(data + " is " + typeof(data));
console.log(`${data} is ${typeof(data)}`);

data = ['Azib',20,5,30000];
console.log(data);
console.log(`${data} is ${typeof(data)}`);

console.log(data[0]);

console.log(`${data[0]} is ${data[1]} years old. He has ${data[2]} siblings and his salary is PKR${data[3]}/=`);

data = {name:"Azib", age:20, siblings:5, salary:30000, gender:"male"};
console.log(data);

console.log(`${data.name} is ${data.age} years old ${data.gender}. He has ${data.siblings} siblings and his salary is PKR${data.salary}/=`);

data = [
    {
        name:"Azib",
        age:20,
        siblings:5,
        salary:30000,
        gender:"male"
    },
    {name:"Hayan", age:25, siblings:3, salary:130000, gender:"male"},
    {name:"Ashar", age:10, siblings:2, salary:1305000, gender:"male"},
    {name:"Ansharah", age:20, siblings:2, salary:1505000, gender:"female"}
];

console.log(data);
console.log(`${data[3].name} is ${data[3].age} years old ${data[3].gender}. He has ${data[3].siblings} siblings and his salary is PKR${data[3].salary}/=`);

console.log(typeof(data));

let textData = JSON.stringify(data);
console.log(textData);
console.log(typeof(textData));