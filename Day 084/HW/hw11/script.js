let num = Number(prompt("Enter a number: "))
if (num % 100 === 0 || num % 150 === 0) {
    console.log("This number can be divided by either 100 or 150")
} else {
    console.log("You chose the wrong number")
}