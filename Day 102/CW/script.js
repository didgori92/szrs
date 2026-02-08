// cw 1

let list = [1, 2, 5, 6, 3, 9, 4, 10, 14, 13]

for(let i of list) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

// cw 2

let stri = "elephant"
let vowels = "aeiouAEIOU"


for(let a of stri) {
    if(vowels.includes(a)) {
        console.log(a)
    }
}

// cw3

let car = {
    name: "mercedes",
    brand: "E-class",
    year: 1953,
    colour: "blue"
}

let keys = Object.keys(car)

for(let key of keys) {
    console.log(key)
}

let values = Object.values(car)
for(let value of values) {
    console.log(value)
}

// cw4

let nums = {
    num1: 23,
    num2: 34,
    num3: 1,
    num4: 35,
    num5: 66,
    num7: 24,
    num8: 7
}

let count = 0
let sum = 0

for(let a in nums) {
    if(nums[a] % 2 === 0) {
        sum = sum + nums[a]
    } else {
        count = count + 1
    }
}

console.log(count, sum)