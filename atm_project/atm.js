class Money {
    constructor(amount, sort){
    this.amount = amount
    this.sort = sort
    }
}

function exChange(amount, banknote){
    return Math.floor(amount / banknote)
}

function getExchangeArray(amountInput, price){
    let amount_coin = 0
    let change = 0

    banknote_coin_array = []

    //500------------------------
    change = amountInput - price
    amount_coin = exChange(change, 500);
    change = change % 500

    let t_inbet = new Money(0, 500);
    banknote_coin_array.push(t_inbet);

    if (amount_coin > 0){
        t_inbet.amount = amount_coin
    }
    console.log(`t_inbet= ${amount_coin}`);
    
    //100-------------------------
    amount_coin = exChange(change, 100);
    change = change % 100
    
    t_inbet = new Money(0, 100);
    banknote_coin_array.push(t_inbet);
    
    if (amount_coin > 0){
            t_inbet.amount = amount_coin
    }

    banknote_coin_array.push
    console.log(`t_inbet= ${amount_coin}`);

    //50-----------------------
    amount_coin = exChange(change, 50);
    change = change % 50
    
    t_inbet = new Money(0, 50);
    banknote_coin_array.push(t_inbet);
    
    if (amount_coin > 0){
            t_inbet.amount = amount_coin
    }

     banknote_coin_array.push
     console.log(`t_inbet= ${amount_coin}`);

    //20--------------------
    amount_coin = exChange(change, 20);
    change = change % 20
    
    t_inbet = new Money(0, 20);
    banknote_coin_array.push(t_inbet);
    
    if (amount_coin > 0){
            t_inbet.amount = amount_coin
    }

    banknote_coin_array.push
    console.log(`t_inbet= ${amount_coin}`);

    //10----------------
    amount_coin = exChange(change, 10);
    change = change % 10
    
    t_inbet = new Money(0, 10);
    banknote_coin_array.push(t_inbet);
    
    if (amount_coin > 0){
            t_inbet.amount = amount_coin
    }

    banknote_coin_array.push
    console.log(`t_inbet= ${amount_coin}`);

    //5------------------
        amount_coin = exChange(change, 5);
        change = change % 5
    
        t_inbet = new Money(0, 5);
        banknote_coin_array.push(t_inbet);
    
        if (amount_coin > 0){
            t_inbet.amount = amount_coin
        }

        banknote_coin_array.push
        console.log(`t_inbet= ${amount_coin}`);
    
    //1------------------
    amount_coin = exChange(change, 1);
    change = change % 1

    t_inbet = new Money(0, 1);
    banknote_coin_array.push(t_inbet);

    if (amount_coin > 0){
        t_inbet.amount = amount_coin
    }

    banknote_coin_array.push
    console.log(`t_inbet= ${amount_coin}`);

    return banknote_coin_array
}

const input_price = document.getElementById("price");
const input_inbet = document.getElementById("inbet");
const result = document.getElementById("result_div");
const calculationButton = document.getElementById("calc_button");

calculationButton.addEventListener("click", calculationClick);

function calculationClick(){

    let t_price = parseInt(input_price.value)
    let t_inbet = parseInt(input_inbet.value)

    if (t_price > t_inbet){
        alert("You're in debt.")
    }
    else{
    let exchange_array = getExchangeArray(t_inbet, t_price)
    
    result.innerHTML = `<br><hr><h3>Change</h3>
    500 = ${exchange_array[0].amount} st. <br>
    100 = ${exchange_array[1].amount} st. <br>
    50 = ${exchange_array[2].amount} st. <br>
    20 = ${exchange_array[3].amount} st. <br>
    10 = ${exchange_array[4].amount} st. <br>
    5 = ${exchange_array[5].amount} st. <br>
    1 = ${exchange_array[6].amount} st. <br>`
    }
}