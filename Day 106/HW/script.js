// hw1

let op = prompt("Enter a command: ")
let num1 = Number(prompt("Enter a number: "))
let num2 = Number(prompt("Enter another number: "))

switch(op) {
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    default: 
    console.log("wrong command")
}

// hw2

let grade = prompt("enter a grade: ")

switch(grade) {
    case "A":
        console.log("perfect score!")
        break
    case "B":
        console.log("you did good!")
        break
    case "C":
        console.log("you did decently")
        break
    case "D":
        console.log("you gotta practice more")
        break
    case "F":
        console.log("you failed sadly")
        break
    default:
        console.log("that grade doesnt exist")
}

// hw3

let grad = Number(prompt("what score did you get? "))

switch(true) {
    case (grad === 100):
        console.log("Perfect score!")
        break
    case (grad >= 90 && grad <= 100):
        console.log("A")
        break
    case (grad >= 80 && grad <= 89):
        console.log("B")
        break
    case (grad >= 70 && grad <= 79):
        console.log("C")
        break
    case (grad >= 55 && grad <= 69):
        console.log("D")
        break
    case (grad < 55):
        console.log("F")
        break
    default:
        console.log("you input the score incorrectly")
}

// hw4

let usernum = Number(prompt("Enter a number: "))

usernum > 0 ? console.log("The number is positive") : console.log("The number is negative")

// hw5

let numb = 1000

let stat = prompt("What is your current status? ")

stat == "student" ? console.log(numb + numb * 0.20) : console.log(numb + numb * 0.05)

// hw6

let age = Number(prompt("Enter your age: "))

age > 18 ? console.log("You are an adult") : console.log("You are underage")

// hw7

let num = Number(prompt("Enter a number: "))

num % 2 === 0 ? console.log(Math.pow(num, 3)) : console.log(Math.pow(num, 2))

// hw 8


// ვერ მივხვდი როგორ ვიხმარო ერთად switch case და ternary ოპერატორი და ცალ ცალკე გავაკეთე

// switch case

let day = prompt("Enter the day of the week: ")
let amount = Number(prompt("Enter the amount: "))

switch(day) {
    case "Monday":
        console.log(amount * 0.95)
        break
    case "Tuesday":
        console.log(amount * 0.90)
        break
    case "Wednesday":
        console.log(amount * 0.85)
        break
    case "Thursday":
        console.log(amount * 0.80)
        break
    case "Friday":
        console.log(amount * 0.75)
        break
    case "Saturday":
        console.log(amount * 0.50)
        break
    case "Sunday":
        console.log(amount * 0.50)
        break
    default:
        console.log("Day or amount is invalid")
}


// ternary operator

let day2 = prompt("Enter the day of the week: ")
let amount2 = Number(prompt("Enter the amount: "))

day2 === "Monday" ? console.log(amount2 * 0.95) : day2 === "Tuesday" ? console.log(amount2 * 0.90) :
day2 === "Wednesday" ? console.log(amount2 * 0.85) :
day2 === "Thursday" ? console.log(amount2 * 0.80) :
day2 === "Friday" ? console.log(amount2 * 0.75) :
day2 === "Saturday" ? console.log(amount2 * 0.50) :
day2 === "Sunday" ? console.log(amount2 * 0.50) : console.log("Day or amount is invalid")