// hw1

let check = function(numb) {
    return numb % 2 === 0 ? "Even" : "Odd"
}

console.log(check(6))


let check2 = (numb2) => {
    return numb2 % 2 === 0 ? "Even" : "Odd"
}

console.log(check2(5))

// hw2

let range = function(a, b) {
    let prod = 1

    for(let i = a; i <= b; i++) {
        prod = prod * i
    }

    return prod
}

console.log(range(2, 5))


let range2 = (a2, b2) => {
    let prod2 = 1

    for(let i = a2; i <= b2; i++) {
        prod2 = prod2 * i
    }

    return prod2
}

console.log(range2(2, 5))

// hw3

let root = function(num1) {
    return Math.sqrt(num1) % 1 === 0 ? Math.sqrt(num1) : num1 * num1
}

console.log(root(9))


let root2 = (num2) => {
    return Math.sqrt(num2) % 1 === 0 ? Math.sqrt(num2) : num2 * num2
}

console.log(root2(8))

// hw4

let bintodec = function(bin) {
    let res = 0
    let pow = 0

    for(let q = bin.length - 1; q >= 0; q--) {
        res = res + bin[q] * Math.pow(2, pow)
        pow++
    }

    return res
}

console.log(bintodec("1011"))


let bintodec2 = (bin) => {
    let res2 = 0
    let pow2 = 0

    for(let w = bin.length - 1; w >= 0; w--) {
        res2 = res2 + bin[w] * Math.pow(2, pow2)
        pow2++
    }

    return res2
}

console.log(bintodec2("1011"))

// hw5

let count = function(str) {

    let result = {}

    str = str.toLowerCase()

    for(let z = 0; z < str.length; z++) {
        let char = str[z]
        if(char !== " ") {
            if(result[char]) {
                result[char] = result[char] + 1
            } else {
                result[char] = 1
            }
        }
    }

    return result
}

console.log(count("Goa Academy"))


let count2 = (str2) => {

    let result2 = {}

    str2 = str2.toLowerCase()

    for(let x = 0; x < str2.length; x++) {
        let char2 = str2[x]

        if(char2 !== " ") {
            if(result2[char2]) {
                result2[char2] = result2[char2] + 1
            } else {
                result2[char2] = 1
            }
        }
    }

    return result2
}

console.log(count2("Goa Academy"))