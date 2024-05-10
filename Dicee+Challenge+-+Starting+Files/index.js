var random_num1 = Math.floor(Math.random() * 6) + 1;
var random_num2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + random_num1 + ".png";
var randomDiceImage2 = "images/dice" + random_num2 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1)
console.log(document.querySelector(".img1"))
document.querySelector(".img2").setAttribute("src", randomDiceImage2)
if (random_num1 > random_num2) {
    document.querySelector("h1").textContent = "Player 1 Wins!!"
} else if (random_num1 < random_num2) {
    document.querySelector("h1").textContent = "Player 2 Wins!!"
} else {
    document.querySelector("h1").textContent = "We have a draw!!"
}