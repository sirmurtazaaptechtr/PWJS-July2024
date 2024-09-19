const tabNum = document.getElementById('tabNum');
const stNum = document.getElementById('stNum');
const edNum = document.getElementById('edNum');
const showBtn = document.getElementById('showBtn');
const tableBox = document.getElementById('tableBox');

showBtn.addEventListener("click",function () {
    let tab = Number(tabNum.value);
    let st = Number(stNum.value);
    let ed = Number(edNum.value);
    
    tableBox.innerHTML = `<p>Displaying table of ${tab} from ${st} to ${ed}</p>`;
    if(st < ed) {
        for(let cnt = st; cnt <= ed; cnt++) {
            tableBox.innerHTML += `<p>${tab} X ${cnt} = ${tab*cnt}</p>`;
        }
    }else {
        for(let cnt = st; cnt >= ed; cnt--) {
            tableBox.innerHTML += `<p>${tab} X ${cnt} = ${tab*cnt}</p>`;
        }
    }

});

