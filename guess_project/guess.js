const random_number = Math.floor(Math.random() * 9) +1;
let number_guess = 0;

console.log("randomnumber:" + random_number);

function guessnumber() {
    console.log("click")

    let textfelt_guess = document.getElementById("guess").value
    let guess_int = Number(textfelt_guess)
    let win = false
    let answer = document.getElementById("answer")

    if (number_guess < 3) {
    if (random_number === guess_int) {
    console.log('Correct! number_guess= $(number_guess)')
    win = true
    answer.innerHTML= "Winner!"
    number_guess = 3
}
else{
    console.log('Wrong! number_guess= $(number_guess)')

    if (number_guess === 2)
    answer.innerHTML= "Loser!"
    else answer.innerHTML=$(textfelt_guess) +"Is Wrong! Guess Nr" +$(number_guess+1)+ "Of 3"

    document.getElementById("guess").value=""
    document.getElementById("guess").focus()
}
number_guess++
}
else{
    answer.innerHTML="Loser!"
  }
}