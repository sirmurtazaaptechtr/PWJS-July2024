const d1 = document.getElementById('d1');
const tab = document.getElementById('tab');
const st = document.getElementById('st');
const end = document.getElementById('end');
const tableBox = document.getElementById('tableBox');

for(let i = 6; i <= 5; i++) {
    d1.innerHTML += `<p>${i}</p>`;
}

let i = 6;
while(i <= 5) {
    d1.innerHTML += `<p>${i}</p>`;
    i++;
}

i = 6;
do {
    d1.innerHTML += `<p>${i}</p>`;
    i++;
}while(i <= 5);

// functions

// function definations
function myFun() {
    console.log("Hi Ahsan");
}

function myFun2(name) {
    console.log(`Hi ${name}`);
}

function myFun3(num1,num2) {
    return num1+num2;
}

// function calls
myFun();
myFun2("Touseeq");
myFun2("Hayan");
myFun2("Hussain");
let ans = myFun3(5,12);
console.log(ans);
console.log(myFun3(12,14));

function dispTable () {
    let tableNumber = tab.value;
    let startNumber = st.value;
    let endNumber = end.value;
    tableBox.innerHTML = `<p>Displaying table of ${tableNumber}</p>`;
    for(let cnt = startNumber;cnt <= endNumber;cnt++) {
        tableBox.innerHTML += `<p>${tableNumber} X ${cnt} = ${tableNumber*cnt}</p>`;
    }
}

//dispTable();