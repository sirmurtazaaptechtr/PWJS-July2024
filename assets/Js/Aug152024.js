const d1 = document.getElementById('d1');
const studentList = document.getElementById('studentList');
const studentList2 = document.getElementById('studentList2');

// d1.innerHTML = `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;
// d1.innerHTML += `<p>My name is Syed Hussain</p>`;

for(let cnt=1;cnt<=10;cnt++) {
    d1.innerHTML += `<p>${cnt}. My name is Syed Hussain</p>`;
}

students = [
    {
        name:"Azib",
        age:20,
        siblings:5,
        salary:30000,
        gender:"male"
    },
    {name:"Rayan", age:18, siblings:4, salary:1330000, gender:"male"},
    {name:"Ashar", age:10, siblings:2, salary:1305000, gender:"male"},
    {name:"Ansharah", age:20, siblings:2, salary:1505000, gender:"female"},
    {name:"Ahsan", age:24, siblings:3, salary:1555000, gender:"male"},
    {name:"Ahmed", age:21, siblings:3, salary:1755000, gender:"male"},
    {name:"Nazar", age:20, siblings:3, salary:2755000, gender:"male"},
    {name:"Abdul Rafay", age:17, siblings:4, salary:3755000, gender:"male"},
    {name:"Sami", age:25, siblings:5, salary:13755000, gender:"male"},
    {name:"Hussain", age:14, siblings:1, salary:155000, gender:"male"},
    {name:"Junaid", age:15, siblings:2, salary:175000, gender:"male"},
    {name:"Hussain Khanani", age:17, siblings:2, salary:175000, gender:"male"}
];

console.log(students);
d1.innerHTML += `<h2>Messages ${students.length}</h2>`;

for(let index=0;index<students.length;index++) {
    studentList.innerHTML += `<li>Dear ${students[index].name}, you are ${students[index].age} years old ${students[index].gender}. Your current Salary is USD ${students[index].salary}/=. You have ${students[index].siblings} brothers/sisters.</li>`;
}

students.forEach(function (student) {
    studentList2.innerHTML += `<li>Dear ${student.name}, you are ${student.age} years old ${student.gender}. Your current salary is USD${student.salary}/= and you have ${student.siblings} siblings.</li>`;
});