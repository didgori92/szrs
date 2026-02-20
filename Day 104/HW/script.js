// hw 1

let calculator = {
    add: function (a, b) {
        return a + b
    },
    minus: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

console.log(calculator.add(10, 5))
console.log(calculator.minus(10, 5))
console.log(calculator.multiply(10, 5))
console.log(calculator.divide(10, 5))

// hw2

let movie = {
    name: "fury",
    rating: "8.7/10",
    date: "2014",

    ntrtfn: function() {
        return "You didnt rate the movie"
    }
}

let ans = prompt("Do you want to rate Fury? (Y/N)")

if(ans === "Y") {
    let rate = prompt("Insert your rating: ")
    movie.rating = rate
    console.log("The new rating is ", movie.rating)
} else {
    console.log(movie.ntrtfn())
}

// hw3

let me = {
    name: "levani",
    age: 18,
    employed: "yes",

    ager: function() {
        return this.age + 1
    }
}

console.log(me.ager())

// hw4

function guessNumber() {
    let number = Math.floor(Math.random() * 10) + 1

    for(let i = 1; i <= 3; i++) {

        let guess = Number(prompt("Try to guess the number (1-10): "))

        if(guess === number) {
            alert("Correct! You guessed the number")
            return
        } else {
            alert("Wrong! Try again: ")
        }
    }

    alert("Out of tries! The number was " + number)
}

guessNumber()

// hw5

let ob = {
    items: [2, "hello", true, 5, 3, "world", false, 4, 8, 10],

    mult: function() {
        let result = 1

        for(let item of this.items) {
            if(typeof item === "number") {
                result = result * item
            }
        }

        return result
    }
}

console.log(ob.mult())