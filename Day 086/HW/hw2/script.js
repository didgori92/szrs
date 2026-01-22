points = Number(prompt("Enter your points: "))

if (points >= 90) {
    console.log("Amazingly done!")
} else if (points > 70 && points < 90) {
    console.log("Well done!")
} else if (points >= 50 && points <= 70) {
    console.log("You did average")
} else if (points < 50) {
    console.log("You need to improve")
} else {
    console.log("put in a number, you dingus")
}