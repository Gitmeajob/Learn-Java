//document.getElementById("count-el").innerText = 0;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let num = document.getElementById("incremented").value;
let count = parseFloat(incremented);


 function increase() {
    if (count >= 250) {
        alert('The train is full.')
    } else {
        countEl.textContent = count 
        
    }
 }

 let numLess = document.getElementById("count-el");

function decrease() {
    if(count <= 0) {
        alert("You can't do that!");
    } else {
        numLess.textContent = -count;
    }
 }

 function save() {
    if (count <= 0) {
        alert('0 and negatives cannot board trains.');
    } else {
     let countstr = count + " - ";
     saveEl.textContent += countstr
     countEl.textContent = 0
     count = 0
    }
 }
