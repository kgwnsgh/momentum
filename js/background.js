const image = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
];

const chosenImage = image[Math.floor(Math.random() * image.length)]

const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;

const Height = window.innerHeight
const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
