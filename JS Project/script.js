const colors = ["#000080", "#00008B", "#5d8aa8", "#e32636", "#e52b50", "#9966cc", "#a4c639", "#cd9575",
"#779ecb", "#872657", "#8fbc8f", "#915c83", "#faebd7", "#008000", "#8db600", "#98777b", "#bcd4e6",
 "#fe6f5e", "#ace5ee", "#66ff00", "#fb607f", "#480607", "#bd33a4", "#e30022", 
"#de3163", "#0047ab", "#996666", "#fff8dc", "#f0e130", "#008b8b", "#483c32",
"#d70a53", "#e9692c", "#9955bb", "#4b5320", "#a52a2a", "#fdee00", "#ff2052", 
"#79443b", "#cc0000", "#006a4e", "#cb4154", "#c32148", "#a52a2a", "#cc5500", "#006b3c", "#de3163",  ];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const numbers = "0123456789";
const alphabets = "abcdef";

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomAlphabet() {
    return alphabets[Math.floor(Math.random() * alphabets.length)]
}

function getRandom() {
    let arr = [];
    arr.push(getRandomNumber());
    arr.push(getRandomAlphabet());
    return arr[Math.floor(Math.random() * arr.length)]
}

btn.addEventListener("click", () => {
    let hex = "#";
    for(let i=0;i<6;i++){
        hex += getRandom()
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
})





/*btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];


}) 

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}*/