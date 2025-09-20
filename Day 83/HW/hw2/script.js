var num = Number(prompt("Enter a number: "))
var num2 = Number(prompt("Enter another number: "))
var action = prompt("Enter the action you want to perform (+, -, * or /): ")

if (action === "+") {
    var result = num + num2
    console.log (result)
} else if (action === "-") {
    var result = num - num2
    console.log (result)
} else if (action === "*") {
    var result = num * num2
    console.log (result)
} else if (action === "/") {
    var result = num / num2
    console.log (result)
}

alert("The result is " + result)