const upAndDown = document.querySelector("#upAndDown");
const upandDownFrom = document.querySelector("#upanddown-form")
const TextBox = document.querySelector("#upanddown-form h1")
const smallNumber = document.querySelector("#upanddown-form h2")
const inputBox = document.querySelector("#upanddown-form input")
let randomNumber = 0;
let Numbers = [];



function makeRandomNumber() {
    const makeNumber = Math.floor(Math.random()*100);
    randomNumber = makeNumber;
}

function startGame() {
    foot.innerText = "";
    cal.classList.add("hidden");
    TextBox.innerText = "게임을 시작합니다. 0~100사이의 숫자를 지정해주세요"
    upandDownFrom.classList.toggle("hidden");
    makeRandomNumber()
}

function CheckTheNumber(event) {
    event.preventDefault();
    let myNumber = inputBox.value;
    if( myNumber < randomNumber) {
        TextBox.innerText = `UP, 더 높은 숫자를 지정해주세요. 기회는 ${10-Numbers.length} 남았습니다`
        Numbers.push(`${myNumber}⬆️`);
        smallNumber.innerText = Numbers
        inputBox.value = ""
    } else if( myNumber > randomNumber) {
        TextBox.innerText = `DOWN, 더 낮은 숫자를 지정해주세요. 기회는 ${10-Numbers.length} 남았습니다`
        Numbers.push(`${myNumber}⬇️`);
        smallNumber.innerText = Numbers
        inputBox.value = ""
    } else if(myNumber = randomNumber){
        TextBox.innerText = `축하드립니다. 정답 ${randomNumber} 맞추셨습니다`
        inputBox.value = ""
        smallNumber.innerText = `총 시도 횟수는 ${Numbers.length}`
        Numbers = [];
    }
    if(Numbers.length > 9) {
        TextBox.innerText = `당신은 탈락입니다. 정답은 ${randomNumber} 였습니다`
        inputBox.value = "";
        smallNumber.innerText = "";
        Numbers = [];
    }
}

upAndDown.addEventListener("click", startGame)
upandDownFrom.addEventListener("submit", CheckTheNumber)