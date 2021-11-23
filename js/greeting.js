const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginFrom.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(event) {
    const date = new Date()
    const time = date.getHours();
    if(time >= 22) {
        greeting.innerText = `How was Today? ${event}.`
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else if( time >= 18 && time < 22 ) {
        greeting.innerText = `Good evening, ${event}.`
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else if( time >= 12 && time < 18 ) {
        greeting.innerText = `Good efternoon, ${event}.`
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else if( time >= 10 && time < 12 ) {
        greeting.innerText = `How are you? ${event}.`
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else if( time >= 6 && time < 10 ) { 
        greeting.innerText = `Good moning, ${event}.`
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else {
        greeting.innerText = `Sleep is Emportunt ${event}`    
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginFrom.classList.remove(HIDDEN_CLASSNAME);
    loginFrom.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}
