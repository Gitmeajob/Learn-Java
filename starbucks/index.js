let hotBtn = false;
let coldBtn = false;
let teaBtn = true;
let freshBtn = true;
let syrupBtn = false;
let lemonBtn = false;
let bakeryBtn = false;
let breakfastBtn = false;
let foodBtn = false;
let drinkBtn = false;

let messageEl = document.getElementById("message-el")

function sizeSelector() {
    let size = ['Tall', 'Grande', 'Venti', 'Trenta'];
    let para = document.getElementById("size-el");
    para.innerHTML = size[Math.floor(Math.random() * size.length)];
    lockedDrink.size = para.innerHTML;
}

function hotSelector() { 
    let hotDrink = ['Americano', 'Mocha', 'Cappuccino', 'Latte', 'Drip Coffee', 'Macchiato', 'Flat White', 'Tea',]
    let para = document.getElementById("hot-el");
    para.innerHTML = hotDrink[Math.floor(Math.random() * hotDrink.length)]; 
    coldBtn = true;
    teaBtn = true;
    freshBtn = true;
    lemonBtn = true;
    lockedDrink.drink = para.innerHTML;
    sizeSelector()
    //syrupSelector()
    cold.setAttribute('disabled', 'true');
    tea.setAttribute("disabled", "true");
    refresher.setAttribute("disabled", "true");
    lemon.setAttribute("disabled", "true");
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
    sizeSelector()
    syrupSelector()
    hot.setAttribute('disabled', 'true');
    tea.setAttribute("disabled", "true");
    refresher.setAttribute("disabled", "true");
    lockedDrink.drink = para.innerHTML;
    refreshUnlock();
    lemonUnlock()
}

function refreshUnlock() {
    let para = document.getElementById("cold-el");
    let pararTwo = document.getElementById("lemon-el");
    if (para.innerText == "Refresher" || pararTwo.innerText == "Refresher") {
        freshBtn = false;
        refresher.removeAttribute("disabled")
        
    }
}

function syrupSelector() {
    let syrup = ['Simple', 'Caramel', 'Chocolate', 'Brown Sugar', 'Vanilla', 'Hazelnut', 'Mocha', 'White Mocha', 'None'];
    let para = document.getElementById("syrup-el")
    para.innerHTML = syrup[Math.floor(Math.random() * syrup.length )];
    lockedDrink.syrup = para.innerHTML;
}

function teaSelector() {
    let tea = ['Chai Tea', 'Earl Grey Tea', 'Royal English Breakfast Tea', 'Clouds and Mist Tea', 'Jade Cirtus Mint Tea', 'Honey Citrus Mint Tea', 'Mint Majesty Tea', 'Peach Tranquility Tea']
    let para = document.getElementById("tea-el");
    para.innerHTML = tea[Math.floor(Math.random() * tea.length)];
    hotBtn = true;
    coldBtn = true;
    freshBtn = true;
    syrupBtn = true;
    cold.setAttribute('disabled', 'true');
    hot.setAttribute('disabled', 'true');
    refresher.setAttribute("disabled", "true");
    syrup.setAttribute("disabled", "true");
    let Sugar = document.getElementById("syrup-el");
    Sugar.innerText = "SYRUP"
    lockedDrink.drink = para.innerHTML;
}

function frehsSelector() {
    let fresh = ['Dragonfruit Mango', 'Strawberry Lemonade Acai', 'Paradise Drink', 'Pineapple Passionfriut', 'Pink Drink']
    let para = document.getElementById("refresher-el");
    para.innerHTML = fresh[Math.floor(Math.random() * fresh.length)]
    hotBtn = true;
    coldBtn = true;
    teaBtn = true;
    syrupBtn = true;
    cold.setAttribute('disabled', 'true');
    hot.setAttribute('disabled', 'true');
    tea.setAttribute("disabled", "true");
    syrup.setAttribute("disabled", "true");
    let Sugar = document.getElementById("syrup-el");
    Sugar.innerText = "SYRUP"
    lockedDrink.syrup = "";
    lockedDrink.drink = para.innerHTML;
}
function lemonUnlock() {
    let para = document.getElementById("cold-el");
    if (para.innerText == "Lemonade") {
        lemonBtn = false;
        lemon.removeAttribute("disabled")
    }
}

function lemonType() {
    let lemon = ['Classic', 'Passion Tea', 'Mango Dragonfruit Lemonade', 'Refresher'];
    let para = document.getElementById("lemon-el");
    para.innerHTML = lemon[Math.floor(Math.random() * lemon.length)]
    coldBtn = true;
    hotBtn = true;
    syrupBtn = true;
    cold.setAttribute('disabled', 'true');
    hot.setAttribute('disabled', 'true');
    syrup.setAttribute("disabled", "true");
    lockedDrink.syrup = "";
    lockedDrink.drink = para.innerHTML;
    refreshUnlock()
}

function hotFoodSelector() {
    let breakfastFood = ['Bacon and Gouda', 'Double-Smoked Bacon', 'Turkey Bacon', 'Sausage, Cheddar and Egg'];
    let para = document.getElementById("hotfood-el");
    para.innerHTML = breakfastFood[Math.floor(Math.random() * breakfastFood.length)];
    let bakeryBtn = true;
    bakery.setAttribute('disabled', 'true');
    lockedFood.breakfastFood = para.innerHTML;
}

function bakerySelector() {
    let bakedGoods = ['Croissants', 'Glazed Doughnut', 'Muffin', 'Cheese Danish'];
    let para = document.getElementById("bakery-el");
    para.innerHTML = bakedGoods[Math.floor(Math.random() * bakedGoods.length)]
    let breakfast = true;
    hotFood.setAttribute('disabled', 'true');
    let foodBtn = true;
    lockedFood.bakedGoods = para.innerHTML;
}

function myDrink() {
    let x = document.getElementById("drop-drink");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function myFood(){
    let i = document.getElementById("drop-food");
    if (i.style.display === "none") {
        i.style.display = "block"
    } else {
        i.style.display = "none"
    }
}

let para = document.getElementById("cold-el");
let paraTwo = document.getElementById("hot-el");
let paraThree = document.getElementById("size-el");
let paraFour = document.getElementById("syrup-el");
let save = document.getElementById("save");
let paraFive = document.getElementById("tea-el");
let paraSix = document.getElementById("refresher-el")
let paraSeven = document.getElementById("lemon-el")
function reset() {
    para.innerText = "COLD DRINK";
    paraTwo.innerText = "HOT DRINK";
    paraThree.innerText = "SIZE";
    paraFour.innerText = "SYRUP"
    save.innerText = "POST";
    paraSeven.innerText = "LEMONADE"
    lockedDrink.drink = "";
    lockedDrink.size = "";
    lockedDrink.syrup = "";
    document.getElementById("message-el").innerText = ""; 
    console.log(lockedDrink);
    paraFive.innerText = "TEA"
    paraSix.innerText = "REFRESHER"
     for (let i = 0; i <= 2; i++) {
        let button = [hot, cold, syrup]
        let otherbutton = [tea, refresher, lemon];
        button[i].removeAttribute("disabled");
        otherbutton[i].setAttribute('disabled', 'true');
    }
}
let paraEight = document.getElementById("bakery-el");
let paraNine = document.getElementById("hotfood-el")
function resetOrder() {
    lockedDrink.bakedGoods = "";
    lockedDrink.breakfastFood = "";
    post.innerText = "Save"
    paraNine.innerText = "BREAKFAST FOOD"
    paraEight.innerText = "BAKED GOODS"
    document.getElementById("text-el").innerText = "";
    for (let j = 0; j<=1; j++) {
        let button = [hotFood, bakery]
        button[j].removeAttribute("disabled");
    }
}
let lockedDrink = {
    size: "",
    syrup: "", 
    drink: "",
}
let lockedFood = {
    breakfastFood: "",
    bakedGoods: ""
}

function saved() {
    let yourDrink = document.getElementById("message-el");
    console.log(lockedDrink);
    yourDrink.innerText = `You should get a(n) ${lockedDrink.size} ${lockedDrink.syrup} ${lockedDrink.drink}.`;
}

function submitOrder() {
    let yourFood = document.getElementById("text-el");
    console.log(lockedFood);
    yourFood.innerText = `You should get a(n) ${lockedFood.bakedGoods} ${lockedFood.breakfastFood}`;
}

resett.addEventListener("click", reset);

