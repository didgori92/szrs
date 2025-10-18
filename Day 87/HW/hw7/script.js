let userinput = Number(prompt("Enter a number: "))
let userinput2 = Number(prompt("Enter another number: "))

let start = userinput
let end = userinput2
if (start > end) {
    let tmp = start
    start = end
    end = tmp
}

let sum = 0
for (let i = start; i <= end; i++) {
    sum += i
}

console.log(sum)