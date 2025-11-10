let n = Number(prompt("Enter a number: "))


let sum = 0
let odd = 1


for (let i = 0; i < n; i++) {
    sum += odd
    odd += 2
}

console.log(sum)