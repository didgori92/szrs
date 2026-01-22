let n = Number(prompt("Enter a number: "))


let sum = 0
let odd = 1
let root = 0


if (n === 0) {
    console.log("Has a square root: 0")
} else {
    while (sum < n) {
        sum += odd
        odd += 2
        root += 1
    }
    if (sum === n) {
        console.log("Has a square root: " + root)
    } else {
        console.log("Does not have an integer square root")
    }
}