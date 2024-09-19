const num = document.getElementById('num');
const chkBtn = document.getElementById('chkBtn');
const ansBox = document.getElementById('ansBox');
function isEven(number) {
    let flag = true;
    if(number%2 == 0){
        flag = true;
    }else {
        flag = false;
    }
    return flag;
}
function isPrime(number) {
    let flag = true;
    for(let dvr=2;dvr < number;dvr++) {
        if(number%dvr == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
chkBtn.addEventListener("click",function () {
    let number = num.value;
    if(isEven(number)) {
        ansBox.innerHTML = `<p>${number} is Even</p>`;
    }else{
        ansBox.innerHTML = `<p>${number} is Odd</p>`;
    }
    if(isPrime(number)) {
        ansBox.innerHTML += `<p>${number} is PRIME</p>`;
    }else{
        ansBox.innerHTML += `<p>${number} is NOT PRIME</p>`;
    }
});