//document.getElementById("count-el").innerText = 0;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0

 function increase() {
     count += 1
    countEl.textContent = count
 }

 let numLess = document.getElementById("count-el");

function decrease() {
    count -= 1
    numLess.textContent = count
 }
 function save() {
     let countstr = count + " - "
     saveEl.textContent += countstr
     countEl.textContent = 0
     count = 0

     console.log(count)
 }
