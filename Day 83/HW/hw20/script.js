var num1 = Number(prompt("Enter a number: "))
var num2 = Number(prompt("Enter a number: "))
var num3 = Number(prompt("Enter a number: "))
const sum = num1 + num2 + num3
if (sum % 2 === 0) {
    console.log.log(sum / 3)
} else if (sum % 2 !== 0) {
    console.log(sum * 2)
}