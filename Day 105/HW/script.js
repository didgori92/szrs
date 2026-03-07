// hw1

// პირველი ცვლადი
let firval = false

// მეორე ცვლადი
let secval = firval || "Didgori"

/*
ამ შემთხვევაში secvalის მნიშვნელობა იქნება "Didgori", რადგან firval არის falsy და არის ცარიელი სტრინგი
*/

// hw2 

let list1 = ["Hello", 42, true, null, {name: "Didgori"}, 3.14]
let randomind = Math.floor(Math.random() * list1.length)
let random = list1[randomind]

console.log(random)

// hw 3

let secretnum = Math.floor(Math.random() * 100) + 1

let usernum = Number(prompt("Enter a number between 1 and 100"))

let difference = secretnum - usernum

if(usernum === secretnum) {
    alert("Correct! You guessed the number")
} else if(difference < 10 && difference > -10) {
    alert("You are very close")
} else if(usernum > secretnum) {
    alert("Your number is higher than the secret number")
} else {
    alert("Your number is lower than the secret number")
}

// hw4

let usrnm = Number(prompt("Enter a numerical password: "))
let score = 0

if(typeof usrnm !== "number") {
    alert("Input is not a number")
} else {
    let strnum = String(usrnm)
    let len = strnum.length

    if(len >= 6) {
        score += 10
    } else if(len >= 3 && len < 6) {
        score += 5
    } else {
        score += 0
    }

    let temp = usrnm
    if(temp < 0) {
        temp = temp * -1
    }
    
    let sum = 0
    if(temp === 0) {
        sum = 0
    } else {
        while(temp > 0) {
            sum += temp % 10
            temp = Math.floor(temp / 10)
        }
    }

    if(sum > 20) {
        score += 10
    } else if(sum >= 15 && sum <= 20) {
        score += 5
    } else {
        score += 0
    }

    if(score > 15) {
        alert("Password is strong")
    } else if(score >= 10 && score <= 15) {
        alert("Password is medium strength")
    } else {
        alert("Password is weak")
    }
}