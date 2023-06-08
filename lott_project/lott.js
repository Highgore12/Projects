const answer_div = document.getElementById("answer_div");
const input_amount_win = document.getElementById("input_amount_win")
const prizes = [
    "Squishmallow",
    "Monster Energy",
    "Fancy Car",
    "Tobaco",
    "Mystery Prize",
    "Gym Membership",
    "Alcohol",
    "Comunism",
    "Robux",
]
function random_click() {

    let rewards = `<h3>Your Rewards:</h3>`
    let amount_prize = input_amount_win.value
    let int_amount_prize = parseInt(amount_prize)
    
    for (i=0; i<int_amount_prize; i++){
        let random_pick = Math.floor(Math.random() * 8)
        let t_prize = prizes[random_pick]

        rewards += `<p>${t_prize}</p>`
    }
    answer_div.innerHTML = rewards
}