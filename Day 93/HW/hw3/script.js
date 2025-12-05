let number = prompt("Enter a number")
let divisor = []

for(let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisor.push(i)
    }
}

console.log(divisor)