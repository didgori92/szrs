// hw1


let words = ["apple", "banana", "orange", "grape", "kiwi", "watermelon", "pear"]

let longest = words.reduce((a, b) => {
    return a.length > b.length ? a : b
})

console.log(longest)


// hw2


let nums = [1, 2, 3, 4, 5, 6]

let sum = nums.reduce((acc, n) => acc + n)

console.log(sum)


// hw3


let bools = [true, true, false, true]

let Trve = bools.every(b => b === true)

console.log(Trve)


// hw4


let arr = [1, 2, 2, 3, 4, 4, 5]

let unique = arr.filter((el, i) => arr.indexOf(el) === i)

console.log(unique)


// hw5


let obj = { a: 1, b: 2, c: 3, d: 4 }

for(let key in obj) {
    if(obj[key] % 2 === 0) {
        console.log(key, obj[key])
    }
}

// hw6


function count(str) {
    let res = { }

    str.split("").forEach(ch => {
        if(res[ch]) {
            res[ch]++
        } else {
            res[ch] = 1
        }
    })

    return res
}

console.log(count("hello"))