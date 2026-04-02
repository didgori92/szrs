// hw1


let nums = [1, 2.5, 3, 4.7, 5, 6.2, 7]

let ints = nums.filter(n => Number.isInteger(n))

console.log(ints)


// hw2


let words = ["apple", "banana", "orange", "grape", "kiwi"]

let vowels = ["a","e","i","o","u"]

let res = words.filter(w => vowels.includes(w[0]))

console.log(res)


// hw3


let arr = [1, 2, 3, 4, "hi", true, 7, 8, 9]

let odd = arr.filter(el => typeof el === "number" && el % 2 !== 0)

console.log(odd)


// hw4


let nums2 = [2, 4, 6, 8, 10]

let squared = nums2.map(n => n * n)

let twodig = squared.filter(n => n >= 10 && n <= 99)

console.log(twodig)


// hw5


let str = "this is a long string"

let arr2 = str.split("")

let vowels2 = ["a","e","i","o","u"]

let index = arr2.findIndex(ch => vowels2.includes(ch))

console.log(index)


// hw6


let nums3 = [4, 6, 8, 9, 11, 15]

let prime = nums3.find(n => {
    if(n < 2) {
        return false
    }
    
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
    }

    return true
})

console.log(prime)