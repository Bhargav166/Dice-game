// Random number for dice 1
var random1 = Math.floor(Math.random() * 6) + 1;
console.log(random1);

// Random number for dice 2
var random2 = Math.floor(Math.random() * 6) + 1;
console.log(random2);

// Dice 1
if (random1 === 1) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice1.png");
}
else if (random1 === 2) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice2.png");
}
else if (random1 === 3) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice3.png");
}
else if (random1 === 4) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice4.png");
}
else if (random1 === 5) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice5.png");
}
else if (random1 === 6) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice6.png");
}


// Dice 2
if (random2 === 1) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice1.png");
}
else if (random2 === 2) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice2.png");
}
else if (random2 === 3) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice3.png");
}
else if (random2 === 4) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice4.png");
}
else if (random2 === 5) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice5.png");
}
else if (random2 === 6) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice6.png");
}

// If player 1 wins
if (random1 > random2) {
    document.getElementsByTagName("h1")[0].style.fontSize = "80px"
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 WON!"
}
else if (random1 < random2) {
    document.getElementsByTagName("h1")[0].style.fontSize = "80px"
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 WON! 🚩"
}
else {
    document.getElementsByTagName("h1")[0].style.fontSize = "80px"
    document.getElementsByTagName("h1")[0].innerHTML = "TIE!"
}