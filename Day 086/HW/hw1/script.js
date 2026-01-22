num = Number(prompt("Enter a number: "))
if (num % 2 === 0 && num % 5 !== 0) {
    console.log("The number is even and not a multiple of 5")
} else {
    console.log("The number is either odd or a multiple of 5")
}