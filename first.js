
let saveEl = document.getElementById("save-el");
let numcount = document.getElementById("number")


let count = 0;

function incre(){
    count++;
    numcount.innerText = count;
}


function savecount(){
    saveEl.textContent += count + " - ";
    numcount.innerText = 0;
    count = 0;
}






