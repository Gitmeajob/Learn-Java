let hotBtn = false;
let coldBtn = false;
let teaBtn = true;
let freshBtn = true;

function sizeSelector() {
    let size = ['Tall', 'Grande', 'Venti'];
    let para = document.getElementById("size-el");
    para.innerHTML = size[Math.floor(Math.random() * size.length)];
}

function hotSelector() { 
    let hotDrink = ['Americano', 'Mocha', 'Cappuccino', 'Latte', 'Drip Coffee', 'Macchiato', 'Flat White', 'Tea',]
    let para = document.getElementById("hot-el");
    para.innerHTML = hotDrink[Math.floor(Math.random() * hotDrink.length)];
    coldBtn = true;
    teaBtn = true;
    freshBtn = true;
    cold.setAttribute('disabled', 'true');
    tea.setAttribute("disabled", "true");
    refresher.setAttribute("disabled", "true");
    teaUnlock();
}

function teaUnlock() {
    let para = document.getElementById("hot-el");
    if (para.innerText == "Tea") {
        tea.removeAttribute("disabled");
        teaBtn = false;
    }
}

function coldSelector() {
    let coldDrink = ['Frappuccino', 'Iced Americano', 'Iced Mocha', 'Iced Macchiato', 'Iced Latte', 'Cold Brew', 'Nitro Cold Brew','Shaken Espresso', 'Iced Tea', 'Lemonade', 'Refresher']
    let para = document.getElementById("cold-el")
    para.innerHTML = coldDrink[Math.floor(Math.random() * coldDrink.length )];
    hotBtn = true;
    teaBtn = true;
    freshBtn = true;
    hot.setAttribute('disabled', 'true');
    tea.setAttribute("disabled", "true");
    refresher.setAttribute("disabled", "true");
    refreshUnlock();
}

function refreshUnlock() {
    let para = document.getElementById("cold-el");
    if (para.innerText == "Refresher") {
        freshBtn = false;
        refresher.removeAttribute("disabled")
    }
}

function syrupSelector() {
    let syrup = ['Simple', 'Caramel', 'Chocolate', 'Brown Sugar', 'Vanilla', 'Hazelnut', 'Mocha', 'White Mocha'];
    let para = document.getElementById("syrup-el")
    para.innerHTML = syrup[Math.floor(Math.random() * syrup.length )];
}

function teaSelector() {
    let tea = ['Chai', 'Earl Grey', 'Royal English Breakfast', 'Clouds and Mist', 'Jade Cirtus Mint', 'Honey Citrus Mint', 'Mint Majesty', 'Peach Tranquility']
    let para = document.getElementById("tea-el");
    para.innerHTML = tea[Math.floor(Math.random() * tea.length)];
    hotBtn = true;
    coldBtn = true;
    freshBtn = true;
    cold.setAttribute('disabled', 'true');
    hot.setAttribute('disabled', 'true');
    refresher.setAttribute("disabled", "true");
}

function frehsSelector() {
    let fresh = ['Dragonfruit Mango', 'Strawberry Lemonade Acai', 'Paradise Drink', 'Pineapple Passionfriut', 'Pink Drink']
    let para = document.getElementById("refresher-el");
    para.innerHTML = fresh[Math.floor(Math.random() * fresh.length)]
    hotBtn = true;
    coldBtn = true;
    teaBtn = true;
    cold.setAttribute('disabled', 'true');
    hot.setAttribute('disabled', 'true');
    tea.setAttribute("disabled", "true");
}

function reset() {
    let para = document.getElementById("cold-el");
    let paraTwo = document.getElementById("hot-el");
    let paraThree = document.getElementById("size-el");
    let paraFour = document.getElementById("syrup-el");
    // let paraFive = document.getElementById("tea-el");
    // let paraSix = document.getElementById("refresher-el")
    para.innerText = "COLD DRINK";
    paraTwo.innerText = "HOT DRINK";
    paraThree.innerText = "SIZE";
    paraFour.innerText = "SYRUP"
    // paraFive.innerText = "TEA"
    // paraSix.innerText = "REFRESHER"
     for (let i = 0; i <= 1; i++) {
        let button = [hot,cold,tea,refresher];
        button[i].removeAttribute("disabled");
    }
}
   
//     if (hotBtn == true) {
//         hot.removeAttribute("disabled");
//         para.setAttribute("style", "padding:16px;");        
//     } else if (coldBtn == true) {
//         cold.removeAttribute("disabled");
//         paraTwo.setAttribute("style", "padding:16px;");
//     } else if (teaBtn == true) {
//         tea.removeAttribute("disabled");
//         paraFive.setAttribute("style", "padding:16px;")
//     } else if (freshBtn == true) {
//         paraSix.setAttribute("style", "padding:16px;")
//     }
// }

resett.addEventListener("click", reset);

