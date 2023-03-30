let siffra = 0;

function plusclick(){
    siffra = siffra + 1;
    document.getElementById("tal").innerHTML = siffra;

}
function minusclick(){
    siffra = siffra -1;
    document.getElementById("tal").innerHTML = siffra;
}
const minus = document.getElementById("minus");
minus.addEventListener("click", minus);

function minus(){
    siffra = siffra - 1;
    document.getElementById("tal").innerHTML = siffra;
}