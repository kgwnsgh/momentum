const lotoClick = document.querySelector("#loto");
const optionBox = document.querySelector("#option-box");
const h1 = document.querySelector("#option-box h1");
const cal = document.querySelector("#calcul-form")



function makeLotoNumber() {
    upandDownFrom.classList.add("hidden");
        let number = []
        for (let i = 1; i <= 7; i++) {
            number.push(Math.floor(Math.random() * 44) + 1);
            for (let c = 0; c < i; c++) {
                if (number[i] === number[c]) {
                    number.pop();
                    i--;
                }
            }
        }

        if(h1.textContent !== "") {
            h1.textContent = ""
            cal.classList.add("hidden");
        }else{
        h1.textContent = `추첨번호 ${number}`
        cal.classList.add("hidden");
        
    }
    
}

lotoClick.addEventListener("click", makeLotoNumber)