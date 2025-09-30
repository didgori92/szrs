let num = Number(prompt("Enter a number "))

if (num % 5 === 0 && num % 10 !== 0) {
    console.log("ეს ნომერი არის 5ის კერადი, და არ არის 10ის")
} else {
    console.log("არ არის 5ის ჯერადი")
}