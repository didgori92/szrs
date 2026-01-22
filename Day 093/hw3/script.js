let number = prompt("Enter a number: ")
let divisors = []

for(let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors.push(i)
    }
}

console.log(divisors)