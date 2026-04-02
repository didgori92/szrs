// hw1
// while loop checks the condition first, then runs the code.
/* do while runs the code once first, then checks the condition. so if we have something, for example:
do{
    [code here]
} while(condition)
 
it will first run the code, and then check if it can run it again and go accordingly
*/

// hw2


let num = Math.floor(Math.random() * 20) + 1
let guess = 0

do {
    guess = Number(prompt("guess a number 1-20: "))
} while(guess !== num)

console.log("correct")


// hw3


let n = Number(prompt("enter number"))
let steps = 0

do {
    if(n % 2 === 0) {
        n = n / 2
    } else {
        n = n * 3 + 1
    }

    steps++
} while(n !== 1)

console.log(steps)


// hw4


let list1 = [5, "hello", true, 3, "world", null]

list1.forEach(el => {
    if(typeof el === "number") {
        console.log(el * el)
    } else if(typeof el === "string") {
        console.log(el.split("").reverse().join(""))
    } else {
        console.log(el)
    }
})


// hw5


let nums = [1,2,3,4,5,6,7,8,9,10]
let mult = 1

nums.forEach(n => {
    mult *= n
})

console.log(mult)


// hw6


let words = ["hi", "hello", "js", "code"]

let res = words.map((w, i) => {
    return i + " " + w
})

console.log(res)


// hw7


let numbers = [1,2,3,4,5,6,7,8,9]

let res2 = numbers.map((n, i) => {
    if(n % 3 === 0) {
        return n + i
    } else {
        return n * 2
    } 
})

console.log(res2)