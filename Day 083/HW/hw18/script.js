var usermove = prompt("Enter rock, paper or scissors ").toLocaleLowerCase()
var mymove = "rock"
if (usermove === mymove) {
    console.log("its a tie")
} else if (usermove === "paper") {
    console.log("you win")
} else if (usermove === "scissors") {
    console.log("you lose")
} else {
    console.log("invalid move")
}