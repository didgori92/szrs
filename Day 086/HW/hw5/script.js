num = Number(prompt("Enter a number: "))

if (num === 3 || num === 7) {
    console.log("Congrats! you win a toy yoda!")
} else if (num > 8 ) {
    console.log("Too high")
} else if (num < 2) {
    console.log("Too low")
} else {
    console.log("I said put in a number, come on now, it aint that hard")
}