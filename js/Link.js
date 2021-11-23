const linkForm = document.querySelector("#Link");
const linkInput = document.querySelector("#Link input");


function mouseOnInput() {
    linkInput.classList.toggle("bottomLine")
}
function mouseOutInput() {
    linkInput.classList.toggle("bottomLine")
}
linkInput.addEventListener("mouseenter", mouseOnInput);
linkInput.addEventListener("mouseout", mouseOutInput);

function startlinkInput(event) {
    event.preventDefault();
    const find = linkInput.value;
    location.href = `http://Google.com/search?q=${find}`
}

linkForm.addEventListener("submit", startlinkInput)