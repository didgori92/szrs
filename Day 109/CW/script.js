// cw1

let i = 0

do{
    if(i % 2 === 0) {
        console.log(i)
    } 
    i++
} while(i < 20)

console.log("cw1")

// cw2

let a = 0
let count = 0

let list = ["aee", "dd", "adefa", "hydra", "fort"]

do{
    if(list[a].length % 2 === 0) {
        count++
    }
    a++
} while(a < list.length)

console.log(count)
console.log("cw2")

// cw3

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(num => console.log(num * num))
console.log("cw3")

// cw4

let words = ["hi", "hello", "javascript", "code", "world"]

let cont = 0

words.forEach(word => {
    if(word.length > 4) cont++
})

console.log(cont)
console.log("cw4")