const calculForm = document.querySelector("#calcul-form");
const calculInput = document.querySelector("#calcul-form input");
const calculetor = document.querySelector("#calcul");
const foot = document.querySelector("#option-box h1");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");
const getmul = document.querySelector(".getmul");
const getdiv = document.querySelector(".getdiv");
const getplu = document.querySelector(".getplu");
const getmiu = document.querySelector(".getmiu");
const getdone = document.querySelector(".getdone");
let checkNumber = false;

function add(char) {
    const addChar = char.target.textContent;

    if (isNaN(addChar) == true) {
        checkNumber = false;
    } else {
        checkNumber = true;
    }
    
    if (checkNumber == false) {
        if (isNaN(addChar) == true) {
            
        } else {
            calculInput.value = calculInput.value + addChar;
        }
    } else {
        calculInput.value = calculInput.value + addChar;
    }

    
}

function hanldleCalcul(event) {
event.preventDefault();
let result = eval(calculInput.value);
calculForm
    .classList
    .add("hidden");
h1.innerText = "Plies write correct"
h1.innerText = result;
}

function showCalcul() {
    upandDownFrom.classList.add("hidden");
if (foot.textContent !== "") {
    calculInput.value = "";
    foot.innerText = "";
    calculForm
        .classList
        .remove("hidden");
} else {
    calculInput.value = "";
    calculForm
        .classList
        .toggle("hidden");
}
}

calculForm.addEventListener("submit", hanldleCalcul);
calculetor.addEventListener("click", showCalcul)
num1.addEventListener("click", add)
num2.addEventListener("click", add)
num3.addEventListener("click", add)
num4.addEventListener("click", add)
num5.addEventListener("click", add)
num6.addEventListener("click", add)
num7.addEventListener("click", add)
num8.addEventListener("click", add)
num9.addEventListener("click", add)
num0.addEventListener("click", add)
getmul.addEventListener("click", add)
getdiv.addEventListener("click", add)
getplu.addEventListener("click", add)
getmiu.addEventListener("click", add)
getdone.addEventListener("click", hanldleCalcul)
